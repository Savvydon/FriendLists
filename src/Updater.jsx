import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function Updater() {
  const [names, setNames] = useState([]);

  const sortedNames = names.sort((a, b) => a.localeCompare(b));

  function addNames() {
    const newName = document.getElementById("friendList").value;
    document.getElementById("friendList").value = "";
    //setNames((prevN) => [...prevN, newNames]);
    setNames([...names, newName]);
  }

  function removeFriend(index) {
    setNames(names.filter((_, i) => i !== index));
  }
  return (
    <div className="container">
      <div>
        <input
          type="text"
          id="friendList"
          className="input-field"
          placeholder="Enter Friend's Name"
        />
        <button className="add-btn" onClick={addNames}>
          Add Friend
        </button>
      </div>
      <h2>List of Friends</h2>
      <ol className="friend-list">
        {sortedNames.map((name, index) => (
          <li key={index}>
            {name}
            <FaTrash
              className="trash-icon"
              style={{ cursor: "pointer", color: "red" }}
              onClick={() => removeFriend(index)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
