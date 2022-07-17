import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&display=swap');

:root {
  --bg-color: #262626;
  --box-color: #2d2d2d;
  --dark-grey: #626262;
  --text-primary: #fff;
  --text-secondary: #C8C8C8;
  --project-date-color: #b4b4b4;
}

body {
    margin: 0;
    padding:0;
    background: var(--bg-color);
    font-family: 'Montserrat', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color:white
}

a:visited {
    color:white
}

li {
    list-style: none;
}
`;
