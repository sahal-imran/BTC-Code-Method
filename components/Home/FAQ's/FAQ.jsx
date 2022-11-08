import React, { useContext } from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { AppContext } from "../../../pages/layout";


function FAQ() {
  const {
    DialogueRegister,
    setDialogueRegister,
    DialogueLogin,
    setDialogueLogin,
  } = useContext(AppContext);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "white",
          py: { md: 4, xs: 4 },
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
            Frequently Asked Questions
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
            {`We have answered our users' most popular questions as reported by our customer service department below:`}
          </Typography>

          {/* FAQ's */}
          <Box sx={{ flexGrow: 1, width: "100%", mt: 4 }}>
            <Grid
              container
              columnSpacing={{ md: 4, xs: 0 }}
              rowSpacing={3}
            >
              {faqs?.map((item, index) => {
                return (
                  <Grid key={index} item xs={12} md={6}>
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <Accordion sx={{ boxShadow: "none", width: "100%" }}>
                        <AccordionSummary
                          expandIcon={
                            <IconButton
                              sx={{
                                background: "white",
                                "&:hover": {
                                  background: "white",
                                },
                              }}
                              aria-label="delete"
                            >
                              <ExpandMoreIcon />
                            </IconButton>
                          }
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                          sx={{
                            width: "100%",
                            background: "#570777",
                            height: "70px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Ubuntu",
                              fontSize: { md: "1.22rem", xs: "1rem" },
                              fontWeight: 500,
                              color: "white",
                              textAlign: "start",
                            }}
                          >
                            {item.question}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>{item.ans}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  </Grid>
                );
              })}
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
              mt: 6,
            }}
          >
            Register for Free
          </Button>
        </Container>
      </Box>
    </>
  );
}

export default FAQ;

const faqs = [
  {
    question: "Is there an BTC Code Method iOS app?",
    ans: "Currently, there is no Mobile app on iOS or Android. It is available on the trading website and can be accessed via the web on a mobile or laptop.",
  },
  {
    question: "What is BTC Code Method?",
    ans: "Bitcode Method is a cryptocurrency trading platform. It has a cutting edge interface that is easy to use and navigate. This system comes with an automated trader than can help you trade more effectively.",
  },
  {
    question: "How Much Does BTC Code Method Cost?",
    ans: "Registering an account with Bitcode Method does not cost anything. All you need to do is make sure you make a minimum deposit of 250 EUR to access the live trading room.",
  },
  {
    question: "How Do I Know If BTC Code Method Is Legit?",
    ans: "Bitcode Method has collaborated with CySEC-licensed brokers to ensure safe and legal trading for your benefit.",
  },
];
