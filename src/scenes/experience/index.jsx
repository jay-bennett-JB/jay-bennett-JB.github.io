// Imports
import {
  AccordionDetails,
  Box,
  Typography,
  useTheme,
  List,
  ListItem,
} from "@mui/material";
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
        {/* Accordion 1 - FNZ */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
            >
              FNZ
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Working within the pension administration department on a client
              contract, my role involved daily operational tasks and performing
              administrative duties on Self-Invested Personal Pensions. I also
              contributed to the change management of processes where required
              as the client's needs required adaption of processes involving
              legislation and regulations from governing bodies. This also help
              provide me with skills and knowledge in how a platform provider
              works in addition to experience with pensions.
            </Typography>
            <List>
              <ListItem>Pension Adminastration</ListItem>
              <ListItem>Platform Operations and Change Management</ListItem>
              <ListItem>Member and Client Communication</ListItem>
              <ListItem>Data Protection and Governance</ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        {/* Accordion 2 - EE */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
            >
              EE
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
            >
              December 2021 to February 2023
            </Typography>
            <Typography>
              Working with customers to find the best deal was at the forefront
              of my roles. I helped manage customer accounts and diagnose any
              issues with the account or device. I also undertook additional
              training to gain the ability to use the phone customer line to
              enable me to complete transactions over the phone. This helped me
              meet key targets each month, especially during quiet store hours.
            </Typography>
            <List>
              <ListItem>Contract Management</ListItem>
              <ListItem>
                Finanical and Account advice and managment (pertaining to
                contracts and living expenses)
              </ListItem>
              <ListItem>
                Mobile and home device maintenance including diagnostics
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        {/* Accordion 3 Gardner Garages */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
            >
              Gardner Garages
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
            >
              July 2017 to March 2020
            </Typography>
            <List>
              <ListItem>Cash and Office Administration management</ListItem>
              <ListItem>
                Managing and training all staff in adherence with new policy and
                procedure
              </ListItem>
              <ListItem>
                Stock management - ordering and receieving deliveries
              </ListItem>
              <ListItem>Promoted to Assistant Manager in 2020</ListItem>
            </List>
            <Typography>
              A small petrol station business with multiple sites and a large
              turnover for in store products such as hot food, food made to
              order and general grocery items. <br />
              Oversaw a store refit under new management and kept the store open
              with little disruption to customers and staff as possible. Before
              opening I ensured the staff training was up to date, new products
              were displayed for customers and that all new services being
              offered were managed safely whilst minimizing disruption to
              customers.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* Accordion 4  - Tesco */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
            >
              Tesco
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
            >
              November 2012 to July 2017
            </Typography>
            <List>
              <ListItem>
                Managing stock levels and operation of petrol station
              </ListItem>
              <ListItem>Staff administration</ListItem>
              <ListItem>Safe and Legal administration</ListItem>
            </List>
            <Typography>
              Seconded to management role due to manager absence. Undertook all
              management responsibilities and duties, including overseeing
              colleagues and ensuring all legal entitlements were complied with.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default WorkExperience;
