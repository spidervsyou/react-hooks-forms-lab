import React from 'react';
import Item from './Item';

function ShoppingList({ items, selectedCategory, onCategoryChange }) {
  const filteredItems = items.filter(item => item.name.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div>
      <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="all">All</option>
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetable</option>
        {/* Add more options as needed */}
      </select>
      <ul>
        {filteredItems.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
