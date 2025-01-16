//Imports
import { FormControl, FormControlLabel, Checkbox } from "@mui/material";

//This will be called in ContactForm to show text box and value.
const ContactPreferences = ({ contactPreference, handleChange }) => {
  return (
    <FormControl component="fieldset">
      <FormControlLabel
        control={
          <Checkbox
            name="emailPref"
            checked={contactPreference.emailPref}
            onChange={handleChange}
          />
        }
        label="Email"
      />
      <FormControlLabel
        control={
          <Checkbox
            name="call"
            checked={contactPreference.callPref}
            onChange={handleChange}
          />
        }
        label="Call"
      />
      <FormControlLabel
        control={
          <Checkbox
            name="other"
            checked={contactPreference.otherPref}
            onChange={handleChange}
          />
        }
        label="Other"
      />
    </FormControl>
  );
};

export default ContactPreferences;
