import { Box } from "@mui/material";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";

// Work Experience Accordions
const ContactPage = () => {
  return (
    <Box m="20px">
      {/* Header */}
      <Box>
        <Header
          title="Contact Form"
          subtitle="Please use this contact form to request a contact at a time that is suitable for you."
        />
      </Box>
      <Box>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default ContactPage;
