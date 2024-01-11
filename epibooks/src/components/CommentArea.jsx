import React, { useState, useEffect } from "react";
import AddComment from "../components/AddComment";
import CommentsList from "./CommentList";

const CommentArea = ({ bookId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/books/${bookId}/comments`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlkNzU0OWU2Mjg4NjAwMTg4M2Y2ZmIiLCJpYXQiOjE3MDQ4MTc5OTMsImV4cCI6MTcwNjAyNzU5M30.HydpA5_pwb_b1sGVWtYNunQ26-8UXVR1ETaQnino7ys",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setComments(data);
        } else {
          // Gestione errore
          console.error("Errore durante il recupero dei commenti");
        }
      } catch (error) {
        // Gestione errore fetch
        console.error("Errore nella richiesta dei commenti:", error);
      }
    };

    fetchComments();
  }, [bookId]);

  return (
    <div>
      <CommentsList comments={comments} />
      <AddComment bookId={bookId} /> {/* Corretto passaggio di bookId */}
    </div>
  );
};

export default CommentArea;
