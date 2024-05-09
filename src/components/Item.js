import React from 'react';

function Item({ item }) {
  return (
    <li>{item.name} - {item.category}</li>
  );
}

export default Item;
