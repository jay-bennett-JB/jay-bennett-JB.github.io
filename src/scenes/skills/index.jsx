//Imports
import {
  AccordionDetails,
  Box,
  List,
  Typography,
  useTheme,
  ListItem,
} from "@mui/material";
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
        {/* Accordion for Software Skills */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
            >
              Software Skills
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <List> Programming </List>
              <ListItem> Python</ListItem>
              <ListItem> Java</ListItem>
              <ListItem> JavaScript</ListItem>
              <ListItem> HTML, CSS</ListItem>
              <ListItem> SQL</ListItem>
              <List>Data Handling</List>
              <ListItem>
                {" "}
                Experience with SQL and knowledge of data management principles{" "}
              </ListItem>
              <List>Web Development</List>
              <ListItem>
                {" "}
                Familarity with JavaScript and other front-end technologies{" "}
              </ListItem>
              <List>Networking and Systems</List>
              <ListItem>
                {" "}
                Understanding of network systems and configurations{" "}
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        {/* Accordion for Service and Project Management Skills */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
            >
              Service and Project Management Skills
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List> Change management </List>
            <ListItem>
              {" "}
              Supported Operations during financial legislation changes, adapted
              processes on legacy systems as required{" "}
            </ListItem>
            <List> Process Improvement </List>
            <ListItem>
              {" "}
              Diagnosed and resolved system inefficiencies in previous roles
            </ListItem>
            <List>Client Interactions</List>
            <ListItem>
              {" "}
              Managed client requests under tight deadlines, ensuring timely
              delivery solutions
            </ListItem>
            <List> Team Collobrations </List>
            <ListItem>
              Worked effectively within teams to meet organizational goals
            </ListItem>
            <List>Organization and Planning</List>
            <ListItem>
              {" "}
              Maintained schedules and adhered to deadlines while balancing
              multiple responsibilities.{" "}
            </ListItem>
          </AccordionDetails>
        </Accordion>
        {/* General Transferrable Skills */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
            >
              General Transferrable Skills
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>Problem-Solving</List>
            <ListItem>
              Quickly dapted to outdated systems, implementing workarounds to
              meet client needs.{" "}
            </ListItem>
            <List>Communication</List>
            <ListItem>
              Experience communicating with clients, colleagues and stakeholders
              effectively
            </ListItem>
            <List>Adaptability</List>
            <ListItem>
              Comfortable learning new technologies and adapting to changing
              environments.
            </ListItem>
            <List>Attention to detail</List>
            <ListItem>
              Proven accuracy in data handling and administrative tasks.
            </ListItem>
            <List>Time Management</List>
            <ListItem>Managed Workloads efficiently to meet deadlines</ListItem>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Skills;
