import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";

function Antivirious() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: { md: 4, xs: 2 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "120px",
            height: "50px",
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
            width: "120px",
            height: "50px",
            mx:{md:3,xs:2}
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
            width: "150px",
            height: "56px",
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
    </>
  );
}

export default Antivirious;
