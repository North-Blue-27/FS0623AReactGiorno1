import React from "react";

const CommentsList = ({ comments }) => {
  const listStyle = {
    color: "#ffffff", // Colore del testo dei commenti
  };

  const headingStyle = {
    color: "#f44336", // Colore del testo per la scritta "Comments"
  };

  return (
    <div>
      <h2 style={headingStyle}>Comments:</h2>
      <ul style={listStyle}>
        {comments.map((comment, index) => (
          <li key={index}>{comment.comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
