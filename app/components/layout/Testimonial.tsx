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
    name: "John Doe",
    role: "Food Enthusiast",
    quote: "The atmosphere and food were just outstanding. I had the best steak I've ever eaten in my life!",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Food Blogger",
    quote:
      "Pato's attention to detail is evident in every dish. The flavors are perfectly balanced and everything is so fresh.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Restaurant Critic",
    quote: "A truly authentic culinary experience. The chef's creativity shines through in every bite.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Wilson",
    role: "Regular Customer",
    quote:
      "I've been coming here for years and the quality has never wavered. Consistently excellent service and food.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

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
                      "{testimonial.quote}"
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

