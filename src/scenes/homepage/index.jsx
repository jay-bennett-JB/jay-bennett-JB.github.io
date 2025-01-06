//Imports
import { AccordionDetails, Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../themes";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//HomePage Setup
const HomePage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* Header */}
      <Box>
        <Header
          title="Homepage"
          subtitle="Welcome to my home page"
        />
        {/* Accordion 1 - About Me  */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
            >
              About Me
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>My name is Jay, and I am a 32-year-old professional based in the United Kingdom, currently pursuing a Bachelor’s degree in Computing and IT. 
                        My ultimate goal is to become a Software Engineer, contributing to innovative technologies and supporting organizational growth.
                        With over 10 years of experience in customer service, administration, service management, and platform operations, I bring a unique blend of technical knowledge and practical skills. My recent role at a financial platform provider strengthened my expertise in data management, financial regulations, and change management, while my academic studies have provided a solid foundation in programming (Python, Java, HTML, CSS), network systems, and project management.
                        To address gaps in practical experience, I am actively engaging in self-directed projects and studies to refine my skills and apply theoretical knowledge in real-world scenarios. 
                        My problem-solving ability, adaptability, and hands-on experience in pension administration and contract management make me well-suited for IT roles and eager to tackle new challenges. 
                        </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
            >
              Future Plans
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Future Plans Insert</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
            >
              Hobbies
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Hobbies Insert</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default HomePage;
