import React, { useState } from 'react';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || quantity.trim() === '') return;

    const newItem = { id: Date.now(), name, quantity: Number(quantity) };
    setItems([...items, newItem]);

    // Reset form fields
    setName('');
    setQuantity('');
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Item name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='number'
          placeholder='Quantity'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type='submit'>Add Item</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
