//Import
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useForm } from "@formspree/react";
import ContactPreferences from "./ContactPreferencesBox";

//Inital Values for Form
const formspreeID = process.env.REACT_APP_FORMSPREE_ID;

const InitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  contactPreference: {
    email: false,
    call: false,
    other: false,
  },
  timePreference: "",
  message: "",
};

//Phone Regex
const phoneRegExp =
  /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

//User Schema
const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Ivalid Email").required("required"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone Number is required")
    .required("Phone is required"),
  contactPreference: yup.string().required("required"),
});

//Form
const ContactForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [state, handleSubmit] = useForm(formspreeID);
  if (state.succeeded) {
    // Change to maatch Success Page
    return <Typography>Thanks for Joining</Typography>;
  }

  return (
    <Box m="20px">
      {/* Contact Information Box */}
      <Box m="20px">
        <Typography variant="h6">Contact Information</Typography>
        <Typography> Email: Jaydbennett92@gmail.com </Typography>
      </Box>
      <Formik
        initialValues={InitialValues}
        validationSchema={userSchema}
        onSubmit={(values, actions) => {
          console.log("formik on submit test", values);
          handleSubmit(values).then(() => {
            actions.setSubmitting(false);
          });
          //preventing default form submission
          actions.setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleBlur, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& .div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phoneNumber}
                name="phoneNum"
                error={!!touched.phoneNumber && !!errors.phoneNumber}
                helperText={touched.phoneNumber && errors.phoneNumber}
                sx={{ gridColumn: "span 4" }}
              />
              {/* Contact Preference CheckBoxes */}
              <ContactPreferences
                contactPreference={values.contactPreference}
                handleChange={handleChange}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="end"
              mt="20px"
            >
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                disabled={state.submitting}
              >
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
