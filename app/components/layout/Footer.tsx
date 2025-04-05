"use client";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#222",
  color: "#fff",
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(4),
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  position: "relative",
  paddingBottom: theme.spacing(1),
  fontFamily: theme.typography.h6.fontFamily,
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 50,
    height: 2,
    backgroundColor: theme.palette.primary.main,
  },
}));

// const FooterLink = styled(Link)(({ theme }) => ({
//   color: "rgba(255, 255, 255, 0.7)",
//   textDecoration: "none",
//   marginBottom: theme.spacing(1),
//   display: "block",
//   transition: "color 0.3s ease",
//   "&:hover": {
//     color: theme.palette.primary.main,
//   },
// }));

const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(2),
  alignItems: "flex-start",
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  marginRight: theme.spacing(1),
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    transform: "translateY(-3px)",
  },
}));

export default function Footer() {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="space-between"
        >
          <Box sx={{ width: { xs: "100%", md: "25%" } }}>
            <FooterTitle variant="h6">ABOUT US</FooterTitle>
            <Typography
              variant="body2"
              color="rgba(255, 255, 255, 0.7)"
              paragraph
            >
              LEOUL Bar & Restaurant blends authentic Ethiopian flavors with
              modern culinary excellence, offering a unique dining experience in
              a warm and welcoming atmosphere.
            </Typography>

            <Box sx={{ mt: 3 }}>
              <SocialButton aria-label="Facebook">
                <Facebook />
              </SocialButton>
              <SocialButton aria-label="Instagram">
                <Instagram />
              </SocialButton>
              <SocialButton aria-label="Twitter">
                <Twitter />
              </SocialButton>
              <SocialButton aria-label="LinkedIn">
                <LinkedIn />
              </SocialButton>
            </Box>
          </Box>

          <Box sx={{ width: { xs: "100%", md: "25%" } }}>
  <FooterTitle variant="h6">OPENING HOURS</FooterTitle>
  <Typography
    variant="body2"
    color="rgba(255, 255, 255, 0.7)"
    sx={{ mb: 1 }}
  >
    <strong>Monday-Friday</strong> {/* Monday - Friday in Ethiopian week names */}
  </Typography>
  <Typography
    variant="body2"
    color="rgba(255, 255, 255, 0.7)"
    sx={{ mb: 2 }}
  >
    12:00 Morning - 4:00 Night (Ethiopian Time)
  </Typography>
  <Typography
    variant="body2"
    color="rgba(255, 255, 255, 0.7)"
    sx={{ mb: 1 }}
  >
    <strong>Saturday-Sunday</strong> {/* Saturday - Sunday */}
  </Typography>
  <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
    12:00 Morning - 5:00 Night (Ethiopian Time)
  </Typography>
</Box>


          <Box sx={{ width: { xs: "100%", md: "25%" } }}>
            <FooterTitle variant="h6">CONTACT US</FooterTitle>
            <ContactItem>
              <LocationOn sx={{ color: "primary.main", mr: 2, mt: 0.5 }} />
              <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                Gotera condominium, Addis Ababa
              </Typography>
            </ContactItem>
            <ContactItem>
              <Phone sx={{ color: "primary.main", mr: 2, mt: 0.5 }} />
              <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                +2511123456789
              </Typography>
            </ContactItem>
            <ContactItem>
              <Email sx={{ color: "primary.main", mr: 2, mt: 0.5 }} />
              <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                info@leoulrestaurant.com
              </Typography>
            </ContactItem>
          </Box>

          {/* <Box sx={{ width: { xs: "100%", md: "25%" } }}>
            <FooterTitle variant="h6">NEWSLETTER</FooterTitle>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" paragraph>
              Subscribe to our newsletter for updates on special events, new menu items, and exclusive offers.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <TextField
                variant="outlined"
                placeholder="Your Email"
                size="small"
                fullWidth
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  input: { color: "#fff" },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 0,
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  whiteSpace: "nowrap",
                  color: "white",
                  borderRadius: 0,
                }}
              >
                SIGN UP
              </Button>
            </Stack>
          </Box> */}
        </Stack>
        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />
        <Typography
          variant="body2"
          color="rgba(255, 255, 255, 0.5)"
          align="center"
        >
          © {new Date().getFullYear()} LEOUL BAR & RESTAURANT . All rights
          reserved.
        </Typography>
      </Container>
    </FooterContainer>
  );
}
