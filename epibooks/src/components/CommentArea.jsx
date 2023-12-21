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
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDY1ZGI1MjViYjAwMThlZDA4MGUiLCJpYXQiOjE3MDMxNjc1ODEsImV4cCI6MTcwNDM3NzE4MX0.HS9nv-K73ygJNWzEkuxVlilxfd9wdUND0yDypYsuftI",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setComments(data);
        } else {
          // Gestione errore
        }
      } catch (error) {
        // Gestione errore fetch
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
