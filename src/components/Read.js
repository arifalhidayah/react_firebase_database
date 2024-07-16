import React, { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";

function Read() {
  const [fruitArray, setFruitArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const db = getDatabase(app);
      const dbRef = ref(db, "nature/fruits");
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        setFruitArray(Object.values(snapshot.val()));
      } else {
        setError("No data available");
      }
    } catch (error) {
      setError(`Error fetching data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h1>Read Data Fruits</h1>
      <button
        onClick={fetchData}
        style={{
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
        }}
      >
        {loading ? "Loading ..." : "Display Data"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {fruitArray.map((item, index) => (
          <li key={index}>
            {item.fruitName}: {item.fruitDescription}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Read;
