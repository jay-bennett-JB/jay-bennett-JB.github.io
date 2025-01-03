// Imports
import { AccordionDetails, Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../themes";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Work Experience Accordions
const WorkExperience = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* Header */}
      <Box>
        <Header
          title="Work Experience"
          subtitle="Please find a list of my work experience below"
        />
        {/* Accordion 1 - About Me  */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
            >
              FNZ
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>FNZ WE Insert</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
            >
              EE
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>EE WE Insert</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
            >
              Tesco
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Tesco Insert</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default WorkExperience;
