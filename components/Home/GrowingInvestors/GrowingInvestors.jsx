import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

function GrowingInvestors() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "white",
          display: "flex",
          py: { md: 6, xs: 4 },
        }}
      >
        <Container
          maxWidth="big"
          sx={{
            m: "auto",
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
              color: "#703ddb",
              textAlign: "center",
            }}
          >
            Growing Investors
          </Typography>
          <Box
            sx={{
              width: "100%",
              my: 6,
            }}
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              slidesPerGroup={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                  slidesPerGroup: 2,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                  slidesPerGroup: 3,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  slidesPerGroup: 3, 
                },
              }}
              className="mySwiper"
              style={{
                minHeight: "320px",
              }}
            >
              {Investors?.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      {/* Avatar */}
                      <Box
                        sx={{
                          width: "3.5rem",
                          height: "3.5rem",
                          background: "#570777",
                          fontFamily: "Ubuntu",
                          fontSize: { md: "1.1rem", xs: "1rem" },
                          lineHeight: "3rem",
                          fontWeight: 700,
                          color: "white",
                          borderRadius: "50%",
                          // boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, .2)",
                          overflow: "hidden",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {item.Ico}
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "Ubuntu",
                          fontSize: { md: "1.4rem", xs: "1rem" },
                          fontWeight: 500,
                          color: "#703ddb",
                          textAlign: "center",
                          mt: 1.5,
                        }}
                      >
                        {item.Name}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Ubuntu",
                          fontSize: { md: "1rem", xs: "0.8rem" },
                          fontWeight: 500,
                          color: "#333333",
                          textAlign: "center",
                          fontStyle: "italic",
                        }}
                      >
                        {item.JoiningTime}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Ubuntu",
                          fontSize: { md: "1.2rem", xs: "1rem" },
                          fontWeight: 500,
                          color: "#703ddb",
                          textAlign: "center",
                          mt: 1,
                        }}
                      >
                        {item.Review}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Ubuntu",
                          fontSize: { md: ".8em", xs: ".8em" },
                          fontWeight: 500,
                          color: "#333333",
                          textAlign: "center",
                          fontStyle: "italic",
                          mt: 0.2,
                        }}
                      >
                        {item.des}
                      </Typography>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
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
            }}
          >
            Register for Free
          </Button>
        </Container>
      </Box>
    </>
  );
}

export default GrowingInvestors;

const Investors = [
  {
    Ico: "CB",
    Name: "Clint B.",
    JoiningTime: "Joined on: Jul 26, 2021",
    Review: "REALLY, REALLY SMART!",
    des: `"Few of the best things about Bitcode Method > The function of suspending operation at high market volatility, allows the bot to adequately respond to the current price and execute orders in accordance with risk level. In addition, the bot itself takes into account the commissions so I'm never left short. Top stuff"`,
  },
  {
    Ico: "DR",
    Name: "Dennis R.",
    JoiningTime: "Joined on: Aug 05, 2021",
    Review: "Keeps working",
    des: `"I very often got into a strop trading and lose my money because of this. Thanks to Bitcode Method I do not lose control of my emotions. It is very easy to enter and withdraw money too"`,
  },
  {
    Ico: "BM",
    Name: "Božidar M.",
    JoiningTime: "Joined on: Aug 03, 2021",
    Review: "Focuses on profits",
    des: `"a wonderful innovation - Bitcode Method software suits me by the fact that the work takes place 24 hours a day, thereby increasing the profit. And for me, this is the most important thing."`,
  },
  {
    Ico: "CB",
    Name: "Clint B.",
    JoiningTime: "Joined on: Jul 26, 2021",
    Review: "REALLY, REALLY SMART!",
    des: `"Few of the best things about Bitcode Method > The function of suspending operation at high market volatility, allows the bot to adequately respond to the current price and execute orders in accordance with risk level. In addition, the bot itself takes into account the commissions so I'm never left short. Top stuff"`,
  },
  {
    Ico: "DR",
    Name: "Dennis R.",
    JoiningTime: "Joined on: Aug 05, 2021",
    Review: "Keeps working",
    des: `"I very often got into a strop trading and lose my money because of this. Thanks to Bitcode Method I do not lose control of my emotions. It is very easy to enter and withdraw money too"`,
  },
  {
    Ico: "BM",
    Name: "Božidar M.",
    JoiningTime: "Joined on: Aug 03, 2021",
    Review: "Focuses on profits",
    des: `"a wonderful innovation - Bitcode Method software suits me by the fact that the work takes place 24 hours a day, thereby increasing the profit. And for me, this is the most important thing."`,
  },
];
