// src/components/ExampleComponent.jsx
import { useEffect, useState } from "react";

export default function ExampleComponent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/boq")    // proxy ⇒ http://localhost:5000/api/boq
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(console.error);
  }, []);

  return (
    <ul>
      {items.map(item => (
        <li key={item.itemNo}>
          {item.description} — {item.unit} @ Rs.{item.rate}
        </li>
      ))}
    </ul>
  );
}
