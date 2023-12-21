import React from "react";

const AddComment = ({ bookId }) => {
  const [comment, setComment] = React.useState("");
  const [rate, setRate] = React.useState(1);

  const handleAddComment = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDY1ZGI1MjViYjAwMThlZDA4MGUiLCJpYXQiOjE3MDMxNjc1ODEsImV4cCI6MTcwNDM3NzE4MX0.HS9nv-K73ygJNWzEkuxVlilxfd9wdUND0yDypYsuftI",
          },
          body: JSON.stringify({
            comment,
            rate: rate.toString(),
            elementId: bookId,
          }),
        }
      );
      if (response.ok) {
        console.log("Comment added successfully!");
        // Aggiorna la lista dei commenti...
      } else {
        console.error("Failed to add comment");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <select value={rate} onChange={(e) => setRate(parseInt(e.target.value))}>
        {[1, 2, 3, 4, 5].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default AddComment;













