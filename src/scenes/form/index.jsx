//Import
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

//Inital Values for Form

const InitalValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  contactPreference: "",
};

//Phone Regex
const phoneRegExp =
  /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

//User Schema
const userSchema = yup.object.shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("Ivalid Email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone Number is required")
    .required("required"),
  contactPreference: yup.string().required("required"),
});

//Form
const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header
        title="Contact Form"
        subtitle="Please use form to send a contact request"
      />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          initialErrors,
          initialTouched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
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
                error={!!touched.firstName && !!ErrorSharp.firstName}
                helperText={touched.firstName && ErrorSharp.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last NAme"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!ErrorSharp.lastName}
                helperText={touched.lastName && ErrorSharp.lastName}
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
                error={!!touched.email && !!ErrorSharp.email}
                helperText={touched.email && ErrorSharp.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Preference"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contactPreference}
                name="firstName"
                error={
                  !!touched.contactPreference && !!ErrorSharp.contactPreference
                }
                helperText={
                  touched.contactPreference && ErrorSharp.contactPreference
                }
                sx={{ gridColumn: "span 2" }}
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
              >
                Submit Contact Details
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
