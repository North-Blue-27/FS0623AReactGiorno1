import React, { useState, useEffect } from "react";
import AddComment from "../components/AddComment";
import CommentsList from "./CommentList";

const CommentArea = ({ bookId }) => {
  const [comments, setComments] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/books/${bookId}/comments`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlmZmU5OTI5ZTM2YjAwMTg2N2VkMDIiLCJpYXQiOjE3MDQ5ODQyMTcsImV4cCI6MTcwNjE5MzgxN30.NsNU1x78fvDgI6mLxG571RIo0yOeBRLlBIAmp9RJFBg",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setComments(data);
        } else {
          console.error("Errore durante il recupero dei commenti");
        }
      } catch (error) {
        console.error("Errore nella richiesta dei commenti:", error);
      }
    };

    fetchComments();
  }, [bookId]);

  const handleAddCommentSuccess = () => {
    setSuccessMessage("Commento aggiunto con successo.");
  };

  const handleCloseSuccessMessage = () => {
    setSuccessMessage(null);
  };

  return (
    <div>
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={handleCloseSuccessMessage}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      <CommentsList comments={comments} />
      <AddComment
        bookId={bookId}
        onAddCommentSuccess={handleAddCommentSuccess}
      />
    </div>
  );
};

export default CommentArea;