import { ColorModeContext, useMode } from "./themes";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import HomePage from "./scenes/homepage";
import Topbar from "./scenes/global/topbar";
import Sidebar from "./scenes/global/sidebar";
import ProjectsBox from "./scenes/projects";
import Skills from "./scenes/skills";
import WorkExperience from "./scenes/experience";
import ContactForm from "./scenes/form";

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
            <Router>
              <Routes>
                <Route
                  exact
                  path="/"
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
                  path="/experience"
                  element={<WorkExperience />}
                />
                <Route
                  path="/form"
                  element={<ContactForm />}
                />
              </Routes>
            </Router>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
