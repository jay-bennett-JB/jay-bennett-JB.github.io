import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../themes";

// Work Experience Accordions
const SuccessPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Typography
        variant="h3"
        color={colors.greenAccent[500]}
        fontWeight="bold"
        sx={{ m: "10px 0 0 0 " }}
      >
        Thank you for your request. I will process your requesst as soon as
        possible.
      </Typography>
    </Box>
  );
};

export default SuccessPage;