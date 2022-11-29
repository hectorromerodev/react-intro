import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

import { Link,  useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCardIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                color: "inherit",
                display: { xs: "none", md: "flex" },
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow:1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow:1, display: { xs: "none", md: "flex" } }}>
              <Link to="/admin" style={{textDecoration: 'none'}}>
                <Button
                  sx={{ my: 2, color: "white", display: "block" }}
                  children="Admin"
                /> 
              </Link>
              <Link to="/shop" style={{textDecoration: 'none'}}>
                <Button
                  sx={{ my: 2, color: "white", display: "block" }}
                  children="Shop"
                />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton 
                sx={{ p: 0 }}
                onClick={() => navigate("/shop-cart") }
                >
                <ShoppingCardIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;