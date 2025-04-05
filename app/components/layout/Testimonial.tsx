"use client"
import { Box, Container, Typography, Avatar, Card, CardContent, Rating } from "@mui/material"
import { styled } from "@mui/material/styles"
import { FormatQuote } from "@mui/icons-material"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: "#fff",
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

const TestimonialCard = styled(Card)(({ theme }) => ({
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
  padding: theme.spacing(2, 2, 4),
  textAlign: "center",
  margin: theme.spacing(0, 1),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: 0,
}))

const QuoteIcon = styled(FormatQuote)(({ theme }) => ({
  fontSize: 40,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}))

const CustomerName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginTop: theme.spacing(2),
}))

interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  avatar: string
  rating: number
}

const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Abebe Kebede",
      role: "Food Enthusiast",
      quote: "The atmosphere and food were outstanding. " +
            "Best steak I've ever had in my life!",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: 2,
      name: "Selamawit Assefa",
      role: "Food Blogger",
      quote: "Pato's attention to detail shines in every dish. " +
            "Perfectly balanced flavors, incredibly fresh!",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4,
    },
    {
      id: 3,
      name: "Tewodros Getachew",
      role: "Restaurant Critic",
      quote: "A truly authentic culinary experience. " +
            "Chef's creativity shines in every bite.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: 4,
      name: "Alemnesh Gebre",
      role: "Regular Customer",
      quote: "Years of visits, never disappointed. " +
            "Consistent excellence in service and food.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: 5,
      name: "Dawit Mekonnen",
      role: "Executive Chef",
      quote: "Their cooking techniques impress me deeply. " +
            "Top-quality ingredients, flawless presentation.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: 6,
      name: "Yordanos Tadesse",
      role: "Hospitality Consultant",
      quote: "Service sets a gold standard. Attentive staff, " +
            "perfect ambiance for any occasion.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      id: 7,
      name: "Mikias Wolde",
      role: "Sommelier",
      quote: "Exceptional wine pairing selections. " +
            "Their list complements dishes beautifully.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    }
  ];

export default function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">TESTIMONIALS</SectionTitle>
        <SectionSubtitle>What Customers Say</SectionSubtitle>

        <Box sx={{ mt: 4 }}>
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <Box key={testimonial.id} sx={{ px: 2 }}>
                <TestimonialCard>
                  <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <QuoteIcon />
                    <Typography variant="body1" sx={{ mb: 3, fontStyle: "italic" }}>
                      &quot;{testimonial.quote}&quot;
                    </Typography>
                    <Rating value={testimonial.rating} readOnly precision={0.5} sx={{ mb: 3 }} />
                    <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ width: 80, height: 80, mb: 2 }} />
                    <CustomerName variant="h6">{testimonial.name}</CustomerName>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                  </CardContent>
                </TestimonialCard>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </SectionContainer>
  )
}

