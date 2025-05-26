import { useState } from "react";
export default function Main() {
  const [itemsList, setItemsList] = useState([
    "titoloArticolo1",
    "titoloArticolo2",
    "titoloArticolo3",
    "titoloArticolo4",
  ]);
  const [newItem, setNewItem] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newItemsList = [...itemsList, newItem];
    setItemsList(newItemsList);
  };
  return (
    <main>
      <div className="container">
        <form onSubmit={handleFormSubmit} className="d-flex gap-2">
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="form-control grow-1"
            type="text"
          />
          <button className="btn btn-primary">Aggiungi</button>
        </form>
        <ul>
          {itemsList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
