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

export default function AboutSection() {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} spacing={6} alignItems="center">
          <Box sx={{ flex: 1 }}>
            <Box sx={{ position: "relative", height: "400px", width: "100%" }}>
              <Image
                src="/asset/bg1.jpg"
                alt="About LEOUL BAR & Restaurant"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <SectionSubtitle>LEOUL BAR &RESTAURANT</SectionSubtitle>
            <SectionTitle variant="h2">OUR STORY</SectionTitle>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Leoul Bar & Restaurant was founded with a passion for creating extraordinary dining experiences. Our journey
              began with a simple idea: to combine traditional culinary techniques with innovative flavors in a warm,
              welcoming atmosphere.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Every dish tells a story of dedication, quality ingredients, and the artistry of our chefs. We source the
              finest local and seasonal ingredients to ensure each plate that leaves our kitchen exceeds your
              expectations.
            </Typography>
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
              LEARN MORE
            </Button>
          </Box>
        </Stack>
      </Container>
    </SectionContainer>
  )
}

