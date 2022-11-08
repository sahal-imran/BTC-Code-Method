import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MovingIcon from "@mui/icons-material/Moving";
import React, { useContext } from "react";
import { AppContext } from "../../../pages/layout";

function GetStarted() {
  const {
    DialogueRegister,
    setDialogueRegister,
    DialogueLogin,
    setDialogueLogin,
  } = useContext(AppContext);
  return (
    <>
      <Box
        id="Started"
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            // minHeight: "100vh",
            background: "rgba(255, 255, 255, 0.94)",
            py: 4,
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
              How to Get Started With BTC Code Method
            </Typography>
            <Typography
              sx={{
                fontFamily: "Ubuntu",
                fontSize: { md: "17px", xs: "16px" },
                fontWeight: 400,
                color: "#333333",
                textAlign: "center",
                mt: 2,
              }}
            >
              Now that you have seen the capabilities of BTC Code Method, you
              may be wondering how to get going and sign up for this crypto
              trading technology. Below is a step-for-step guide on creating an
              account:
            </Typography>

            {/* Cards */}
            <Box sx={{ flexGrow: 1, width: "100%", mt: 8 }}>
              <Grid
                container
                columnSpacing={{ md: 4, xs: 0 }}
                rowSpacing={{ md: 0, xs: 4 }}
              >
                <Grid item md={4} xs={12}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      flexDirection: "column",
                      boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, .3)",
                      background: "white",
                    }}
                  >
                    <Box
                      sx={{
                        p: "1rem",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        background: "#570777",
                        width: "100%",
                      }}
                    >
                      {/* icon */}
                      <Box
                        sx={{
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "50%",
                          background: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <CreditScoreIcon
                          sx={{ color: "#703ddb", fontSize: "22px" }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "Ubuntu",
                          fontSize: { md: "1rem", xs: "16px" },
                          fontWeight: 700,
                          color: "white",
                          textAlign: "center",
                          ml: 1,
                        }}
                      >
                        Get Your Account Registered
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                        width: "100%",
                        px: 2,
                        py: 3,
                        minHeight: "300px",
                      }}
                    >
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
                        Step one is to fill out the form below to start the
                        sign-up process. It is that easy. Just fill out the form
                        below and you will be on your way. Bitcode Method will
                        only need your basic information, no credit card details
                        will need to be given at this point.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      flexDirection: "column",
                      boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, .3)",
                      background: "white",
                    }}
                  >
                    <Box
                      sx={{
                        p: "1rem",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        background: "#17173E",
                        width: "100%",
                      }}
                    >
                      {/* icon */}
                      <Box
                        sx={{
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "50%",
                          background: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <AccountBalanceWalletIcon
                          sx={{ color: "#703ddb", fontSize: "22px" }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "Ubuntu",
                          fontSize: { md: "1rem", xs: "16px" },
                          fontWeight: 700,
                          color: "white",
                          textAlign: "center",
                          ml: 1,
                        }}
                      >
                        Make a Minimum Deposit
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                        width: "100%",
                        px: 2,
                        py: 3,
                        minHeight: "300px",
                      }}
                    >
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
                        The next step is to make your deposit. This gives you
                        access to the whole trading system and allows you to
                        take the steps to start trading. The minimum deposit
                        with BTC Code Method is only Є250 to start off with.
                        This deposit will also be used as your initial
                        investment capital. This means you won’t need to deposit
                        more money to start trading as Bitcode Method will use
                        your deposit for your first trades.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      flexDirection: "column",
                      boxShadow: "0px 5px 20px 0px rgba(0, 0, 0, .3)",
                      background: "white",
                    }}
                  >
                    <Box
                      sx={{
                        p: "1rem",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        background: "#703DDB",
                        width: "100%",
                      }}
                    >
                      {/* icon */}
                      <Box
                        sx={{
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "50%",
                          background: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <MovingIcon
                          sx={{ color: "#703ddb", fontSize: "22px" }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "Ubuntu",
                          fontSize: { md: "1rem", xs: "16px" },
                          fontWeight: 700,
                          color: "white",
                          textAlign: "center",
                          ml: 1,
                        }}
                      >
                        Live Trading
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                        width: "100%",
                        px: 2,
                        py: 3,
                        minHeight: "300px",
                      }}
                    >
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
                        {`This is where you will see the user-friendliness of the
                        platform. The technology has been built to stand out
                        from the competitors' trading technologies through its
                        user interface. It is easy to use for traders just
                        starting out and complex enough for expert traders. This
                        is the best of both often not seen on other platforms.`}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Button
            onClick={() => setDialogueRegister(!DialogueRegister)}
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
                  transform:"scale(1.05)",
                },
                transition:"all 0.4s ease",
                mt: 10,
              }}
            >
              Register for Free
            </Button>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default GetStarted;
