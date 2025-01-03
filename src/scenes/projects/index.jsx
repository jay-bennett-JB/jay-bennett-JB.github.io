import { Box, useTheme } from "@mui/material";
import { tokens } from "../../themes";
import Header from "../../components/Header";

const ProjectsBox = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* Header */}
      <Box>
        <Header
          title="Projects Page"
          subtitle="Projects to appear here"
        />
      </Box>
    </Box>
  );
};

export default ProjectsBox;
