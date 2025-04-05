"use client";
import { useState } from "react";
import type React from "react";

import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  ImageList,
  ImageListItem,
  Modal,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Close } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

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

const StyledTab = styled(Tab)(({ theme }) => ({
  fontSize: "0.9rem",
  fontWeight: 600,
  letterSpacing: "0.1em",
  padding: "12px 24px",
  "&.Mui-selected": {
    color: theme.palette.primary.main,
  },
}));

const GalleryImage = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  "&:hover img": {
    transform: "scale(1.05)",
  },
  "&:hover::before": {
    opacity: 1,
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(213, 163, 83, 0.3)",
    zIndex: 1,
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  "& img": {
    transition: "transform 0.5s ease",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "90vw",
  maxHeight: "90vh",
  outline: "none",
  "& img": {
    maxWidth: "100%",
    maxHeight: "90vh",
    objectFit: "contain",
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 10,
  right: 10,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
}));

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  // Food
  {
    id: 1,
    title: "Doro Wat (Spicy Chicken Stew)",
    image: "/asset/dorowat1.jpg",
    category: "food",
  },
  {
    id: 2,
    title: "Shiro Wat",
    image: "/asset/shiro.jpg",
    category: "food",
  },
  {
    id: 3,
    title: "Kitfo (Minced Raw Beef)",
    image: "/asset/Kitfo.jpg",
    category: "food",
  },
 




  // Festivals
  {
    id: 11,
    title: "Timket (Epiphany)",
    image: "/asset/timket.jpg",
    category: "festival",
  },
  {
    id: 12,
    title: "Enkutatash (New Year)",
    image: "/asset/enkutatash.png",
    category: "festival",
  },
  {
    id: 13,
    title: "Meskel (Finding of the True Cross)",
    image: "/asset/Meskel.jpeg",
    category: "festival",
  },

];


export default function GalleryGrid() {
  const [category, setCategory] = useState("all");
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handleCategoryChange = (
    event: React.SyntheticEvent,
    newCategory: string
  ) => {
    setCategory(newCategory);
  };

  const handleOpenModal = (image: string) => {
    setSelectedImage(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const filteredItems =
    category === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === category);

  const getGridCols = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  return (
    <SectionContainer>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">OUR GALLERY</SectionTitle>
        <SectionSubtitle>
          A visual journey through our restaurant
        </SectionSubtitle>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
          <Tabs
            value={category}
            onChange={handleCategoryChange}
            variant={isMobile ? "scrollable" : "standard"}
            centered={!isMobile}
            scrollButtons="auto"
            allowScrollButtonsMobile
            TabIndicatorProps={{
              style: {
                backgroundColor: "#d5a353",
              },
            }}
          >
            <StyledTab label="ALL" value="all" />
            <StyledTab label="FOOD" value="food" />

            <StyledTab label="EVENTS" value="festival" />
          </Tabs>
        </Box>

        <ImageList variant="masonry" cols={getGridCols()} gap={16}>
          {filteredItems.map((item) => (
            <ImageListItem key={item.id}>
              <GalleryImage onClick={() => handleOpenModal(item.image)}>
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  loading="lazy"
                />
              </GalleryImage>
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="image-modal"
        aria-describedby="enlarged gallery image"
      >
        <ModalContent>
          <img src={selectedImage || "/placeholder.svg"} alt="Gallery" />
          <CloseButton onClick={handleCloseModal}>
            <Close />
          </CloseButton>
        </ModalContent>
      </Modal>
    </SectionContainer>
  );
}
