import React from "react";
import {
  Box,
  Typography,
  Button,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Avatar
} from "@mui/material";
import Mypic1 from "./assets/MyPicture1.jpg"

function HomeUI() {
  return (
    <Box sx={{ 
      width: "100%",
      height: "200vh",
      minHeight: "100vh",
      backgroundColor: "black",
    }}>
      {/* ==========================AppBar =======================*/}
      <AppBar position="static" sx={{ bgcolor: "black", boxShadow: "none" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            DUSIT PAKDEEKUNAKORN
          </Typography>
          <Button color="inherit" sx={{ textTransform: "none", fontSize: "1rem" }}>Work</Button>
          <Button color="inherit" sx={{ textTransform: "none", fontSize: "1rem" }}>About</Button>
          <Button color="inherit" sx={{ textTransform: "none", fontSize: "1rem" }}>Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ 
        py: 10,
      }}>
        <Grid container spacing={4} alignItems="center">
          
          <Grid item xs={12} md={5}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: 60, md: 100 },
                fontWeight: "bold",
                color: "white",
                mb: 3,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              HI, I'M DUSIT
            </Typography>
            
            <Typography 
              variant="h5" 
              sx={{ 
                maxWidth: "600px",
                mb: 5,
                color: "rgba(255,255,255,0.7)",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Web developer specializing in creating accessible and user-friendly websites.
            </Typography>
            
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Button 
                variant="contained" 
                size="large"
                sx={{
                  px: 4,
                  py: 2,
                  fontSize: "1.1rem",
                  backgroundColor: "white",
                  color: "black",
                  '&:hover': {
                    backgroundColor: "#ddd"
                  }
                }}
              >
                Contact Me
              </Button>
            </Box>
          </Grid>

          {/* รูปภาพทางขวา */}
          <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src={Mypic1} // เปลี่ยนเป็น path ของรูปคุณ
              alt="Profile"
              sx={{
                width: "100%",
                maxWidth: 400,
                height: "auto",
                objectFit: "cover",
                borderRadius: 2, // สามารถปรับเป็น 0 สำหรับไม่มีมุมโค้ง
                boxShadow: "0 4px 20px rgba(255,255,255,0.1)"
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HomeUI;