import styled, { css } from 'styled-components';

export type ButtonVariante =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'alert';

interface ButtonContainerProps {
  variante: ButtonVariante;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'gray',
  danger: 'red',
  success: 'green',
  alert: 'yellow',
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  background-color: ${({ theme }) => theme['green-500']};

  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variante]};
    `;
  }} */
`;
