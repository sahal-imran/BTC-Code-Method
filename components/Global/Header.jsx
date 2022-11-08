import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Homepage() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background: "#17173E",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { md: "100px" },
          py: { md: 0, xs: 0.4 },
        }}
      >
        <Container
          maxWidth="big"
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              position: "relative",
              width: { md: "320px", xs: "200px" },
              height: { md: "60px", xs: "40px" },
            }}
          >
            <Image
              src={"/assets/logo.png"}
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </Box>

          {/* Right => Buttons div */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                py: 0.4,
                px: 2,
                boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.3)",
                background: "white",
                borderRadius: "0.5rem",
                fontFamily: "Ubuntu",
                fontSize: "1rem",
                fontWeight: 500,
                lineHeight: "3rem",
                color: "#333333",
                textTransform: "capitalize",
                "&:hover": {
                  boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.3)",
                  background: "white",
                },
                mr: 2,
                display: { md: "block", xs: "none" },
              }}
            >
              Login
            </Button>
            <Button
              sx={{
                py: 0.4,
                px: 2,
                boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.3)",
                background: "#703ddb",
                borderRadius: "0.5rem",
                fontFamily: "Ubuntu",
                fontSize: "1rem",
                fontWeight: 500,
                lineHeight: "3rem",
                color: "white",
                textTransform: "capitalize",
                "&:hover": {
                  boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.3)",
                  background: "#703ddb",
                },
                mr: 2.5,
                display: { md: "block", xs: "none" },
              }}
            >
              register
            </Button>

            {/* language dropdown */}
            <Box
              sx={{
                position: "relative",
                width: "76px",
                height: "28px",
                background: "white",
                p: 0.6,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={"/assets/en.png"}
                  alt="en"
                  width={30}
                  height={18}
                  objectFit="contain"
                />
                <Typography
                  sx={{
                    fontFamily: "Ubuntu",
                    fontSize: "18px",
                    fontWeight: 500,
                    lineHeight: "26p8",
                    color: "#333333",
                    ml: 0.5,
                  }}
                >
                  EN
                </Typography>
                <ArrowDropDownIcon sx={{ color: "#333333", fontSize: "" }} />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          width: "100%",
          py: 1,
          px: 2,
          display: { md: "none", xs: "flex" },
          justifyContent: "center",
          alignItems: "center",
          background: "#fff",
          position: "fixed",
          bottom: 0,
          zIndex: 11,
        }}
      >
        <Button
          sx={{
            width: "50%",
            height: "50px",
            boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.3)",
            background: "white",
            borderRadius: "0.5rem",
            fontFamily: "Ubuntu",
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: "3rem",
            color: "#333333",
            textTransform: "capitalize",
            "&:hover": {
              boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.3)",
              background: "white",
            },
            mr: 2,
          }}
        >
          Login
        </Button>
        <Button
          sx={{
            width: "50%",
            height: "50px",
            boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.3)",
            background: "#703ddb",
            borderRadius: "0.5rem",
            fontFamily: "Ubuntu",
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: "3rem",
            color: "white",
            textTransform: "capitalize",
            "&:hover": {
              boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.3)",
              background: "#703ddb",
            },
          }}
        >
          register
        </Button>
      </Box>
    </>
  );
}

export default Homepage;
