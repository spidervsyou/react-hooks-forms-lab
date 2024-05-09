import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import ShoppingList from './ShoppingList';
import ItemForm from './ItemForm';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (searchText) => {
    // Implement search functionality if needed
  };

  const handleItemFormSubmit = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Header onDarkModeClick={toggleDarkMode} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={items} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
    </div>
  );
}

export default App;
