import React, { useContext } from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { AppContext } from "../../../pages/layout";

function StayAhead() {
  const {
    DialogueRegister,
    setDialogueRegister,
    DialogueLogin,
    setDialogueLogin,
  } = useContext(AppContext);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "white",
          py: { md: 4, xs: 4 },
        }}
      >
        <Container
          maxWidth="big"
          sx={{
            m: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: {
              md: "row-reverse",
              xs: "column",
            },
          }}
        >
          {/* Left */}
          <Box
            sx={{
              width: { md: "50%", xs: "100%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
              mr: { md: 1 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Ubuntu",
                fontSize: { md: "2rem", xs: "1.8rem" },
                fontWeight: 700,
                color: "#703ddb",
                textAlign: "start",
                maxWidth: { md: "550px" },
              }}
            >
              Stay Ahead With BTC Code Method
            </Typography>
            <Typography
              sx={{
                fontFamily: "Ubuntu",
                fontSize: { md: "17px", xs: "16px" },
                fontWeight: 400,
                color: "#333333",
                textAlign: "start",
                my: 4,
              }}
            >
              {`Due to its steady profitability, the BTC Code Method technology is gaining recognition around the world. BTC Code Method users have significantly expanded the size of their financial portfolios in a short period of time. Simply fill out the registration form below to get started right away.`}
            </Typography>
            <Button
             onClick={() => setDialogueRegister(!DialogueRegister)}
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
                  transform:"scale(1.05)",
                },
                transition:"all 0.4s ease",
              }}
            >
              Register for Free
            </Button>
          </Box>
          {/* Right */}
          <Box
            sx={{
              position: "relative",
              width: { md: "50%", xs: "100%" },
              height: { md: "450px", xs: "300px" },
              mr: { md: 1 },
            }}
          >
            <Image
              src={"/assets/stayahead.jpeg"}
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default StayAhead;
