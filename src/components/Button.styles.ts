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

  ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variante]};
    `;
  }}
`;
