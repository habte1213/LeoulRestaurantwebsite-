"use client"
import { useState } from "react"
import { Box, Container, Typography, Stack, Card, CardMedia, CardContent, Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import MenuNavigation from "./MenuNavigation"

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

const MenuCard = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: "transparent",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
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

const MenuItemCard = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  borderBottom: "1px dashed rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.02)",
  },
}))

const MenuItemPrice = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  marginLeft: "auto",
  fontSize: "1.1rem",
}))

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  image?: string
  category: string
  featured?: boolean
}

// Sample menu data
const menuItems: MenuItem[] = [
  // Starters
  {
    id: 1,
    name: "Bruschetta",
    description: "Grilled bread rubbed with garlic and topped with olive oil, salt, tomato, and herbs",
    price: 9.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "starters",
    featured: true,
  },
  {
    id: 2,
    name: "Caprese Salad",
    description: "Fresh mozzarella, tomatoes, and sweet basil, seasoned with salt and olive oil",
    price: 12.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "starters",
    featured: true,
  },
  {
    id: 3,
    name: "Garlic Bread",
    description: "Freshly baked bread with garlic butter and herbs",
    price: 7.99,
    category: "starters",
  },
  {
    id: 4,
    name: "Calamari Fritti",
    description: "Crispy fried calamari served with lemon and marinara sauce",
    price: 14.99,
    category: "starters",
  },
  {
    id: 5,
    name: "Antipasto Platter",
    description: "Selection of Italian cured meats, cheeses, olives, and marinated vegetables",
    price: 18.99,
    category: "starters",
  },

  // Main Courses
  {
    id: 6,
    name: "Grilled Salmon",
    description: "Fresh salmon, asparagus, and herb butter sauce",
    price: 22.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "main",
    featured: true,
  },
  {
    id: 7,
    name: "Beef Tenderloin",
    description: "Premium beef with roasted vegetables and red wine reduction",
    price: 28.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "main",
    featured: true,
  },
  {
    id: 8,
    name: "Chicken Parmesan",
    description: "Breaded chicken breast topped with marinara sauce and melted mozzarella",
    price: 19.99,
    category: "main",
  },
  {
    id: 9,
    name: "Vegetable Risotto",
    description: "Creamy arborio rice with seasonal vegetables and parmesan",
    price: 18.99,
    category: "main",
  },
  {
    id: 10,
    name: "Seafood Pasta",
    description: "Linguine with shrimp, mussels, and clams in a light tomato sauce",
    price: 24.99,
    category: "main",
  },
  {
    id: 11,
    name: "Lamb Chops",
    description: "Grilled lamb chops with rosemary, garlic, and mint sauce",
    price: 26.99,
    category: "main",
  },

  // Pasta
  {
    id: 12,
    name: "Spaghetti Carbonara",
    description: "Classic pasta with eggs, cheese, pancetta, and black pepper",
    price: 16.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "pasta",
    featured: true,
  },
  {
    id: 13,
    name: "Fettuccine Alfredo",
    description: "Fettuccine pasta in a rich, creamy parmesan sauce",
    price: 15.99,
    category: "pasta",
  },
  {
    id: 14,
    name: "Lasagna",
    description: "Layers of pasta, ricotta, mozzarella, and our signature meat sauce",
    price: 17.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "pasta",
    featured: true,
  },
  {
    id: 15,
    name: "Penne Arrabbiata",
    description: "Penne pasta in a spicy tomato sauce with garlic and chili",
    price: 14.99,
    category: "pasta",
  },
  {
    id: 16,
    name: "Ravioli",
    description: "Handmade ravioli filled with ricotta and spinach in a sage butter sauce",
    price: 18.99,
    category: "pasta",
  },

  // Desserts
  {
    id: 17,
    name: "Tiramisu",
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
    price: 8.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "desserts",
    featured: true,
  },
  {
    id: 18,
    name: "Panna Cotta",
    description: "Silky vanilla cream with fresh berries and berry coulis",
    price: 7.99,
    category: "desserts",
  },
  {
    id: 19,
    name: "Chocolate Fondant",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
    price: 9.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "desserts",
    featured: true,
  },
  {
    id: 20,
    name: "Cannoli",
    description: "Crisp pastry tubes filled with sweet ricotta cream and chocolate chips",
    price: 6.99,
    category: "desserts",
  },

  // Drinks
  {
    id: 21,
    name: "Italian Wine Selection",
    description: "Choose from our curated selection of fine Italian wines",
    price: 9.99,
    category: "drinks",
  },
  {
    id: 22,
    name: "Espresso",
    description: "Traditional Italian coffee",
    price: 3.99,
    category: "drinks",
  },
  {
    id: 23,
    name: "Aperol Spritz",
    description: "Classic Italian aperitif with Aperol, Prosecco, and soda water",
    price: 8.99,
    category: "drinks",
  },
  {
    id: 24,
    name: "Limoncello",
    description: "Traditional Italian lemon liqueur served chilled",
    price: 7.99,
    category: "drinks",
  },
]

export default function MenuContent() {
  const [category, setCategory] = useState("starters")

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory)
  }

  const filteredItems = menuItems.filter((item) => item.category === category)
  const featuredItems = filteredItems.filter((item) => item.featured)
  const regularItems = filteredItems.filter((item) => !item.featured)

  return (
    <>
      <MenuNavigation activeCategory={category} onCategoryChange={handleCategoryChange} />

      <SectionContainer>
        <Container maxWidth="lg">
          <SectionTitle variant="h2">OUR DELICIOUS OFFERINGS</SectionTitle>
          <SectionSubtitle>Crafted with passion and quality ingredients</SectionSubtitle>

          {featuredItems.length > 0 && (
            <>
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  mb: 4,
                  fontFamily: (theme) => theme.typography.h4.fontFamily,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 50,
                    height: 3,
                    backgroundColor: "primary.main",
                  },
                }}
              >
                Featured {category.charAt(0).toUpperCase() + category.slice(1)}
              </Typography>

              <Stack direction="row" flexWrap="wrap" sx={{ mx: -2, mb: 6 }}>
                {featuredItems.map((item) => (
                  <Box key={item.id} sx={{ width: { xs: "100%", sm: "50%", md: "33.333%" }, p: 2 }}>
                    <MenuCard>
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          component="img"
                          height="220"
                          image={item.image}
                          alt={item.name}
                          sx={{ borderRadius: 2 }}
                        />
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
            </>
          )}

          {regularItems.length > 0 && (
            <>
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  mb: 4,
                  fontFamily: (theme) => theme.typography.h4.fontFamily,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 50,
                    height: 3,
                    backgroundColor: "primary.main",
                  },
                }}
              >
                More {category.charAt(0).toUpperCase() + category.slice(1)}
              </Typography>

              <Box sx={{ maxWidth: 800, mx: "auto", mb: 6 }}>
                {regularItems.map((item) => (
                  <MenuItemCard key={item.id}>
                    <Box sx={{ flex: 1 }}>
                      <MenuItemTitle variant="h6">{item.name}</MenuItemTitle>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                    <MenuItemPrice>${item.price.toFixed(2)}</MenuItemPrice>
                  </MenuItemCard>
                ))}
              </Box>
            </>
          )}

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Typography variant="h5" sx={{ mb: 2, fontStyle: "italic" }}>
              Have dietary restrictions or special requests?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: "auto" }}>
              Our chefs are happy to accommodate your needs. Please inform your server of any allergies or dietary
              requirements.
            </Typography>
            <Button variant="contained" color="primary" size="large" sx={{ color: "white" }}>
              MAKE A RESERVATION
            </Button>
          </Box>
        </Container>
      </SectionContainer>
    </>
  )
}

