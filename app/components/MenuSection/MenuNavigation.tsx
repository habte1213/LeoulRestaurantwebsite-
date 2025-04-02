"use client";
import { Box, Container, Paper, Stack, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Restaurant, LocalBar, Cake, LocalDining,  } from "@mui/icons-material";

const NavigationContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  backgroundColor: "#f8f9fa",
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
}));

const NavButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: 0,
  flexDirection: "column",
  color: theme.palette.text.primary,
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    color: theme.palette.primary.main,
  },
  "&.active": {
    color: theme.palette.primary.main,
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: "inherit",
}));

interface MenuNavProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function MenuNavigation({ activeCategory, onCategoryChange }: MenuNavProps) {
  const categories = [
    { id: "starters", label: "Starters", icon: <Restaurant /> },
    { id: "main", label: "Main Courses", icon: <LocalDining /> },
    { id: "pasta", label: "Pasta", icon: <Restaurant /> },
    { id: "desserts", label: "Desserts", icon: <Cake /> },
    { id: "drinks", label: "Drinks", icon: <LocalBar /> },
  ];

  return (
    <NavigationContainer>
      <Container maxWidth="lg">
        <Stack 
          direction="row" 
          spacing={1} 
          justifyContent="center"
          sx={{ 
            flexWrap: { xs: "wrap", md: "nowrap" },
            "& > *": { 
              flex: { xs: "1 1 40%", sm: "1 1 auto" },
              m: { xs: 0.5, md: 0 }
            }
          }}
        >
          {categories.map((category) => (
            <NavButton
              key={category.id}
              className={activeCategory === category.id ? "active" : ""}
              onClick={() => onCategoryChange(category.id)}
            >
              <IconWrapper>{category.icon}</IconWrapper>
              <Typography variant="button">{category.label}</Typography>
            </NavButton>
          ))}
        </Stack>
      </Container>
    </NavigationContainer>
  );
}
