import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme['gray-900']};
    }

    body{
        background-color: ${({ theme }) => theme['gray-900']};
        color: ${({ theme }) => theme['gray-300']};
        color: #fff;
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }
`;
