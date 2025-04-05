"use client";
import { Box, Container, Typography, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LocationOn, Phone, Email, AccessTime } from "@mui/icons-material";

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: "#fff",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  textAlign: "center",
  marginBottom: theme.spacing(1),
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontStyle: "italic",
  textAlign: "center",
  marginBottom: theme.spacing(6),
  color: theme.palette.text.secondary,
  fontFamily: theme.typography.h5.fontFamily,
}));

const InfoCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: "100%",
  borderRadius: 0,
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  "& .MuiSvgIcon-root": {
    fontSize: 48,
    color: theme.palette.primary.main,
  },
}));

const InfoTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  textAlign: "center",
  fontFamily: theme.typography.h6.fontFamily,
}));

export default function ContactInfo() {
  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">GET IN TOUCH</SectionTitle>
        <SectionSubtitle>We'd love to hear from you</SectionSubtitle>

        <Stack direction="row" flexWrap="wrap" sx={{ mx: -2 }}>
          <Box sx={{ width: { xs: "100%", sm: "50%", md: "25%" }, p: 2 }}>
            <InfoCard>
              <IconWrapper>
                <LocationOn />
              </IconWrapper>
              <InfoTitle variant="h6">Address</InfoTitle>
              <Typography variant="body2" color="text.secondary" align="center">
                123 Main Street
                <br />
                New York, NY 10001
                <br />
                United States
              </Typography>
            </InfoCard>
          </Box>

          <Box sx={{ width: { xs: "100%", sm: "50%", md: "25%" }, p: 2 }}>
            <InfoCard>
              <IconWrapper>
                <Phone />
              </IconWrapper>
              <InfoTitle variant="h6">Phone</InfoTitle>
              <Typography variant="body2" color="text.secondary" align="center">
                Reservations: +1 (555) 123-4567
                <br />
                Office: +1 (555) 765-4321
                <br />
                Catering: +1 (555) 987-6543
              </Typography>
            </InfoCard>
          </Box>

          <Box sx={{ width: { xs: "100%", sm: "50%", md: "25%" }, p: 2 }}>
            <InfoCard>
              <IconWrapper>
                <Email />
              </IconWrapper>
              <InfoTitle variant="h6">Email</InfoTitle>
              <Typography variant="body2" color="text.secondary" align="center">
                info@leoulrestaurant.com
                <br />
                reservations@patorestaurant.com
                <br />
                events@patorestaurant.com
              </Typography>
            </InfoCard>
          </Box>

          <Box sx={{ width: { xs: "100%", sm: "50%", md: "25%" }, p: 2 }}>
            <InfoCard>
              <IconWrapper>
                <AccessTime />
              </IconWrapper>
              <InfoTitle variant="h6">Hours</InfoTitle>
              <Typography variant="body2" color="text.secondary" align="center">
                Monday - Friday: 9:00 AM - 10:00 PM
                <br />
                Saturday - Sunday: 10:00 AM - 11:00 PM
                <br />
                Happy Hour: 4:00 PM - 6:00 PM
              </Typography>
            </InfoCard>
          </Box>
        </Stack>
      </Container>
    </SectionContainer>
  );
}
