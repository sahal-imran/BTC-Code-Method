import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";

function Features() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "#560872",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          py: { md: 6, xs: 4 },
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
              fontSize: { md: "2rem", xs: "1.8rem" },
              fontWeight: 700,
              color: "white",
              textAlign: "center",
            }}
          >
            BTC Code Method: Most Impressive Features
          </Typography>
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "18px", xs: "16px" },
              lineHeight: "24px",
              fontWeight: 400,
              color: "white",
              textAlign: "center",
              my: 2,
              mb: 3,
            }}
          >
            {`Here are some of the added benefits of trading with our cutting-edge trading technology. It is important to us that you understand how these benefits work and how they will impact your trading account. BTC Code Method for new users interested in trading on this platform:`}
          </Typography>
          <Box sx={{ flexGrow: 1, width: "100%", mt: 3 }}>
            <Grid
              container
              rowSpacing={{ md: 3, xs: 4 }}
              columnSpacing={{ md: 3, xs: 0 }}
            >
              {Feat?.map((item, index) => {
                return (
                  <Grid
                    key={index}
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "start",
                    }}
                    item
                    xs={12}
                    md={6}
                  >
                    {/* Tick Box */}
                    <Box
                      sx={
                        index === 6
                          ? { display: "none" }
                          : {
                              width: "22px",
                              height: "20px",
                              background: "white",
                              borderRadius: "2px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              mt: 0.8,
                            }
                      }
                    >
                      <CheckIcon sx={{ fontSize: "1.3rem", fontWeight: 700 }} />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "Ubuntu",
                        fontSize: { md: "17px", xs: "16px" },
                        fontWeight: 400,
                        color: "white",
                        textAlign: "start",
                        ml: 2,
                      }}
                    >
                      {`${item.des}`}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Features;

const Feat = [
  {
    des: "A new user will find it easy to navigate this platform. The features are basic and easy to understand. The interface is simple to navigate through too. We are sure that you won't need any help finding your way.",
  },
  {
    des: "Users are able to learn about making money on this platform before making actual money. It also safeguards new users from investing large sums of money into a market they do not understand yet.",
  },
  {
    des: "Verifying the user’s personal information is of utmost importance. Luckily the verification process is quick and easy and new users can do this via the email account they have provided.Verifying the user’s personal information is of utmost importance. Luckily the verification process is quick and easy and new users can do this via the email account they have provided.",
  },
  {
    des: "Transactions can be made within 24 hours of the initial trade. The robots on BTC Code Method are fast and accurate.",
  },
  {
    des: "BTC Code Method is free and safe for everyone to use. In the future, we might charge all new accounts a fee to sign up. Sign up now to take advantage of the free licence.",
  },
  {
    des: "AI is what makes the trading algorithms for BTC Code work (AI). The parts of AI are called Machine Learning Our system does technical and fundamental analysis by using parts of Natural Language Processing (NLP) and Deep Learning (DL).",
  },
  {
    des: "",
  },
  {
    des: "BTC Code Method uses AI to make sure that it always works well. You could make a lot of money with a 250 EUR minimum deposit. If you reinvest some of your daily profits, they will grow at an exponential rate.",
  },
];
