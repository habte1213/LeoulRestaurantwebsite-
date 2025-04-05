"use client"
import { Box, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

const HeroContainer = styled(Box) ({
  position: "relative",
  height: "60vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 1,
  },
})

const ContentContainer = styled(Box) ({
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  maxWidth: "800px",
  width: "100%",
})

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: 700,
  letterSpacing: "5px",
  marginBottom: theme.spacing(2),
  textTransform: "uppercase",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
}))

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontStyle: "italic",
  marginBottom: theme.spacing(4),
  fontFamily: theme.typography.h5.fontFamily,
}))

export default function ContactHero() {
  return (
    <HeroContainer
      sx={{
        backgroundImage: "url('/asset/contact4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ContentContainer>
        <HeroSubtitle variant="h5">Get in Touch</HeroSubtitle>
        <HeroTitle variant="h1">CONTACT US</HeroTitle>
      </ContentContainer>
    </HeroContainer>
  )
}

