import React, { useContext } from "react";
import Slider from "../components/Home/CryptoPriceSlider/Slider";
import Hero from "../components/Home/Hero/Hero";
import Antivirious from "../components/Home/Antivirious/Antivirious";
import Features from "../components/Home/ImpressiveFeatures/Features";
import AsSeenOn from "../components/Home/AsSeenOn/AsSeenOn";
import GetStarted from "../components/Home/GetStarted/GetStarted";
import GrowingInvestors from "../components/Home/GrowingInvestors/GrowingInvestors";
import StayAhead from "../components/Home/StayAhead/StayAhead";
import FAQ from "../components/Home/FAQ's/FAQ";
import Highlights from "../components/Home/Highlights/Highlights";
import SignUpInputs from "../components/Common/SignUpInputs";
import LoginForm from "../components/Common/LoginForm";

// Dialogue
import Dialog from "@mui/material/Dialog";

// Mui Imports
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

// Next Js
import Image from "next/image";
import Link from "next/link";

import { AppContext } from "../pages/layout";

function Homepage() {
  const {
    DialogueRegister,
    setDialogueRegister,
    DialogueLogin,
    setDialogueLogin,
  } = useContext(AppContext);

  return (
    <>
      <Slider />
      <Hero />
      <Antivirious />
      <Features />
      <AsSeenOn />
      <GetStarted />
      <GrowingInvestors />
      <StayAhead />
      <FAQ />
      <Highlights />

      {/* Register dialogue */}
      <Dialog
        open={DialogueRegister}
        onClose={() => setDialogueRegister(!DialogueRegister)}
      >
        <Box
          sx={{
            width: { sm: "560px", xs: "100%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "white",
            px: { md: 4, xs: 4 },
            py: { md: 5, xs: 4 },
            borderRadius: "1rem",
          }}
        >
          <CloseIcon
            onClick={() => setDialogueRegister(!DialogueRegister)}
            sx={{ alignSelf: "end", cursor: "pointer" }}
          />
          <Box
            sx={{
              position: "relative",
              width: { md: "320px", xs: "200px" },
              height: { md: "60px", xs: "40px" },
              my: 2,
            }}
          >
            <Image
              src={"/assets/logo.png"}
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <SignUpInputs />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: {sm:"120px",xs:"80px"},
                height: {sm:"50px",xs:"36px"},
              }}
            >
              <Image
                src={"/assets/bitgo.png"}
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </Box>
            <Box
              sx={{
                position: "relative",
                width: {sm:"120px",xs:"80px"},
                height: {sm:"50px",xs:"36px"},
                mx: { md: 3, xs: 1 },
              }}
            >
              <Image
                src={"/assets/norton.png"}
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </Box>
            <Box
              sx={{
                position: "relative",
                width: {sm:"150px",xs:"80px"},
                height: {sm:"56px",xs:"36px"},
              }}
            >
              <Image
                src={"/assets/mcafee.png"}
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Box>
        </Box>
      </Dialog>

      {/* Login dialogue */}
      <Dialog
        open={DialogueLogin}
        onClose={() => setDialogueLogin(!DialogueLogin)}
      >
        <Box
          sx={{
            width: { sm: "560px", xs: "100%" },
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
          <CloseIcon
            onClick={() => setDialogueLogin(!DialogueLogin)}
            sx={{ alignSelf: "end", cursor: "pointer", mb: 2 }}
          />
          <LoginForm />
        </Box>
      </Dialog>
    </>
  );
}

export default Homepage;
