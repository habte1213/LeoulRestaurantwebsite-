"use client"
import { Box, Container, Typography, Button, Paper } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Download, Print } from "@mui/icons-material"

const DownloadContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  backgroundColor: "#fff",
}))

const DownloadCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  backgroundColor: "rgba(213, 163, 83, 0.05)",
  border: "1px dashed rgba(213, 163, 83, 0.3)",
}))

export default function MenuDownload() {
  return (
    <DownloadContainer>
      <Container maxWidth="md">
        <DownloadCard>
          <Typography variant="h4" sx={{ mb: 2, fontFamily: (theme) => theme.typography.h4.fontFamily }}>
            Take Our Menu With You
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Download our complete menu including prices, allergen information, and seasonal specials.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
            <Button variant="contained" color="primary" startIcon={<Download />} sx={{ color: "white" }}>
              Download PDF Menu
            </Button>
            <Button variant="outlined" color="primary" startIcon={<Print />}>
              Print Menu
            </Button>
          </Box>
        </DownloadCard>
      </Container>
    </DownloadContainer>
  )
}

