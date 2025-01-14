//Import
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

//Inital Values for Form

const InitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  contactPreference: "",
};

//Phone Regex
const phoneRegExp =
  /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

// FormSpree URL
const FORMSPREE_URL = "https://formspree.io/f/myzzojdv";

//User Schema
const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Ivalid Email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone Number is required")
    .required("Phone is required"),
  contactPreference: yup.string().required("required"),
});

//Form
const ContactForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log("Submitting Values: ", values);
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        // Show success on submit
        alert("Message was sent successfully");
        resetForm();
      } else {
        //Handle Errors
        alert("Something went wrong, please try again!!");
      }
    } catch (error) {
      console.error("Error: ", error);
      alert("Error submitting form.");
    } finally {
      setSubmitting(false);
    }
  };

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
          handleFormSubmit(values, actions);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form>
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
                label="Contact Preference"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contactPreference}
                name="contactPreference"
                error={
                  !!touched.contactPreference && !!errors.contactPreference
                }
                helperText={
                  touched.contactPreference && errors.contactPreference
                }
                sx={{ gridColumn: "span 4" }}
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
                disabled={isSubmitting}
                onClick={() => console.log("Button has been clicked")}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default ContactForm;
