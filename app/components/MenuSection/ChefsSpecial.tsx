"use client"
import { Box, Container, Typography, Paper, Stack, Divider } from "@mui/material"
import { styled } from "@mui/material/styles"
import Image from "next/image"

const SpecialContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: "#f9f5f0",
}))

const SpecialTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  textAlign: "center",
  marginBottom: theme.spacing(1),
}))

const SpecialSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontStyle: "italic",
  textAlign: "center",
  marginBottom: theme.spacing(6),
  color: theme.palette.text.secondary,
  fontFamily: theme.typography.h5.fontFamily,
}))

const SpecialCard = styled(Paper)(({ theme }) => ({
  padding: 0,
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  height: "100%",
}))

const SpecialContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}))

const SpecialPrice = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  fontSize: "1.5rem",
  marginTop: theme.spacing(2),
}))

interface Special {
  id: number
  name: string
  description: string
  price: number
  image: string
  chef: string
}

const specials: Special[] = [
  {
    id: 1,
    name: "Osso Buco alla Milanese",
    description:
      "Slow-braised veal shanks with gremolata, served with saffron risotto. A traditional Milanese specialty that showcases the rich flavors of Italian cuisine.",
    price: 32.99,
    image: "/placeholder.svg?height=400&width=600",
    chef: "Chef Antonio Rossi",
  },
  {
    id: 2,
    name: "Branzino al Forno",
    description:
      "Whole Mediterranean sea bass baked with herbs, lemon, and olive oil. Served with roasted seasonal vegetables and a light white wine sauce.",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=600",
    chef: "Chef Maria Bianchi",
  },
]

export default function ChefsSpecial() {
  return (
    <SpecialContainer>
      <Container maxWidth="lg">
        <SpecialTitle variant="h2">CHEF'S SPECIALS</SpecialTitle>
        <SpecialSubtitle>Exclusive creations from our master chefs</SpecialSubtitle>

        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          {specials.map((special) => (
            <Box key={special.id} sx={{ flex: 1 }}>
              <SpecialCard>
                <Box sx={{ position: "relative", height: 300 }}>
                  <Image
                    src={special.image || "/placeholder.svg"}
                    alt={special.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <SpecialContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontFamily: (theme) => theme.typography.h5.fontFamily,
                    }}
                  >
                    {special.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {special.description}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle2" color="primary" sx={{ fontStyle: "italic" }}>
                    Created by {special.chef}
                  </Typography>
                  <SpecialPrice>${special.price.toFixed(2)}</SpecialPrice>
                </SpecialContent>
              </SpecialCard>
            </Box>
          ))}
        </Stack>
      </Container>
    </SpecialContainer>
  )
}

