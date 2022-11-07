import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function Hero() {
  const [Country, setCountry] = useState("PK");

  // async function lookupCountry({ latitude, longitude }) {
  //   const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;

  //   const locationData = await fetch(URL).then((res) => res.json());

  //   const [{ address_components }] = locationData.results.filter(({ types }) =>
  //     types.includes("country")
  //   );
  //   const [{ short_name }] = address_components;

  //   return short_name;
  // }

  // async function handleNavigator(pos) {
  //   const { latitude, longitude } = pos.coords;
  //   const userCountryCode = await lookupCountry({ latitude, longitude });
  //   setCountry(userCountryCode);
  // }

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(handleNavigator, () => {
  //     console.warn("permission was rejected");
  //     setCountry("PK");
  //   });
  // }, []);

  const [PhoneNo, setPhoneNo] = useState();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: {md:"100vh",xs:"auto"},
          background: "#560872",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py:{md:0,xs:4}
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
            }}
          >
            Maximise your crypto profits with Bitcode Method!
          </Typography>
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "1.5rem", xs: "1.3rem" },
              fontWeight: 400,
              color: "white",
              my: 2,
              mb: 6,
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
                height: {md:"420px",xs:"auto"},
                mr: { md: 1.5 },
                mt:{md:0,xs:3},
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
                px: { md: 4, xs: 2 },
                py: { md: 6.5, xs: 2 },
                borderRadius: "1rem",
              }}
            >
              {/* Name input */}
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
                  Name:
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
                    type="text"
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

              {/* SurName input */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                  mt: 2,
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
                  Surname:
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
                    type="text"
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

              {/* Email input */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                  mt: 2,
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

              {/* Phone no input */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                  mt: 2,
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
                  Phone:
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    height: "40px",
                    border: "2px solid #333333",
                    borderRadius: "0.5rem",
                    pl: 1,
                    "& .PhoneInput": {
                      width: "100%",
                      height: "100%",
                    },
                    "& input": {
                      width: "100%",
                      height: "100%",
                      outline: "none",
                      border: "none",
                      borderRadius: "none",
                      background: "transparent",
                      fontFamily: "Ubuntu",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#333333",
                    },
                  }}
                >
                  <PhoneInput
                    defaultCountry={Country}
                    value={PhoneNo}
                    onChange={setPhoneNo}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Hero;
