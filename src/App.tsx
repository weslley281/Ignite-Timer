import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Button } from './components/Button';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variante="primary" />
      <Button variante="danger" />
      <Button variante="secondary" />
      <Button variante="alert" />
      <Button />
    </>
  );
}
