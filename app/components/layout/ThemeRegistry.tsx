"use client"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import type React from "react"

import CssBaseline from "@mui/material/CssBaseline"
import { Playfair_Display, Montserrat } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
})

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: "#ec1d25", // Gold accent color like in Pato theme
      light: "#e3c38a",
      dark: "#b78a3c",
    },
    secondary: {
      main: "#333333", // Dark color for sections
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#222222",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h1: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
      letterSpacing: "0.05em",
    },
    h2: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
      letterSpacing: "0.05em",
    },
    h3: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 600,
    },
    h4: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 600,
    },
    h5: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 500,
      fontStyle: "italic",
    },
    h6: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 500,
    },
    button: {
      fontWeight: 600,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: "12px 36px",
          letterSpacing: "2px",
          fontWeight: 600,
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        outlined: {
          borderWidth: "1px",
          "&:hover": {
            borderWidth: "1px",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 0,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: "none",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(236, 29, 37, 1)",
        },
      },
    },
  },
})

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

