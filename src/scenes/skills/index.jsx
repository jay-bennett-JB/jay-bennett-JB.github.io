//Imports
import { AccordionDetails, Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../themes";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//Skills Setup
const Skills = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* Header */}
      <Box>
        <Header
          title="Skills"
          subtitle="Please find a complete list of skills under appropriate sections"
        />
        {/* Accordion for Skills */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
            >
              Software Skills
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Software Skills Insert</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
            >
              Service and Project Management Skills
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>S and P M Insert</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
            >
              Database Skiles
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Hobbies Insert</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
            >
              General Transferrable Skills
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>GT Insert</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Skills;
