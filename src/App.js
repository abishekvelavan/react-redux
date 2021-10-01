import React from 'react';
import './style.css';
import Header from './components/header';

export default function App() {
  const name = 'Abishek';
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Hello {name} !</p>
    </div>
  );
}
