import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Grid from "@mui/material/Grid";

function AsSeenOn() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "#FFFFFF",
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
              color: "#703ddb",
              textAlign: "center",
            }}
          >
            As seen on
          </Typography>
          <Box
            sx={{
              position: "relative",
              width: { md: "700px", xs: "100%" },
              height: { md: "75px", xs: "60px" },
            }}
          >
            <Image
              src={"/assets/seenon.png"}
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </Box>

          {/* Welcome */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: {
                md: "row",
                xs: "column",
              },
              mt: 4,
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
                Welcome, feel free to have a look around!
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
                {`If you're interested in becoming a part of the cryptocurrency revolution, you've made a wise decision by choosing Bitcode Method to assist you in making the most of your trading experience.`}
              </Typography>
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
            </Box>
            {/* Right */}
            <Box
              sx={{
                position: "relative",
                width: { md: "50%", xs: "100%" },
                height: { md: "450px", xs: "300px" },
                ml: { md: 1 },
              }}
            >
              <Image
                src={"/assets/seenon2.jpeg"}
                alt="logo"
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Box>

          {/* Question 2 */}
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "2rem", xs: "1.8rem" },
              fontWeight: 700,
              color: "#703ddb",
              textAlign: "start",
              alignSelf: "start",
              maxWidth: { md: "550px" },
              mt: 3,
            }}
          >
            What Is Bitcode Method?
          </Typography>
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "17px", xs: "16px" },
              fontWeight: 400,
              color: "#333333",
              textAlign: "start",
              mt: 2,
            }}
          >
            {`Bitcode Method is a new, fully automated trading software that can help new and expert traders navigate the volatile cryptocurrency market. Advanced algorithms and artificial intelligence have been used to develop Bitcode Method. In essence, technology has the ability to perform all of your tasks for you to save you time. To begin live trading, simply open an account and deposit a little amount of money. We’ll assign you a personal account manager to help you set up your account after you join.`}
          </Typography>

          {/* Question 3 */}
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "2rem", xs: "1.8rem" },
              fontWeight: 700,
              color: "#703ddb",
              textAlign: "start",
              alignSelf: "start",
              maxWidth: { md: "550px" },
              mt: 3,
            }}
          >
            How Does Bitcode Method Work?
          </Typography>
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "17px", xs: "16px" },
              fontWeight: 400,
              color: "#333333",
              textAlign: "start",
              mt: 2,
            }}
          >
            Bitcode Method uses the latest technology to identify profitable
            opportunities for you. Our technology employs CySEC-licensed brokers
            to assist with account transactions. A broker will contact you
            following your registration to ensure that your account runs as
            smoothly as possible. To get started, you don’t need any formal
            trading experience or skills.
            <br />
            <br /> Bitcode Method is completely autonomous, and its algorithm is
            capable of scanning the markets on your behalf, gathering relevant
            data, and identifying successful transactions. Bitcode Method has an
            85% victory rate. Our consumers have boasted that the technology has
            expanded their financial wealth in a matter of hours.
          </Typography>

          {/* Question 4 */}
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "2rem", xs: "1.8rem" },
              fontWeight: 700,
              color: "#703ddb",
              textAlign: "start",
              alignSelf: "start",
              maxWidth: { md: "550px" },
              mt: 3,
            }}
          >
            Tips When Using Bitcode Method
          </Typography>
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "17px", xs: "16px" },
              fontWeight: 400,
              color: "#333333",
              textAlign: "start",
              mt: 2,
            }}
          >
            For both new and experienced traders, Bitcode Method is a very
            successful trading technology with proven outcomes. Here are some
            pointers to help you get the most out of our trading software:
            <ul>
              <li>Start small, and make an initial deposit of €250.</li>
              <li>Withdraw your profits regularly.</li>
              <li>
                Re-invest profits and only risk what you can afford to lose.
              </li>
            </ul>
          </Typography>

          {/* Question 3 */}
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "2rem", xs: "1.8rem" },
              fontWeight: 700,
              color: "#703ddb",
              textAlign: "start",
              alignSelf: "start",
              mt: 3,
            }}
          >
            Potential Benefits Of BTC Code Method
          </Typography>
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "17px", xs: "16px" },
              fontWeight: 700,
              color: "#703ddb",
              textAlign: "start",
              alignSelf: "start",
              mt: 2,
            }}
          >
            Low Maintenance
          </Typography>
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "17px", xs: "16px" },
              fontWeight: 400,
              color: "#333333",
              textAlign: "start",
              mt: 2,
            }}
          >
            BTC Code Method is ideal for anyone looking for a trading technology
            that lets them keep their full-time employment while making a
            passive income in the cryptocurrency market. You don’t have to do
            any of the work since our trading technology performs it for you.
            All you have to do is work on your account for 20 minutes a day.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "17px", xs: "16px" },
              fontWeight: 700,
              color: "#703ddb",
              textAlign: "start",
              alignSelf: "start",
              mt: 2,
            }}
          >
            Speed
          </Typography>
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "17px", xs: "16px" },
              fontWeight: 400,
              color: "#333333",
              textAlign: "start",
              mt: 2,
            }}
          >
            The cryptocurrency market is known for its volatility. This is why
            you need a trading technology that is able to enter and exit the
            markets in record time. BTC Code Method is able to analyse large
            sets of data in less than one millisecond. You don’t have to worry
            about spending large amounts of time doing research, the technology
            does this at a much faster pace.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "17px", xs: "16px" },
              fontWeight: 700,
              color: "#703ddb",
              textAlign: "start",
              alignSelf: "start",
              mt: 2,
            }}
          >
            Consistent Profitability
          </Typography>
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "17px", xs: "16px" },
              fontWeight: 400,
              color: "#333333",
              textAlign: "start",
              mt: 2,
            }}
          >
            Consistency is key in the cryptocurrency market. The crypto space is
            not like conventional markets in that it does not close at the end
            of the day. It is accessible at all times of the day and night. As a
            result, you’ll need a trading system that’s always hunting for the
            best transactions. By entrusting BTC Code Method with this, you can
            sit back and relax while the automatic trader takes care of the
            rest, allowing you to maintain consistency with minimal effort.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "17px", xs: "16px" },
              fontWeight: 700,
              color: "#703ddb",
              textAlign: "start",
              alignSelf: "start",
              mt: 2,
            }}
          >
            No Trading Experience Needed
          </Typography>
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "17px", xs: "16px" },
              fontWeight: 400,
              color: "#333333",
              textAlign: "start",
              mt: 2,
            }}
          >
            One of the best features of BTC Code Method is its user-friendly
            nature. You need no prior experience to open an account with our
            technology. The trading technology and automated trading system make
            it easy to trade the cryptocurrency markets.
          </Typography>

          <Button
            sx={{
              alignSelf: "start",
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
              mt: 10,
            }}
          >
            Register for Free
          </Button>
        </Container>
      </Box>
    </>
  );
}

export default AsSeenOn;
