"use client"
import { Box, Container, Typography, Paper, Stack } from "@mui/material"
import type React from "react"

import { styled } from "@mui/material/styles"
import { Restaurant, EmojiNature, LocalShipping } from "@mui/icons-material"

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

const ValueCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  height: "100%",
  borderRadius: 0,
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
  },
}))

const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  "& .MuiSvgIcon-root": {
    fontSize: 48,
    color: theme.palette.primary.main,
  },
}))

const ValueTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  fontFamily: theme.typography.h6.fontFamily,
}))

interface Value {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

const values: Value[] = [
  {
    id: 1,
    title: "Quality Ingredients",
    description:
      "We source only the finest, freshest ingredients from local farmers and trusted suppliers to ensure exceptional flavor in every dish.",
    icon: <Restaurant />,
  },
  {
    id: 2,
    title: "Culinary Craftsmanship",
    description:
      "Our chefs combine traditional techniques with innovative approaches to create dishes that are both authentic and unique.",
    icon: <EmojiNature />,
  },
  {
    id: 3,
    title: "Sustainability",
    description:
      "We are committed to environmentally responsible practices, from reducing waste to supporting sustainable farming methods.",
    icon: <EmojiNature />,
  },
  {
    id: 4,
    title: "Community Support",
    description:
      "We believe in giving back to our community through partnerships with local charities and educational initiatives.",
    icon: <LocalShipping />,
  },
]

export default function AboutValues() {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">OUR VALUES</SectionTitle>
        <SectionSubtitle>The principles that guide everything we do</SectionSubtitle>

        <Stack direction="row" flexWrap="wrap" sx={{ mx: -2 }}>
          {values.map((value) => (
            <Box key={value.id} sx={{ width: { xs: "100%", sm: "50%", md: "25%" }, p: 2 }}>
              <ValueCard>
                <IconWrapper>{value.icon}</IconWrapper>
                <ValueTitle variant="h6">{value.title}</ValueTitle>
                <Typography variant="body2" color="text.secondary">
                  {value.description}
                </Typography>
              </ValueCard>
            </Box>
          ))}
        </Stack>
      </Container>
    </SectionContainer>
  )
}

