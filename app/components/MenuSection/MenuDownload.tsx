"use client"

import { useEffect, useState } from "react"
import { Box, Container, Typography, Button, Paper, useTheme } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Download } from "@mui/icons-material"
import QRCode from "react-qr-code"

// Styled components
const DownloadContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: "#fff",
}))

const DownloadCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  textAlign: "center",
  backgroundColor: "rgba(214, 106, 63, 0.08)",
  border: "1px dashed rgba(250, 95, 48, 0.4)",
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 6px 24px rgba(0, 0, 0, 0.08)",
  },
}))

const QrContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(4, "auto"),
  padding: theme.spacing(3),
  backgroundColor: "white",
  display: "inline-flex",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
}))

const DownloadButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  borderRadius: theme.shape.borderRadius * 1.5,
  fontSize: "1rem",
  fontWeight: 500,
  textTransform: "none",
  boxShadow: "0 4px 10px rgba(213, 163, 83, 0.3)",
  transition: "all 0.3s ease",
  backgroundColor: "#ec1d25",
  "&:hover": {
    backgroundColor: "#ec1d25",
    boxShadow: "0 6px 14px rgba(213, 163, 83, 0.4)",
  },
}))

interface MenuDownloadProps {
  menuUrl?: string
}

export default function MenuDownload({ menuUrl = "/asset/menu.pdf" }: MenuDownloadProps) {
  const [isClient, setIsClient] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleDownload = () => {
    // Implement download functionality here
    window.open(menuUrl, "_blank")
  }

  return (
    <DownloadContainer>
      <Container maxWidth="md">
        <DownloadCard elevation={0}>
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              color: "#333",
            }}
          >
            Take Our Menu With You
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              maxWidth: "600px",
              mx: "auto",
              color: "rgba(0, 0, 0, 0.7)",
            }}
          >
            Download our complete menu including prices, allergen information, and seasonal specials.
          </Typography>

          {/* QR Code Section */}
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 2,
                fontWeight: 500,
                color: "rgba(0, 0, 0, 0.7)",
              }}
            >
              Scan to view menu on your phone
            </Typography>

            <QrContainer>
              {isClient && <QRCode value={menuUrl} size={160} bgColor="#FFFFFF" fgColor="#000000" level="H" />}
            </QrContainer>
          </Box>

          <DownloadButton variant="contained" startIcon={<Download />} onClick={handleDownload} disableElevation>
            Download PDF Menu
          </DownloadButton>
        </DownloadCard>
      </Container>
    </DownloadContainer>
  )
}

