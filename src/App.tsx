import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {

  return (

    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>

  )
}

export default App
