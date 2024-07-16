import React, { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";

function Write() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const saveData = async () => {
    if (inputValue1.trim() === "" || inputValue2.trim() === "") {
      alert("Both fields are required");
      return;
    }

    try {
      const db = getDatabase(app);
      const newDocRef = push(ref(db, "nature/fruits"));
      await set(newDocRef, {
        fruitName: inputValue1,
        fruitDescription: inputValue2,
      });
      alert("Data saved successfully");
      setInputValue1("");
      setInputValue2("");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };
  return (
    <div style={{
        padding: '20px',
        maxWidth: '400px',
        margin: 'auto'
    }}>
      <h2>Save Fruit Data</h2>
      <div style={{
        marginBottom: '10px'
      }}>
        <input
          type="text"
          value={inputValue1}
          onChange={(e) => setInputValue1(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '10px'
          }}
        ></input>
      </div>
      <div style={{
        marginBottom: '10px'
      }}>
        <input
          type="text"
          value={inputValue2}
          onChange={(e) => setInputValue2(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '10px'
          }}
        ></input>
      </div>
      <br />
      <button 
      onClick={saveData}
      style={{
        padding: '10px 20px',
        backgroundColor: 'green',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
      }}>SAVE DATA</button>
    </div>
  );
}

export default Write;
