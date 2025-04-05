"use client"
import { Box, Container, Typography, Card, CardContent, CardMedia, Stack } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Facebook, Instagram, Twitter } from "@mui/icons-material"

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: "#f8f9fa",
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

const ChefCard = styled(Card)(({ theme }) => ({
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
  borderRadius: 0,
  overflow: "hidden",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
  },
}))

const ChefName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(0.5),
  fontFamily: theme.typography.h6.fontFamily,
}))

const ChefRole = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  fontStyle: "italic",
}))

const SocialIcons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  "& svg": {
    fontSize: 20,
    color: theme.palette.text.secondary,
    transition: "color 0.3s ease",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}))

interface Chef {
  id: number
  name: string
  role: string
  bio: string
  image: string
}

const chefs: Chef[] = [
    {
      id: 1,
      name: "Mesfin Tadesse",
      role: "Executive Chef & Founder",
      bio: "With over 25 years of experience in traditional Ethiopian cuisine, Chef Mesfin brings the rich flavors of injera, doro wat, and spices to life. Trained in Addis Ababa, he has introduced Ethiopian dishes to global audiences.",
      image: "/asset/chefs3.jpg",
    },
    {
      id: 2,
      name: "Hiwot Mekonnen",
      role: "Head Chef",
      bio: "Chef Hiwot is known for her creative takes on classic Ethiopian dishes, blending local herbs and traditional techniques. Her signature lentil and vegetable dishes are a favorite among vegetarians and food lovers alike.",
      image: "/asset/chefs5.jpg",
    },
    {
      id: 3,
      name: "Abebe Yilma",
      role: "Pastry & Beverage Chef",
      bio: "Specializing in Ethiopian sweets and traditional drinks like tej and buna, Chef Abebe combines ancient recipes with modern twists. His honey-infused treats and coffee ceremony presentations are unforgettable.",
      image: "/asset/chefs2.jpg",
    },
  ]
  

export default function AboutChefs() {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">MEET OUR CHEFS</SectionTitle>
        <SectionSubtitle>The culinary artists behind our exceptional cuisine</SectionSubtitle>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{
            justifyContent: "center",
            alignItems: { xs: "center", md: "stretch" },
          }}
        >
          {chefs.map((chef) => (
            <Box key={chef.id} sx={{ width: { xs: "100%", sm: "80%", md: "33.333%" }, maxWidth: "350px" }}>
              <ChefCard>
                <CardMedia component="img" height="400" image={chef.image} alt={chef.name} />
                <CardContent sx={{ textAlign: "center", p: 3 }}>
                  <ChefName variant="h6">{chef.name}</ChefName>
                  <ChefRole variant="subtitle1">{chef.role}</ChefRole>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {chef.bio}
                  </Typography>
                  <SocialIcons>
                    <Facebook />
                    <Instagram />
                    <Twitter />
                  </SocialIcons>
                </CardContent>
              </ChefCard>
            </Box>
          ))}
        </Stack>
      </Container>
    </SectionContainer>
  )
}

