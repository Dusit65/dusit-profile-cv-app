import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  CssBaseline,
  Button,
  Stack,
  Avatar,
  TextField,
  Grid,
} from "@mui/material";
import { Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ProfilePic from "./assets/kurumi2.jpg";
import Banner from "./assets/KurumiBG.jpg";

function HomeUI() {
  return (
    <>
      <CssBaseline />
      {/* =================================== APPBAR ============================= */}
      <AppBar
        position="sticky"
        color="default"
        sx={{ bgcolor: "#0A0A0A", color: "#ffffff" }}
      >
        <Toolbar sx={{ display: "flex", margin: "0 auto", width: "95%" }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            DUSIT PAKDEEKUNAKORN
          </Typography>
          <Stack direction="row" spacing={2.5}>
            <Button color="inherit">Work</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* =================================== INFO SECTION ================================= */}
      <Box
        sx={{
          bgcolor: "#0A0A0A",
          color: "#ffffff",
          minHeight: "100vh",
          width: "100vw",
          overflowX: "hidden",
        }}
      >
        {/* Introduction ========================== */}
        <Box
          id="header"
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          py={10}
          px={{ xs: 2, md: 20 }}
        >
          <Box flex={1}>
            <Typography variant="h1" fontWeight="bold">
              Hi, I AM
            </Typography>
            <Typography variant="h1" fontWeight="bold" sx={{ mb: 3 }}>
              Dusit
            </Typography>

            <Typography color="#999999" sx={{ mb: 5, maxWidth: 370 }}>
              นักเขียนโปรแกรมผู้หลงใหลในโลกของคอมพิวเตอร์
              ที่อยากสร้างโปรแกรมที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
            </Typography>
            <Stack direction="row" spacing={2}>
              {/* Contact Button */}
              <Button
                sx={{
                  bgcolor: "#D84040",
                  color: "#0A0A0A",
                  "&:hover": {
                    bgcolor: "#E87040",
                  },
                  paddingX: 4,
                }}
                style={{ borderRadius: 15 }}
              >
                <Typography
                  style={{
                    fontSize: 14,
                    padding: 5,
                    color: "#0A0A0A",
                    fontWeight: "bold",
                  }}
                >
                  Contact Me
                </Typography>
              </Button>
              {/* LinkedIn  */}
              <Button
                sx={{
                  borderRadius: 100,
                  minWidth: 50,
                  height: 50,
                  bgcolor: "#222222",
                  color: "white",
                  "&:hover": {
                    bgcolor: "#444444",
                  },
                }}
              >
                <LinkedInIcon
                  sx={{
                    color: "#D84040",
                    "&:hover": {
                      color: "#E87040",
                    },
                  }}
                />
              </Button>
              {/* GitHub  */}
              <Button
                sx={{
                  borderRadius: 100,
                  minWidth: 50,
                  height: 50,
                  bgcolor: "#222222",
                  color: "white",
                  "&:hover": {
                    bgcolor: "#444444",
                  },
                }}
              >
                <GitHubIcon sx={{
                    color: "#D84040",
                    "&:hover": {
                      color: "#E87040",
                    },
                  }} />
              </Button>
            </Stack>
          </Box>
          {/* Profile Picture */}
          <Avatar
            alt="Dusit"
            src={ProfilePic}
            sx={{ width: 700, height: 700, borderRadius: 3 }}
          />
        </Box>
        {/* ==== Divider ==== */}
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.2)",
            my: 2,
          }}
        />

        {/* About Section ===============*/}
        <Box
          id="about"
          display="flex"
          py={5}
          marginLeft={10}
          justifyItems={"space-between"}
          alignItems="start"
        >
          {/* ABOUT ME */}
          <Typography
            variant="h2"
            fontWeight="bold"
            width={"100%"}
            textAlign="start"
            marginLeft={{ xs: 0, md: 10 }}
          >
            ABOUT ME
          </Typography>
          <Grid container spacing={5}>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                marginLeft: "90px",
              }}
            >
              <Typography variant="h5" marginTop={6}>
                ผมเป็นนักเขียนโปรแกรมที่ทำงานอยู่ใน กรุงเทพฯ
                กำลังมองหาโอกาสที่น่าตื่นเต้นในการทำงาน
                มีพื้นฐานการศึกษาด้านวิศวกรรมซอฟต์แวร์
              </Typography>
              <Typography
                color="#999999"
                marginTop={2}
                marginBottom={5}
                variant="body1"
              >
                ชอบให้ความสำคัญกับการเข้าถึง (accessibility) เมื่อพัฒนาเว็บไซต์
                มีความกระตือรือร้นและอยากรู้ อยากเห็นเกี่ยวกับการแก้ปัญหาต่างๆ
                ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js
                และการออกแบบเว็บไซต์เล็กน้อย เมื่อไม่ได้เขียนโปรแกรม
                ผมชอบอ่านหนังสือและเล่นเกม 
                กำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ
              </Typography>
              <Stack direction="row" spacing={2}>
                {/* Download Resume */}
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#D84040",
                    color: "#0A0A0A",
                    "&:hover": {
                      bgcolor: "#E87040",
                    },
                  }}
                  style={{ borderRadius: 15 }}
                >
                  
                  <Typography
                    style={{
                      fontSize: 14,
                      padding: 5,
                      color: "#0A0A0A",
                      fontWeight: "bold",
                    }}
                  >
                    DOWNLOAD RESUME
                  </Typography>
                </Button>
                {/* LinkedIn */}
                <Button
                  sx={{
                  borderRadius: 100,
                  minWidth: 50,
                  height: 50,
                  bgcolor: "#222222",
                  color: "white",
                  "&:hover": {
                    bgcolor: "#444444",
                  },
                }}
                >
                  <LinkedInIcon sx={{
                    color: "#D84040",
                    "&:hover": {
                      color: "#E87040",
                    },
                  }}/>
                </Button>
                {/* GitHub */}
                <Button
                  sx={{
                    borderRadius: 100,
                    minWidth: 50,
                    height: 50,
                    bgcolor: "#222222",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#444444",
                    },
                  }}
                >
                  <GitHubIcon sx={{
                    color: "#D84040",
                    "&:hover": {
                      color: "#E87040",
                    },
                  }}/>
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        {/* Banner */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          
          <img
            src={Banner}
            alt="about"
            style={{ width: "85%", borderRadius: 16 }}
          />
        </Grid>
        {/* ==== Divider ==== */}
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.2)",
            my: 2,
          }}
        />
        {/* Capabilities Section */}
        <Box
          id="about"
          display="flex"
          py={5}
          marginLeft={10}
          justifyItems={"space-between"}
          alignItems="start"
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            width={"70%"}
            textAlign="start"
            marginLeft={10}
          >
            MY CAPABILITIES
          </Typography>


          <Stack
            width={"50%"}
            marginRight={20}
            
            direction="row"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Typography color="#999999" sx={{ marginBottom: 3, width: "100%" }}>
              ผมมองหาโอกาสในการเพิ่มทักษะใหม่ๆ อยู่เสมอ ทั้งการพัฒนาฟรอนท์เอนด์
              แบ็กเอนต์ การออกแบบ UX/UI ฐานข้อมูล
            </Typography>
            {/* Capabilities List */}
            {[
              "HTML",
              "CSS",
              "JAVASCRIPT",
              "FLUTTER",
              "IoT",
              "REACT",
              "DATABASE",
              "PYTHON",
            ].map((skill) => (
              <Button
                key={skill}
                variant="outlined"
                color="inherit"
                sx={{
                  borderRadius: 3,
                  borderWidth: 1,
                  marginRight: 2,
                  // marginLeft:6,
                  marginBottom: 2,
                  width: "20%",
                  borderColor: "#D84040",
                  "&:hover": {
                      bgcolor: "#E87040",
                      borderColor: "#E87040",
                    },
                }}
              >
                {skill}
              </Button>
            ))}
          </Stack>
        </Box>
        {/* ==== Divider ==== */}
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.2)",
            my: 2,
          }}
        />
        {/* Experience Section =============*/}
        <Box
          id="experience"
          
          display="flex"
          py={5}
          marginLeft={10}
          marginRight={10}
          
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            width={"100%"}
            textAlign="start"
            marginLeft={10}
          >
            MY EXPERIENCE
          </Typography>
          <Box width={"80%"} flexDirection={"column"} >
            <Box mt={2}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Typography fontWeight="bold">Freelance Developer </Typography>
                <Typography color="#999999" fontWeight="normal">
                  Nov 2023 – Present
                </Typography>
              </Box>
              <Typography mt={1} color="#999999">
                พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้สำหรับเว็บแอปพลิเคชันโดยใช้
                React.js ทำงานร่วมกับทีมออกแบบ UX/UI
                เพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจ
                ปรับปรุงความเร็วในการโหลดเว็บไซต์ด้วยเทคนิคการเพิ่มประสิทธิภาพต่างๆ
                ร่วมพัฒนาและดูแลไลบรารีคอมโพเนนต์ภายในองค์กร
              </Typography>
            </Box>
            <Box mt={3}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent={"space-between"}
              >
                <Typography fontWeight="bold">Front-End Intern</Typography>
                <Typography color="#999999" fontWeight="normal">
                  Sep 2023 – Nov 2023
                </Typography>
              </Box>
              <Typography mt={1} color="#999999">
                พัฒนาเว็บไซต์ลูกค้าโดยใช้ HTML, CSS และ JavaScript
              </Typography>
              <Typography color="#999999">
                ช่วยปรับปรุงการเข้าถึง (Accessibility)
                ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน WCAG
              </Typography>
              <Typography color="#999999">
                ทำงานร่วมกับทีมแบ็คเอนด์เพื่อเชื่อมต่อ API
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* ==== Divider ==== */}
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.2)",
            my: 2,
          }}
        />

        {/* Contact Section */}
        <Box id="contact" py={5} marginLeft={20} color="white">
          <Grid width={"100%"} container spacing={4} alignItems="flex-start">
            <Grid item xs={20} md={6}>
              <Typography variant="h2" fontWeight="bold" gutterBottom>
                LET’S CONNECT
              </Typography>
              <Typography color="#999999" sx={{ mb: 1 }}>
                Say hello at <Link color="inherit">s6552410011@sau.ac.th</Link>
              </Typography>
              <Typography color="#999999" sx={{ mb: 2 }}>
                For more info, here's my{" "}
                <Link href="#" color="inherit">
                  resume
                </Link>
              </Typography>
              <Stack direction="row" spacing={2} mb={3}>
                {/* LinkedIn */}
                <Button
                  sx={{
                    borderRadius: 100,
                    minWidth: 50,
                    height: 50,
                    bgcolor: "#222222",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#444444",
                    },
                  }}
                >
                  <LinkedInIcon sx={{
                    color: "#D84040",
                    "&:hover": {
                      color: "#E87040",
                    },
                  }}/>
                </Button>
                {/* GitHub */}
                <Button
                  sx={{
                    borderRadius: 100,
                    minWidth: 50,
                    height: 50,
                    bgcolor: "#222222",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#444444",
                    },
                  }}
                >
                  <GitHubIcon sx={{
                    color: "#D84040",
                    "&:hover": {
                      color: "#E87040",
                    },
                  }}/>
                </Button>
                {/* Instagram */}
                <Button
                  sx={{
                    borderRadius: 100,
                    minWidth: 50,
                    height: 50,
                    bgcolor: "#222222",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#444444",
                    },
                  }}
                >
                  <InstagramIcon sx={{
                    color: "#D84040",
                    "&:hover": {
                      color: "#E87040",
                    },
                  }}/>
                </Button>
                {/* Twitter */}
                <Button
                  sx={{
                    borderRadius: 100,
                    minWidth: 50,
                    height: 50,
                    bgcolor: "#222222",
                    color: "white",
                    "&:hover": {
                      bgcolor: "#444444",
                    },
                  }}
                >
                  <TwitterIcon sx={{
                    color: "#D84040",
                    "&:hover": {
                      color: "#E87040",
                    },
                  }}/>
                </Button>
              </Stack>
            </Grid>
            {/* Textfield Section */}
            <Grid
              container
              flexDirection={"column"}
              flex={1}
              item
              xs={1}
              md={5}
              spacing={2}
              ml={5}
              mr={1}
            >
              {/* Text Field Name */}
              <Grid item xs={12}>
                <Typography gutterBottom>Name</Typography>
                <TextField
                  fullWidth
                  InputProps={{
                    style: {
                      color: "#ffffff",
                      backgroundColor: "#1A1A1A",
                      borderRadius: 0,
                    },
                  }}
                  InputLabelProps={{ style: { color: "#ccc" } }}
                />
              </Grid>
              {/* Text Field Email */}
              <Grid item xs={12}>
                <Typography gutterBottom>Email</Typography>
                <TextField
                  fullWidth
                  InputProps={{
                    style: {
                      color: "#ffffff",
                      backgroundColor: "#1A1A1A",
                      borderRadius: 0,
                    },
                  }}
                  InputLabelProps={{ style: { color: "#ccc" } }}
                />
              </Grid>
              {/* Text Field Subject */}
              <Grid item xs={12}>
                <Typography gutterBottom>Subject</Typography>
                <TextField
                  fullWidth
                  InputProps={{
                    style: {
                      color: "#fff",
                      backgroundColor: "#1A1A1A",
                      borderRadius: 0,
                    },
                  }}
                  InputLabelProps={{ style: { color: "#ccc" } }}
                />
              </Grid>
              {/* Text Field Message */}
              <Grid item xs={12}>
                <Typography gutterBottom>Message</Typography>
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  maxRows={4}
                  InputProps={{
                    style: {
                      color: "#fff",
                      backgroundColor: "#1A1A1A",
                      borderRadius: 0,
                    },
                  }}
                  InputLabelProps={{ style: { color: "#ccc" } }}
                  sx={{ textarea: { color: "#fff" } }}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    bgcolor: "#D84040",
                    color: "#0A0A0A",
                    borderRadius: 5,
                    "&:hover": {
                      bgcolor: "#E87040",
                    },
                  }}
                >
                  <Typography fontSize={14} fontWeight={"bold"} padding={1}>
                    SUBMIT
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* Footer */}
        <Typography color="#999999" ml={10} variant="body2" textAlign="start">
          © 2025 Dusit Pakdeekunakorn
        </Typography>
      </Box>
    </>
  );
}

export default HomeUI;
