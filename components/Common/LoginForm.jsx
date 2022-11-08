import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Anchorlink from "@mui/material/Link";

function LoginForm() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* Email input */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#333333",
              mb: 0.6,
            }}
          >
            Email:
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "40px",
              border: "2px solid #333333",
              borderRadius: "0.5rem",
            }}
          >
            <input
              type="email"
              style={{
                width: "100%",
                height: "100%",
                outline: "none",
                border: "none",
                borderRadius: "none",
                background: "transparent",
                padding: "0px 10px",
                fontFamily: "Ubuntu",
                fontSize: "16px",
                fontWeight: 500,
                color: "#333333",
              }}
            />
          </Box>
        </Box>

        {/* Password input */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            mt: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#333333",
              mb: 0.6,
            }}
          >
            Password:
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "40px",
              border: "2px solid #333333",
              borderRadius: "0.5rem",
            }}
          >
            <input
              type="password"
              style={{
                width: "100%",
                height: "100%",
                outline: "none",
                border: "none",
                borderRadius: "none",
                background: "transparent",
                padding: "0px 10px",
                fontFamily: "Ubuntu",
                fontSize: "16px",
                fontWeight: 500,
                color: "#333333",
              }}
            />
          </Box>
        </Box>

        <Button
          sx={{
            py: 0.1,
            width: "100%",
            boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.3)",
            background: "#703ddb",
            borderRadius: "0.5rem",
            fontFamily: "Ubuntu",
            fontSize: "1.2rem",
            fontWeight: 500,
            lineHeight: "3rem",
            color: "white",
            transition: "all 0.4s ease",
            // textTransform: "capitalize",
            "&:hover": {
              boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.3)",
              background: "#703ddb",
              transform: "scale(1.05)",
            },
            mt: 2,
          }}
        >
          Login
        </Button>

        <Typography
          sx={{
            alignSelf: "start",
            fontFamily: "Ubuntu",
            fontSize: { md: "1rem", xs: "0.8rem" },
            fontWeight: 400,
            color: "#333333",
            textAlign: "center",
            mt: 2,
          }}
        >
          {`Don't have an account?`}
          <Anchorlink
            sx={{
              textDecorationColor: "#703ddb",
              color: "#703ddb",
              cursor: "pointer",
              fontWeight: 800,
              ml: 1,
            }}
          >
            Register
          </Anchorlink>
        </Typography>
      </Box>
    </>
  );
}

export default LoginForm;
