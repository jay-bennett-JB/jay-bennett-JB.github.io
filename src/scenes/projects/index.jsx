//Imports
import { Box } from "@mui/material";
import Header from "../../components/Header";
import CrudAppStoryBoard from "../../components/CrudAppPage";

//Projects Setup
const ProjectsBox = () => {
  return (
    <Box m="20px">
      {/* Header */}
      <Box>
        <Header
          title="Projects Page"
          subtitle="Please see the projects below"
        />
      </Box>
      <Box>
        <CrudAppStoryBoard />
      </Box>
    </Box>
  );
};

export default ProjectsBox;
