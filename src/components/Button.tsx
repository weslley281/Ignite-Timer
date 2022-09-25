import { ButtonContainer, ButtonVariante } from './Button.styles';

interface ButtonProps {
  variante?: ButtonVariante;
}

export function Button({ variante = 'primary' }: ButtonProps) {
  return <ButtonContainer variante={variante}>Enviar</ButtonContainer>;
}
