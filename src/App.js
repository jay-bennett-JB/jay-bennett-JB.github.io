import { ColorModeContext, useMode } from "./themes";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import HomePage from "./scenes/homepage";
import Topbar from "./scenes/global/topbar";
import Sidebar from "./scenes/global/sidebar";
import ProjectsBox from "./scenes/projects";
import Skills from "./scenes/skills";
import WorkExperience from "./scenes/experience";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route
                path="/homepage"
                element={<HomePage />}
              />
              <Route
                path="/projects"
                element={<ProjectsBox />}
              />
              <Route
                path="/skills"
                element={<Skills />}
              />
              <Route
                path="/"
                element={<WorkExperience />}
              />
              {/* <Route
                path="/"
                element={<Contact Form />}
              />  */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
