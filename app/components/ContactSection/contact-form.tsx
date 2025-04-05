"use client"
import { useState } from "react"
import type React from "react"

import { Box, Container, Typography, TextField, Button, Paper, Stack, Snackbar, Alert } from "@mui/material"
import { styled } from "@mui/material/styles"

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: "#f8f9fa",
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
  borderRadius: 0,
}))

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: 0,
  },
})

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState("")
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSnackbarMessage("Please fill in all required fields")
      setSnackbarSeverity("error")
      setOpenSnackbar(true)
      return
    }

    // Form is valid, show success message
    setSnackbarMessage("Your message has been sent successfully! We'll get back to you soon.")
    setSnackbarSeverity("success")
    setOpenSnackbar(true)

    // Reset form (in a real app, you would send the data to your backend here)
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">SEND US A MESSAGE</SectionTitle>
        <SectionSubtitle>We’d love to hear from you</SectionSubtitle>

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

                  <StyledTextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="Subject"
                  />

                  <StyledTextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="Your Message"
                    multiline
                    rows={6}
                    required
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
                      SEND MESSAGE
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