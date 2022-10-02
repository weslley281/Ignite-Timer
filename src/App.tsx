import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Button } from './components/Button';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variante="primary" />
      <Button variante="danger" />
      <Button variante="secondary" />
      <Button variante="alert" />
      <Button />
    </ThemeProvider>
  );
}
