import React from "react";

const AddComment = ({ bookId, onAddCommentSuccess }) => {
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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlmZmU5OTI5ZTM2YjAwMTg2N2VkMDIiLCJpYXQiOjE3MDQ5ODQyMTcsImV4cCI6MTcwNjE5MzgxN30.NsNU1x78fvDgI6mLxG571RIo0yOeBRLlBIAmp9RJFBg",
          },
          body: JSON.stringify({
            comment,
            rate: rate.toString(),
            elementId: bookId,
          }),
        }
      );
      if (response.ok) {
        console.log("Commento aggiunto con successo!");
        // Aggiorna la lista dei commenti...

        // Chiamata alla funzione di callback
        if (onAddCommentSuccess) {
          onAddCommentSuccess();
        }

        // Pulisci il campo del commento dopo l'aggiunta con successo
        setComment("");
        setRate(1);
      } else {
        console.error("Impossibile aggiungere il commento");
        console.log("Response:", await response.json());
      }
    } catch (error) {
      console.error("Si è verificato un errore", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Aggiungi un commento..."
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
      <button onClick={handleAddComment}>Aggiungi Commento</button>
    </div>
  );
};

export default AddComment;