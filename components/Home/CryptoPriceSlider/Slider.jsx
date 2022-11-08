import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";

function Slider() {
  const [TrendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "50",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": "29e34e78a4msh1f1c7e6c394238ep1e73c7jsn363d74c87bb4",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.data.coins);
        setTrendingCoins(response.data.data.coins);
      })
      .catch(function (error) {
        console.error(" error coinRanking" + error);
      });
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        background: "white",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 9,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {TrendingCoins?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Icon */}
                <img
                  src={item.iconUrl}
                  alt={item.iconUrl}
                  style={{
                    width: "36px",
                    height: "36px",
                    objectFit: "contain",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    flexDirection: "column",
                    ml: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Ubuntu",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#333333",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.symbol + "/USD"}
                    <Box
                      component={"span"}
                      sx={{ fontSize: "14px", fontWeight: 400, ml: 0.3 }}
                    >
                      24h
                    </Box>
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Ubuntu",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "red",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {"$" + Number(item.price).toFixed(2)}
                    <Box
                      component={"span"}
                      sx={
                        +item.change > 0
                          ? { color: "#1fa508", ml: 0.5 }
                          : { color: "red", ml: 0.5 }
                      }
                    >
                      {item.change + "%"}
                    </Box>
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}

export default Slider;
