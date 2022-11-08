import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";

function Highlights() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "white",
          pt: { md: 2, xs: 2 },
          pb: 2,
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
            Bitcode Method Highlights
          </Typography>
          <Box
            sx={{
              maxWidth: "800px",
              m: "auto",
              mt: 2,
            }}
          >
            <table style={{ width: "100%" }}>
              {Data?.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{row.col1}</td>
                    <td> {row.col2} </td>
                  </tr>
                );
              })}
            </table>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Highlights;

const Data = [
  {
    col1: "🌍 Countries",
    col2: "Globally Available (Except USA)",
  },
  {
    col1: "✊ Withdrawal Fee",
    col2: "No Fees",
  },
  {
    col1: "💸 Withdrawal Time",
    col2: "Same Day",
  },
  {
    col1: "💰 Deposit Fee",
    col2: "Free",
  },
  {
    col1: "💳 Deposit Methods",
    col2: "Visa, Mastercard, Amex , Cryptocurrency, Bank Transfer, Paypal, Yandex, Skrill, Neteller",
  },
  {
    col1: "🤖 Trading Types",
    col2: "Crypto, Stocks, Commodities, ETFs, Index",
  },
  {
    col1: "💱 Trading Pairs",
    col2: "BTC/USD, ETH/USD, XRP/USD, USDT/USD, BTC/USDT, ETH/USDT, FAANG",
  },
  {
    col1: "🖥️ Operating Systems",
    col2: "iOS, Android, MacOS, Windows, Linux",
  },
  {
    col1: "💻 Platform Availability",
    col2: "Android App, iOS App, Windows App, Web App",
  },
  {
    col1: "🤑 Registration Cost",
    col2: "Free",
  },
  {
    col1: "👨‍💼 Features",
    col2: "Personal Account Manager, Same Day Withdrawal, Free Registration, 24/7 Customer Support",
  },
  {
    col1: "👩‍💼 Support",
    col2: "Personal Account Manager, 24/7 Support",
  },
];
