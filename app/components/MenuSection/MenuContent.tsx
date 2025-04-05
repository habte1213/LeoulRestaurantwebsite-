"use client"
import { useState } from "react"
import { Box, Container, Typography, Stack, Card, CardMedia, CardContent, Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import MenuNavigation from "./MenuNavigation"
import Link from "next/link"

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

const MenuCard = styled(Card) ({
  boxShadow: "none",
  backgroundColor: "transparent",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
})

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

const menuItems: MenuItem[] = [
    // Starters - Italian
    {
      id: 1,
      name: "Bruschetta",
      description: "Grilled bread rubbed with garlic and topped with olive oil, salt, tomato, and herbs",
      price: 350,
      image: "/asset/Bruschetta.jpg",
      category: "starters",
      featured: true,
    },
    {
      id: 2,
      name: "Caprese Salad",
      description: "Fresh mozzarella, tomatoes, and sweet basil, seasoned with salt and olive oil",
      price: 450,
      image: "/asset/salad.jpg",
      category: "starters",
      featured: true,
    },
    {
      id: 3,
      name: "Garlic Bread",
      description: "Freshly baked bread with garlic butter and herbs",
      price: 250,
      category: "starters",
    },
    {
      id: 4,
      name: "Calamari Fritti",
      description: "Crispy fried calamari served with lemon and marinara sauce",
      price: 520,
      category: "starters",
    },
  
    // Starters - Ethiopian
    {
      id: 5,
      name: "Sambusa",
      description: "Crispy pastry filled with spiced lentils or ground beef",
      price: 180,
      image: "/asset/Sambusa.jpg",

      category: "starters",
      featured: true,
    },
    {
      id: 6,
      name: "Kategna",
      description: "Spiced and toasted injera with berbere and niter kibbeh",
      price: 150,
      category: "starters",
    },
    {
      id: 7,
      name: "Ful Medames",
      description: "Slow-cooked fava beans with spices, served with bread",
      price: 200,
      category: "starters",
    },
  
    // Main Courses - Italian
    {
      id: 8,
      name: "Grilled Salmon",
      description: "Fresh salmon, asparagus, and herb butter sauce",
      price: 850,
      image: "/asset/GrilledSalmon.jpg",
      category: "main",
      featured: true,
    },
    {
      id: 9,
      name: "Beef Tenderloin",
      description: "Premium beef with roasted vegetables and red wine reduction",
      price: 950,
      image: "/asset/BeefTenderloin.jpg",
      category: "main",
      featured: true,
    },
    {
      id: 10,
      name: "Chicken Parmesan",
      description: "Breaded chicken breast topped with marinara sauce and melted mozzarella",
      price: 650,
      category: "main",
    },
  
    // Main Courses - Ethiopian
    {
      id: 11,
      name: "Doro Wat",
      description: "Spicy chicken stew with berbere sauce, served with hard-boiled egg and injera",
      price: 420,
      image: "/asset/dorowat1.jpg",
      category: "main",
      featured: true,
    },
   
    {
      id: 13,
      name: "Vegetarian Platter",
      description: "Selection of lentil, split pea, and vegetable stews served with injera",
      price: 380,
      category: "main",
    },
    {
      id: 14,
      name: "Kitfo",
      description: "Traditional Ethiopian minced beef dish seasoned with spices",
      price: 520,
      category: "main",
    },
    {
      id: 15,
      name: "Shiro Wat",
      description: "Flavorful chickpea stew with berbere spice, served with injera",
      price: 350,
      category: "main",
    },
  
    // Pasta - Italian
    {
      id: 16,
      name: "Spaghetti Carbonara",
      description: "Classic pasta with eggs, cheese, pancetta, and black pepper",
      price: 450,
      image: "/asset/SpaghettiCarbonara.jpg",
      category: "pasta",
      featured: true,
    },
    {
      id: 17,
      name: "Lasagna",
      description: "Layers of pasta, ricotta, mozzarella, and meat sauce",
      price: 480,
      category: "pasta",
    },
  
    // Desserts - Italian
    {
      id: 18,
      name: "Tiramisu",
      description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
      price: 320,
      category: "desserts",
      featured: true,
      image: "/asset/Tiramisu.jpg",

    },
  
    // Desserts - Ethiopian
    {
      id: 19,
      name: "Tikur Gomen Cake",
      description: "Traditional Ethiopian spiced cake with honey and nuts",
      price: 280,
      category: "desserts",
    },
  
    // Drinks - Italian
    {
      id: 20,
      name: "Italian Wine (Glass)",
      description: "Selection of fine Italian wines",
      price: 350,
      category: "drinks",
    },
    {
      id: 21,
      name: "Espresso",
      description: "Traditional Italian coffee",
      price: 120,
      category: "drinks",
    },
  
    // Drinks - Ethiopian
    {
      id: 22,
      name: "Ethiopian Bira (Bottle)",
      description: "Traditional Ethiopian honey wine with floral notes",
      price: 400,
      category: "drinks",
      featured: true,
      image: "/asset/Bira.jpg",

    },
    {
      id: 23,
      name: "Tej (Honey Wine)",
      description: "Authentic Ethiopian honey mead",
      price: 350,
      category: "drinks",
    },
    {
      id: 24,
      name: "Ethiopian Coffee Ceremony",
      description: "Traditional coffee preparation with popcorn",
      price: 250,
      category: "drinks",
      featured: true,
      image: "/asset/Coffee.png",

    },
    {
      id: 25,
      name: "Tella (Traditional Beer)",
      description: "Home-brewed Ethiopian barley beer",
      price: 180,
      category: "drinks",
    }
  ];
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
                        <PriceTag>ETB {item.price.toFixed(2)}</PriceTag>
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
                    <MenuItemPrice>{item.price.toFixed(2)} Birr</MenuItemPrice>
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
  
  <Link href="/reservation" passHref>
    <Button variant="contained" color="primary" size="large" sx={{ color: "white" }}>
      MAKE A RESERVATION
    </Button>
  </Link>
</Box>
        </Container>
      </SectionContainer>
    </>
  )
}

