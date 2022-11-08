import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function Footer() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          background: "#570777",
          py: { md: 2, xs: 2 },
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
          <Image
            src={"/assets/en.png"}
            alt="en"
            width={30}
            height={18}
            objectFit="contain"
          />
          <Typography
            sx={{
              fontFamily: "Ubuntu",
              fontSize: { md: "1rem", xs: "0.8rem" },
              fontWeight: 600,
              lineHeight: "1.4rem",
              color: "white",
              textAlign: "center",
              mt: 2,
            }}
          >
            {`Important Risk Note: Trading can generate notable benefits; however, it also involves a risk of partial/full funds loss, and should be considered by initial investors. Around 70 percent of the investors will lose money. Carefully read our terms & conditions and disclaimer page before investing. Customers must be cognizant of their individual capital gain tax liability in their country of residence. It is against the law to solicit United States persons to buy and sell commodity options, even if they are called ‘prediction’ contracts unless they are listed for trading and traded on a CFTC-registered exchange or unless legally exempt.`}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 3,
              mb:{md:0,xs:8}
            }}
          >
            <Link
              sx={{
                textDecorationColor: "white",
                color: "white",
                fontFamily: "Ubuntu",
                fontSize: { md: "1.1rem", xs: "0.8rem" },
                fontWeight: 600,
                lineHeight: "1.4rem",
              }}
              href="https://bitcodemethod.com/privacy-policy/"
            >
              Privacy Policy
            </Link>
            <Link
              sx={{
                textDecorationColor: "white",
                color: "white",
                fontFamily: "Ubuntu",
                fontSize: { md: "1.1rem", xs: "0.8rem" },
                fontWeight: 600,
                lineHeight: "1.4rem",
                ml: 2,
              }}
              href="https://bitcodemethod.com/terms-conditions/"
            >
              Terms & Conditions
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
