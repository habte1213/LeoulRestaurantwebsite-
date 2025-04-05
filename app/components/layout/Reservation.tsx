"use client"
import { useState } from "react"
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  type SelectChangeEvent,
  Stack,
} from "@mui/material"
import { styled } from "@mui/material/styles"

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
}))

const ContentContainer = styled(Box) ({
  position: "relative",
  zIndex: 2,
})

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  textAlign: "center",
  marginBottom: theme.spacing(1),
  color: "white",
}))

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontStyle: "italic",
  textAlign: "center",
  marginBottom: theme.spacing(6),
  color: "rgba(255, 255, 255, 0.8)",
  fontFamily: theme.typography.h5.fontFamily,
}))

const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
}))

const StyledTextField = styled(TextField) ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 0,
  },
})

export default function ReservationSection() {
  const [time, setTime] = useState("")
  const [guests, setGuests] = useState("")

  const handleTimeChange = (event: SelectChangeEvent) => {
    setTime(event.target.value as string)
  }

  const handleGuestsChange = (event: SelectChangeEvent) => {
    setGuests(event.target.value as string)
  }

  return (
    <SectionContainer>
      <ContentContainer>
        <Container maxWidth="lg">
          <SectionTitle variant="h2">RESERVATION</SectionTitle>
          <SectionSubtitle>Book a Table</SectionSubtitle>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: { xs: "100%", md: "80%", lg: "70%" } }}>
              <FormContainer>
                <Stack spacing={3}>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                    <StyledTextField fullWidth label="Name" variant="outlined" placeholder="Your Name" required />
                    <StyledTextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      placeholder="Your Email"
                      required
                      type="email"
                    />
                  </Stack>

                  <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                    <StyledTextField fullWidth label="Phone" variant="outlined" placeholder="Phone Number" required />
                    <StyledTextField
                      fullWidth
                      label="Date"
                      variant="outlined"
                      type="date"
                      required
                      InputLabelProps={{ shrink: true }}
                    />
                  </Stack>

                  <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="time-select-label">Time</InputLabel>
                      <Select
                        labelId="time-select-label"
                        value={time}
                        label="Time"
                        onChange={handleTimeChange}
                        required
                        sx={{ borderRadius: 0 }}
                      >
                        <MenuItem value="12:00">12:00 PM</MenuItem>
                        <MenuItem value="13:00">1:00 PM</MenuItem>
                        <MenuItem value="14:00">2:00 PM</MenuItem>
                        <MenuItem value="18:00">6:00 PM</MenuItem>
                        <MenuItem value="19:00">7:00 PM</MenuItem>
                        <MenuItem value="20:00">8:00 PM</MenuItem>
                        <MenuItem value="21:00">9:00 PM</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="guests-select-label">Guests</InputLabel>
                      <Select
                        labelId="guests-select-label"
                        value={guests}
                        label="Guests"
                        onChange={handleGuestsChange}
                        required
                        sx={{ borderRadius: 0 }}
                      >
                        <MenuItem value="1">1 Person</MenuItem>
                        <MenuItem value="2">2 People</MenuItem>
                        <MenuItem value="3">3 People</MenuItem>
                        <MenuItem value="4">4 People</MenuItem>
                        <MenuItem value="5">5 People</MenuItem>
                        <MenuItem value="6+">6+ People</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>

                  <StyledTextField
                    fullWidth
                    label="Special Requests"
                    variant="outlined"
                    placeholder="Any special requirements or requests?"
                    multiline
                    rows={4}
                  />

                  <Box sx={{ textAlign: "center", mt: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{
                        minWidth: 200,
                        py: 1.5,
                        color: "white",
                        "&:hover": {
                          backgroundColor: "primary.dark",
                        },
                      }}
                    >
                      BOOK TABLE
                    </Button>
                  </Box>
                </Stack>
              </FormContainer>
            </Box>
          </Box>
        </Container>
      </ContentContainer>
    </SectionContainer>
  )
}

