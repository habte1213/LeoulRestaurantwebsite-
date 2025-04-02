"use client"
import { Box, Container, Typography, Card, CardContent, CardMedia, Tabs, Tab, Stack } from "@mui/material"
import type React from "react"

import { styled } from "@mui/material/styles"
import { useState } from "react"

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

const MenuCard = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: "transparent",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
  },
}))

const PriceTag = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 20,
  right: 20,
  backgroundColor: theme.palette.primary.main,
  color: "white",
  padding: theme.spacing(0.75, 1.5),
  borderRadius: 4,
  fontWeight: 600,
}))

const MenuItemTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
}))

const StyledTab = styled(Tab)(({ theme }) => ({
  fontSize: "0.9rem",
  fontWeight: 600,
  letterSpacing: "0.1em",
  padding: "12px 24px",
  "&.Mui-selected": {
    color: theme.palette.primary.main,
  },
}))

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
}

// Sample menu data
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Grilled Salmon",
    description: "Fresh salmon, asparagus, and herb butter sauce",
    price: 22.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "lunch",
  },
  {
    id: 2,
    name: "Beef Tenderloin",
    description: "Premium beef with roasted vegetables and red wine reduction",
    price: 28.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "dinner",
  },
  {
    id: 3,
    name: "Vegetable Risotto",
    description: "Creamy arborio rice with seasonal vegetables and parmesan",
    price: 18.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "lunch",
  },
  {
    id: 4,
    name: "Seafood Pasta",
    description: "Linguine with shrimp, mussels, and clams in a light tomato sauce",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "dinner",
  },
  {
    id: 5,
    name: "Eggs Benedict",
    description: "Poached eggs on English muffin with hollandaise sauce",
    price: 15.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "breakfast",
  },
  {
    id: 6,
    name: "Avocado Toast",
    description: "Sourdough bread with smashed avocado, poached egg, and microgreens",
    price: 14.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "breakfast",
  },
]

export default function MenuSection() {
  const [category, setCategory] = useState("lunch")

  const handleCategoryChange = (event: React.SyntheticEvent, newCategory: string) => {
    setCategory(newCategory)
  }

  const filteredItems = menuItems.filter((item) => item.category === category)

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">OUR MENU</SectionTitle>
        <SectionSubtitle>Delicious Creations</SectionSubtitle>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
          <Tabs
            value={category}
            onChange={handleCategoryChange}
            centered
            TabIndicatorProps={{
              style: {
                backgroundColor: "#d5a353",
              },
            }}
          >
            <StyledTab label="BREAKFAST" value="breakfast" />
            <StyledTab label="LUNCH" value="lunch" />
            <StyledTab label="DINNER" value="dinner" />
          </Tabs>
        </Box>

        <Stack direction="row" flexWrap="wrap" sx={{ mx: -2 }}>
          {filteredItems.map((item) => (
            <Box key={item.id} sx={{ width: { xs: "100%", sm: "50%", md: "33.333%" }, p: 2 }}>
              <MenuCard>
                <Box sx={{ position: "relative" }}>
                  <CardMedia component="img" height="220" image={item.image} alt={item.name} sx={{ borderRadius: 2 }} />
                  <PriceTag>${item.price.toFixed(2)}</PriceTag>
                </Box>
                <CardContent sx={{ px: 0 }}>
                  <MenuItemTitle variant="h6">{item.name}</MenuItemTitle>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </MenuCard>
            </Box>
          ))}
        </Stack>
      </Container>
    </SectionContainer>
  )
}

