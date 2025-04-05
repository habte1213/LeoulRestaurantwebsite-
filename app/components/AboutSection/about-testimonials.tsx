"use client"
import { Box, Container, Typography, Paper, Rating } from "@mui/material"
import { styled } from "@mui/material/styles"
import { FormatQuote } from "@mui/icons-material"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: "#f9f5f0",
}))

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  textAlign: "center",
  marginBottom: theme.spacing(1),
}))

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontStyle: "italic",
  textAlign: "center",
  marginBottom: theme.spacing(6),
  color: theme.palette.text.secondary,
  fontFamily: theme.typography.h5.fontFamily,
}))

const TestimonialCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  margin: theme.spacing(1),
  borderRadius: 0,
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
}))

const QuoteIcon = styled(FormatQuote)(({ theme }) => ({
  fontSize: 40,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}))

interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  rating: number
}
const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Samuel Bekele",
      role: "Food Enthusiast",
      quote: "LEOUL BAR & RESTAURANT brings bold Ethiopian flavors in a cozy, vibrant setting.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Miller",
      role: "Frequent Diner",
      quote: "Always fresh, flavorful, and friendly! LEOUL has become my weekly favorite spot.",
      rating: 5,
    },
    {
      id: 3,
      name: "Helina Fikre",
      role: "Culinary Blogger",
      quote: "A perfect mix of tradition and creativity—LEOUL nails it every single time.",
      rating: 4,
    },
    {
      id: 4,
      name: "James Carter",
      role: "First-Time Guest",
      quote: "From drinks to desserts, everything at LEOUL was beyond expectations. Loved it!",
      rating: 5,
    },
  ]
  

export default function AboutTestimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">WHAT PEOPLE SAY</SectionTitle>
        <SectionSubtitle>Testimonials from our valued guests</SectionSubtitle>

        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <Box key={testimonial.id}>
              <TestimonialCard>
                <QuoteIcon />
                <Typography variant="body1" sx={{ mb: 3, fontStyle: "italic" }}>
                  "{testimonial.quote}"
                </Typography>
                <Rating value={testimonial.rating} readOnly precision={0.5} sx={{ mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.role}
                </Typography>
              </TestimonialCard>
            </Box>
          ))}
        </Slider>
      </Container>
    </SectionContainer>
  )
}

