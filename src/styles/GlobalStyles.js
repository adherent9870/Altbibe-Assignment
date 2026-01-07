import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui, sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }  h1, h2, h3 {
    margin: 0;
    font-weight: 600;
  }
  p {
    margin: 4px 0;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.muted};
  }
  input, select {
    padding: 6px 8px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
  }
  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
  }
`;
