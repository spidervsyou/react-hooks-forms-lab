import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'; // Importing v4 as uuid to generate unique ids

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem); // Pass the new item back to the parent component
    setItemName(''); // Clear the input fields after form submission
    setItemCategory('Produce');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <select value={itemCategory} onChange={(e) => setItemCategory(e.target.value)}>
        <option value="Produce">Produce</option>
        <option value="Meat">Meat</option>
        <option value="Dairy">Dairy</option>
        {/* Add more options as needed */}
      </select>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
