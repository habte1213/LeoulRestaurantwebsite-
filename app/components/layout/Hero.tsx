"use client"
import { Box, Button, Typography, Slide } from "@mui/material"
import { styled } from "@mui/material/styles"
import { useState, useEffect } from "react";

const HeroContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  overflow: "hidden", // Add this to prevent scrollbars during slide
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
}))

const ContentContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  maxWidth: "800px",
  width: "100%",
  padding: "0 20px", // Add some padding
}))

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: "5rem",
  fontWeight: 700,
  letterSpacing: "5px",
  marginBottom: theme.spacing(2),
  textTransform: "uppercase",
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
  },
}))

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontStyle: "italic",
  marginBottom: theme.spacing(4),
  fontFamily: theme.typography.h5.fontFamily,
}))

const HeroButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: theme.palette.text.primary,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
}))

const slides = [
  {
    image: '/asset/5.jpg',
    subtitle: 'Welcome to',
    title: 'LEOUL BAR & RESTAURANT',
    buttonText: 'LOOK MENU'
  },
  {
    image: '/asset/bg-01.jpg',
    subtitle: 'Experience',
    title: 'FINE DINING',
    buttonText: 'RESERVATIONS'
  },
  {
    image: '/asset/bg2.jpg',
    subtitle: 'Discover',
    title: 'COCKTAIL BAR',
    buttonText: 'VIEW DRINKS'
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | "up" | "down">("right");

  // Auto slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection('left');
      setSlideIn(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
        setSlideDirection('right');
        setSlideIn(true);
      }, 500);
    }, 8000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <HeroContainer
      sx={{
        backgroundImage: `url('${currentSlide.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: 'background-image 0.5s ease-in-out'
      }}
    >
      <Slide in={slideIn} direction={slideDirection} timeout={500}>
        <div> {/* Wrapping div for Slide component */}
          <ContentContainer>
            <HeroSubtitle variant="h5">{currentSlide.subtitle}</HeroSubtitle>
            <HeroTitle variant="h1">{currentSlide.title}</HeroTitle>
            <HeroButton variant="contained" color="inherit">
              {currentSlide.buttonText}
            </HeroButton>
          </ContentContainer>
        </div>
      </Slide>
    </HeroContainer>
  )
}