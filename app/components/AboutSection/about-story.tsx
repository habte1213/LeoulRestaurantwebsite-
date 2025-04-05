"use client"
import { Box, Container, Typography, Button, Stack } from "@mui/material"
import { styled } from "@mui/material/styles"
import Image from "next/image"

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: "#fff",
}))

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -10,
    left: 0,
    width: 50,
    height: 3,
    backgroundColor: theme.palette.primary.main,
  },
}))

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontStyle: "italic",
  marginBottom: theme.spacing(4),
  color: theme.palette.text.secondary,
  fontFamily: theme.typography.h5.fontFamily,
}))

const YearLabel = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: 700,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
  fontFamily: theme.typography.h1.fontFamily,
}))

export default function AboutStory() {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} spacing={6} alignItems="center">
          <Box sx={{ flex: 1 }}>
            <Box sx={{ position: "relative", height: "500px", width: "100%" }}>
              <Image
                src="/asset/img7.jpg"
                alt="Leoul Restaurant History"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
  <SectionSubtitle>Discover</SectionSubtitle>
  <SectionTitle variant="h2">OUR STORY</SectionTitle>
  <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
    Leoul Restaurant, founded in 2004 by Endale, celebrates the rich flavors of Ethiopian cuisine. From humble beginnings, we’ve grown into a beloved destination for authentic dishes and warm hospitality.
  </Typography>
  <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
    We take pride in using fresh ingredients, traditional recipes, and creating a welcoming experience that feels like home.
  </Typography>

  <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
    <Box>
      <YearLabel>2004</YearLabel>
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        Founded
      </Typography>
    </Box>
    <Box>
      <YearLabel>5+</YearLabel>
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        Awards
      </Typography>
    </Box>
    <Box>
      <YearLabel>10+</YearLabel>
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        Team Members
      </Typography>
    </Box>
  </Stack>

  <Button
    variant="outlined"
    color="primary"
    sx={{
      borderWidth: "2px",
      "&:hover": {
        borderWidth: "2px",
      },
    }}
  >
    OUR JOURNEY
  </Button>
</Box>

        </Stack>
      </Container>
    </SectionContainer>
  )
}

