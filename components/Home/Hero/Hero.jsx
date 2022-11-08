import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

// components
import SignUpInputs from "../../Common/SignUpInputs";

function Hero() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: { md: "100vh", xs: "auto" },
          background: "#560872",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: { md: 0, xs: 4 },
        }}
      >
        <Container
          maxWidth="big"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "2.5rem", xs: "2rem" },
              fontWeight: 700,
              color: "white",
              textAlign: "center",
            }}
          >
            Maximise your crypto profits with Bitcode Method!
          </Typography>
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "1.5rem", xs: "1.5rem" },
              fontWeight: 400,
              color: "white",
              my: 2,
              mb: 6,
              textAlign: "center",
            }}
          >
            {`Your financial future is in your hands, we'll help you kick start your trading journey today.`}
          </Typography>

          {/* Video and inputs */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { md: "row", xs: "column-reverse" },
            }}
          >
            <Box
              sx={{
                width: { md: "55%", xs: "auto" },
                height: { md: "420px", xs: "auto" },
                mr: { md: 1.5 },
                mt: { md: 0, xs: 3 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/766539058?h=b021089cec&title=0&byline=0&portrait=0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen={true}
                style={{ width: "100%", height: "100%", border: "none" }}
              ></iframe>
            </Box>

            {/* Right => inputs */}
            <Box
              sx={{
                ml: { md: 1.5 },
                width: { md: "40%", xs: "100%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                background: "white",
                px: { md: 4, xs: 4 },
                py: { md: 5.5, xs: 4 },
                borderRadius: "1rem",
              }}
            >
              <SignUpInputs />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Hero;
