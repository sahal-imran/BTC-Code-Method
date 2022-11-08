import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function SignUpInputs() {
  const [Country, setCountry] = useState("AU");

  async function lookupCountry({ latitude, longitude }) {
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;

    const locationData = await fetch(URL).then((res) => res.json());

    const [{ address_components }] = locationData.results.filter(({ types }) =>
      types.includes("country")
    );
    const [{ short_name }] = address_components;
    console.log(short_name);

    return short_name;
  }

  async function handleNavigator(pos) {
    const { latitude, longitude } = pos.coords;
    const userCountryCode = await lookupCountry({ latitude, longitude });
    setCountry(userCountryCode);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleNavigator, () => {
      console.warn("permission was rejected");
      setCountry("PK");
    });
  }, []);

  // Validations
  const [Val, setVal] = useState(false);
  const [Val_Name, setVal_Name] = useState(false);
  const [Val_Surname, setVal_Surname] = useState(false);
  const [Val_Email, setVal_Email] = useState(false);
  const [Val_phno, setVal_phno] = useState(false);

  const [Name, setName] = useState();
  const [Surname, setSurname] = useState();
  const [Email, setEmail] = useState();
  const [PhoneNo, setPhoneNo] = useState();

  const Click_Register = () => {
    // if (!Name || !Surname || !Email || !PhoneNo) {
    //   setVal(true);
    //   return;
    // }
    if (!Name || Name === "") {
      setVal_Name(true);
      return;
    }
    if (!Surname || Surname === "") {
      setVal_Surname(true);
      return;
    }
    if (!Email || Email === "") {
      setVal_Email(true);
      return;
    }
    if (!PhoneNo || PhoneNo === "") {
      setVal_phno(true);
      return;
    }
    handleClick();
  };

  const OnFocusInput = () => {
    setVal_Name(false);
    setVal_Surname(false);
    setVal_Email(false);
    setVal_phno(false);
  };

  // Snackbar
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

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
            sx={
              Val_Name
                ? {
                    width: "100%",
                    height: "40px",
                    border: "2px solid red",
                    borderRadius: "0.5rem",
                  }
                : {
                    width: "100%",
                    height: "40px",
                    border: "2px solid #333333",
                    borderRadius: "0.5rem",
                  }
            }
          >
            <input
              onFocus={OnFocusInput}
              value={Name}
              onChange={(e) => setName(e.target.value)}
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
            Surname:
          </Typography>
          <Box
            sx={
              Val_Surname
                ? {
                    width: "100%",
                    height: "40px",
                    border: "2px solid red",
                    borderRadius: "0.5rem",
                  }
                : {
                    width: "100%",
                    height: "40px",
                    border: "2px solid #333333",
                    borderRadius: "0.5rem",
                  }
            }
          >
            <input
              onFocus={OnFocusInput}
              value={Surname}
              onChange={(e) => setSurname(e.target.value)}
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
            Email:
          </Typography>
          <Box
            sx={
              Val_Email
                ? {
                    width: "100%",
                    height: "40px",
                    border: "2px solid red",
                    borderRadius: "0.5rem",
                  }
                : {
                    width: "100%",
                    height: "40px",
                    border: "2px solid #333333",
                    borderRadius: "0.5rem",
                  }
            }
          >
            <input
              onFocus={OnFocusInput}
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
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
            Phone:
          </Typography>
          <Box
            sx={
              Val_phno
                ? {
                    width: "100%",
                    height: "40px",
                    border: "2px solid red",
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
                  }
                : {
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
                  }
            }
          >
            <PhoneInput
              international={true}
              // country={Country}
              countryCallingCodeEditable={false}
              defaultCountry={Country}
              value={PhoneNo}
              onChange={setPhoneNo}
            />
          </Box>
        </Box>

        <Button
          onClick={Click_Register}
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
            mt: 1.5,
          }}
        >
          Register for Free
        </Button>
      </Box>
      <Snackbar
        color="#703ddb"
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Thank you!"
        action={action}
      />
    </>
  );
}

export default SignUpInputs;
