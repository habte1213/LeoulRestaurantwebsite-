"use client";
import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useScrollTrigger,
  Stack,
  Theme,
  SxProps,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Facebook, Twitter } from "@mui/icons-material";

interface AppBarProps {
  elevation?: number;
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
}

const navLinks = [
  { href: "/", text: "HOME" },
  { href: "/menu", text: "MENU" },
  { href: "/reservation", text: "RESERVATION" },
  { href: "/gallery", text: "GALLERY" },
  { href: "/about", text: "ABOUT" },
  { href: "/contact", text: "CONTACT" },
];

function ElevationScroll(props: { children: React.ReactElement<AppBarProps> }) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      ...children.props.sx,
      backgroundColor: trigger ? "rgba(255, 255, 255, 0.95)" : "transparent",
      color: trigger ? "text.primary" : "white",
      transition: "background-color 0.3s ease, color 0.3s ease",
      backdropFilter: trigger ? "blur(10px)" : "none",
    },
  });
}

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const pathname = usePathname();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: 80 }}>
            {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              component={Link}
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 140,
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                  border: "2px solid #ec1d25",
                  justifyContent: "center",
                  padding: "5px 10px",
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textAlign: "center",
                    lineHeight: 1.2,
                    color: "#ec1d25",
                  }}
                >
                  LEOUL
                  <br />
                  <Typography
                    component="span"
                    variant="caption"
                    sx={{
                      letterSpacing: "0.2em",
                      fontSize: "0.6rem",
                      display: "block",
                    }}
                  >
                    BAR &RESTAURANT
                  </Typography>
                </Typography>
              </Box>
            </Typography>

            {/* Mobile menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {navLinks.map((link) => (
                  <MenuItem
                    key={link.href}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    href={link.href}
                    selected={pathname === link.href}
                  >
                    {link.text}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Mobile logo */}
            <Typography
              variant="h5"
              noWrap
              component="span"
              sx={{
                flexGrow: 1,
                mr: 10,
                display: { xs: "", md: "none" },

                fontWeight: 700,
                letterSpacing: "0.1em",
                textAlign: "center",
                lineHeight: 1.2,
                color: "#ec1d25",
              }}
            >
              LEOUL
              <br />
              <Typography
                component="span"
                variant="caption"
                sx={{
                  letterSpacing: "0.2em",
                  fontSize: "0.6rem",
                  display: "block",
                }}
              >
                BAR &RESTAURANT
              </Typography>
            </Typography>
            {/* <Typography
              variant="h5"
              noWrap
              component={Link}
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LEOUL BAR &RESTAURANT 
            </Typography> */}

            {/* Desktop menu */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  component={Link}
                  href={link.href}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: pathname === link.href ? "primary.main" : "inherit",
                    display: "block",
                    mx: 1.5,
                    fontWeight: "medium",
                    fontSize: "0.9rem",
                    padding: "8px 12px",
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {link.text}
                </Button>
              ))}
            </Stack>

            {/* Social icons */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <IconButton color="inherit" size="small">
                <Instagram fontSize="small" />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Facebook fontSize="small" />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Twitter fontSize="small" />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}
