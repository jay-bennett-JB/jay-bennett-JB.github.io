//Imports
import {
  Tabs,
  Tab,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid2,
  useTheme,
} from "@mui/material";

import { useState } from "react";
import { tokens } from "../themes";

//Image Screenshot Details

const CreateScreenshots = [
  {
    title: "Home Page",
    description: "This is the homepage when first loading up the application",
    image: "/images/Home_Screen.png",
  },
  {
    title: "Create Task Page",
    description: "This is the create task page",
    image: "/images/Create_Task_Empty.png",
  },
  {
    title: "Create Task entry",
    description: "This is the create task entry",
    image: "/images/Create_Task_Filled.png",
  },
  {
    title: "Create Task Success",
    description: "This is a created task success",
    image: "/images/Create_Task_Success.png",
  },
  {
    title: "Home page + Task ",
    description: "This is the home page with the created task",
    image: "/images/Home_Screen_2.png",
  },
];

const UpdateScreenshots = [
  {
    title: "Update Task Page",
    description: "This is the update task page",
    image: "/images/Update_Task_Empty.png",
  },
  {
    title: "Update Task retrieved",
    description: "This is a task being retrieved",
    image: "/images/Update_Task_Retrieve.png",
  },
  {
    title: "Update Task entry",
    description: "This is a new task entry",
    image: "/images/Update_Task_Filled.png",
  },
  {
    title: "Update Task success ",
    description: "This is a successfull update",
    image: "/images/Update_Task_Success.png",
  },
  {
    title: "Home page + Updated Task ",
    description: "This is the home page with the updated task",
    image: "/images/Home_Screen_3.png",
  },
];

const DeleteScreenshots = [
  {
    title: "Delete Task Page",
    description: "This is the Delete task page",
    image: "/images/Delete_Task_Retrieve.png",
  },
  {
    title: "Delete Task success",
    description: "This is a task being deleted",
    image: "/images/Delete_Task_Success.png",
  },
  {
    title: "Home page + Deleted Task ",
    description: "This is the home page without the deleted task",
    image: "/images/Home_Screen_4.png",
  },
];

const tabs = [
  { label: "Create Task", data: CreateScreenshots },
  { label: "Update Task", data: UpdateScreenshots },
  { label: "Delete Task", data: DeleteScreenshots },
];

const CrudAppStoryBoard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box sx={{ width: "100%", p: 3, backgroundColor: colors.primary[400], minHeight: "75vh" }}>
      {/* Tab for switching between screen shots categories*/}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: colors.grey[700],
          mb: 4,
        }}
      >
        <Tabs
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
          centered
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              sx={{
                color: colors.greenAccent[500],
                "&.Mui-selected": { color: colors.blueAccent[500] },
              }}
            />
          ))}
        </Tabs>
      </Box>

      {/* ScreenShot Cards */}
      <Grid2
        container
        spacing={2}
        sx={{ mt: 2 }}
      >
        {tabs[activeTab].data.map((shot, index) => (
          <Grid2
            item
            xs={12}
            sm={6}
            md={4}
            xl={3}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              sx={{
                maxWidth: 345,
                width: "100%",
                backgroundColor: colors.primary[500],
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.02",
                  boxShadow: `0 4px 20px ${colors.blueAccent[500]}33`,
                },
              }}
            >
              <CardMedia
                component="img"
                height="auto"
                image={shot.image}
                alt={shot.title}
                sx={{
                  objectFit: "cover",
                  height: 200,
                  width: "100%",
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: colors.grey[100], mb: 1 }}
                >
                  {shot.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: colors.grey[400] }}
                >
                  {shot.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default CrudAppStoryBoard;
