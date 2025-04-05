"use client"
import { Box, Container, Typography, Button, Stack, Paper } from "@mui/material"
import { styled } from "@mui/material/styles"
import Image from "next/image"
import Link from "next/link"

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: "#f9f5f0",
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

const EventCard = styled(Paper) ({
  overflow: "hidden",
  borderRadius: 0,
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
})

const EventContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
}))

const EventTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  fontFamily: theme.typography.h6.fontFamily,
}))

interface Event {
  id: number
  title: string
  description: string
  image: string
}

const events: Event[] = [
  {
    id: 1,
    title: "Private Dining",
    description:
      "Host your intimate gatherings in our elegant private dining rooms. Perfect for family celebrations, business meetings, or special occasions.",
    image: "/asset/privatedining.jpg",
  },
  {
    id: 2,
    title: "Wedding Receptions",
    description:
      "Make your special day unforgettable with our exquisite wedding reception packages. Our team will ensure every detail is perfect.",
    image: "/asset/weddingreceptions3.jpg",
  },
  {
    id: 3,
    title: "Corporate Events",
    description:
      "Impress your clients and colleagues with our corporate event services. From business lunches to company celebrations, we've got you covered.",
    image: "/asset/corporateevents.jpg",
  },
  
]

export default function GalleryEvents() {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">HOST YOUR EVENT WITH US</SectionTitle>
        <SectionSubtitle>Create unforgettable memories at Pato Restaurant</SectionSubtitle>

        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          {events.map((event) => (
            <Box key={event.id} sx={{ flex: 1 }}>
              <EventCard>
                <Box sx={{ position: "relative", height: 250 }}>
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <EventContent>
                  <EventTitle variant="h6">{event.title}</EventTitle>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
                    {event.description}
                  </Typography>
                  <Link href="/reservation" passHref>

                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      alignSelf: "flex-start",
                      borderWidth: "2px",
                      "&:hover": {
                        borderWidth: "2px",
                      },
                    }}
                  >
                    LEARN MORE
                  </Button>
                  </Link>
                </EventContent>
              </EventCard>
            </Box>
          ))}
        </Stack>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography variant="h5" sx={{ mb: 2, fontStyle: "italic" }}>
            Planning a special event?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: "auto" }}>
            Contact our events team to discuss how we can make your occasion truly memorable.
          </Typography>
          <Link href="/contact" passHref>

          <Button variant="contained" color="primary" size="large" sx={{ color: "white" }}>
            CONTACT US
          </Button>
          </Link>
        </Box>
      </Container>
    </SectionContainer>
  )
}

