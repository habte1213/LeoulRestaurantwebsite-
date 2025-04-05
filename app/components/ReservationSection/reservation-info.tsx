"use client"
import { Box, Container, Typography, Paper, Stack, Divider } from "@mui/material"
import { styled } from "@mui/material/styles"
import { AccessTime, Info, EventAvailable } from "@mui/icons-material"

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
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

const InfoCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: "100%",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
  borderRadius: 0,
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
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

export default function ReservationInfo() {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">RESERVATION INFORMATION</SectionTitle>
        <SectionSubtitle>What you need to know</SectionSubtitle>

        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          <Box sx={{ flex: 1 }}>
            <InfoCard>
              <IconWrapper>
                <AccessTime />
              </IconWrapper>
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                sx={{ fontFamily: (theme) => theme.typography.h5.fontFamily }}
              >
                Opening Hours
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Monday - Friday:</strong> 9:00 AM - 10:00 PM
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Saturday - Sunday:</strong> 10:00 AM - 11:00 PM
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Last Order:</strong> 1 hour before closing
              </Typography>
            </InfoCard>
          </Box>

          <Box sx={{ flex: 1 }}>
            <InfoCard>
              <IconWrapper>
                <Info />
              </IconWrapper>
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                sx={{ fontFamily: (theme) => theme.typography.h5.fontFamily }}
              >
                Reservation Policy
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2" paragraph>
                Reservations are held for 15 minutes past the scheduled time. After that, tables may be released for
                waiting guests.
              </Typography>
              <Typography variant="body2" paragraph>
                For parties of 8 or more, please call us directly to arrange your reservation.
              </Typography>
              <Typography variant="body2">
                A credit card is required for reservations on weekends and holidays.
              </Typography>
            </InfoCard>
          </Box>

          <Box sx={{ flex: 1 }}>
            <InfoCard>
              <IconWrapper>
                <EventAvailable />
              </IconWrapper>
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                sx={{ fontFamily: (theme) => theme.typography.h5.fontFamily }}
              >
                Special Events
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2" paragraph>
                We offer private dining rooms for special occasions and corporate events.
              </Typography>
              <Typography variant="body2" paragraph>
                Custom menus can be arranged with our chef for your special event.
              </Typography>
              <Typography variant="body2">
                Please contact our events team at events@patorestaurant.com for more information.
              </Typography>
            </InfoCard>
          </Box>
        </Stack>
      </Container>
    </SectionContainer>
  )
}

