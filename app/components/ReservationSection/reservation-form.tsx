"use client"
import { useState } from "react"
import type React from "react"

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
  Paper,
  Stack,
  Snackbar,
  Alert,
  type SelectChangeEvent,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { TimePicker } from "@mui/x-date-pickers/TimePicker"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { addDays } from "date-fns"


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

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
}))

const StyledTextField = styled(TextField)  ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 0,
  },
})

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: new Date(),
    time: new Date(),
    occasion: "",
    requests: "",
  })

  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState("")
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (newDate: Date | null) => {
    if (newDate) {
      setFormData((prev) => ({ ...prev, date: newDate }))
    }
  }

  const handleTimeChange = (newTime: Date | null) => {
    if (newTime) {
      setFormData((prev) => ({ ...prev, time: newTime }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.guests) {
      setSnackbarMessage("Please fill in all required fields")
      setSnackbarSeverity("error")
      setOpenSnackbar(true)
      return
    }

    // Form is valid, show success message
    setSnackbarMessage("Reservation submitted successfully! We'll contact you shortly to confirm.")
    setSnackbarSeverity("success")
    setOpenSnackbar(true)

    // Reset form (in a real app, you would send the data to your backend here)
    setFormData({
      name: "",
      email: "",
      phone: "",
      guests: "",
      date: new Date(),
      time: new Date(),
      occasion: "",
      requests: "",
    })
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">BOOK YOUR TABLE</SectionTitle>
        <SectionSubtitle>We look forward to serving you</SectionSubtitle>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: { xs: "100%", md: "80%", lg: "70%" } }}>
            <FormContainer>
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                    <StyledTextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      placeholder="Your Name"
                      required
                    />
                    <StyledTextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      placeholder="Your Email"
                      required
                      type="email"
                    />
                  </Stack>

                  <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                    <StyledTextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      placeholder="Phone Number"
                      required
                    />
                    <FormControl fullWidth variant="outlined">
                      <InputLabel id="guests-select-label">Number of Guests</InputLabel>
                      <Select
                        labelId="guests-select-label"
                        name="guests"
                        value={formData.guests}
                        label="Number of Guests"
                        onChange={handleSelectChange}
                        required
                        sx={{ borderRadius: 0 }}
                      >
                        <MenuItem value="1">1 Person</MenuItem>
                        <MenuItem value="2">2 People</MenuItem>
                        <MenuItem value="3">3 People</MenuItem>
                        <MenuItem value="4">4 People</MenuItem>
                        <MenuItem value="5">5 People</MenuItem>
                        <MenuItem value="6">6 People</MenuItem>
                        <MenuItem value="7+">7+ People</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                      <DatePicker
                        label="Date"
                        value={formData.date}
                        onChange={handleDateChange}
                        minDate={new Date()}
                        maxDate={addDays(new Date(), 90)}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            variant: "outlined",
                            required: true,
                            sx: { "& .MuiOutlinedInput-root": { borderRadius: 0 } },
                          },
                        }}
                      />
                      <TimePicker
                        label="Time"
                        value={formData.time}
                        onChange={handleTimeChange}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            variant: "outlined",
                            required: true,
                            sx: { "& .MuiOutlinedInput-root": { borderRadius: 0 } },
                          },
                        }}
                      />
                    </Stack>
                  </LocalizationProvider>

                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="occasion-select-label">Occasion (Optional)</InputLabel>
                    <Select
                      labelId="occasion-select-label"
                      name="occasion"
                      value={formData.occasion}
                      label="Occasion (Optional)"
                      onChange={handleSelectChange}
                      sx={{ borderRadius: 0 }}
                    >
                      <MenuItem value="birthday">Birthday</MenuItem>
                      <MenuItem value="anniversary">Anniversary</MenuItem>
                      <MenuItem value="business">Business Meal</MenuItem>
                      <MenuItem value="date">Date Night</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>

                  <StyledTextField
                    fullWidth
                    label="Special Requests"
                    name="requests"
                    value={formData.requests}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="Any special requirements or requests?"
                    multiline
                    rows={4}
                  />

                  <Box sx={{ textAlign: "center", mt: 2 }}>
                    <Button
                      type="submit"
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
              </form>
            </FormContainer>
          </Box>
        </Box>
      </Container>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </SectionContainer>
  )
}

