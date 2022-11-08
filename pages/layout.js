import React, { createContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Global/Header.jsx";
import Footer from "../components/Global/Footer.jsx";

// Context API
export const AppContext = createContext();

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1350,
      big: 1420,
      xl: 1500,
    },
  },
});

export default function Layout({ children }) {
  const [DialogueRegister, setDialogueRegister] = React.useState(false);
  const [DialogueLogin, setDialogueLogin] = React.useState(false);
  return (
    <AppContext.Provider
      value={{
        DialogueRegister,
        setDialogueRegister,
        DialogueLogin,
        setDialogueLogin,
      }}
    >
      <ThemeProvider theme={theme}>
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </AppContext.Provider>
  );
}
