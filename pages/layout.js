import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Global/Header.jsx";
import Footer from "../components/Global/Footer.jsx";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1350,
      big:1480,
      xl: 1500,
    },
  },
});

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
