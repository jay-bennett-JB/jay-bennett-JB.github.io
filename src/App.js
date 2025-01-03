import { ColorModeContext, useMode } from "./themes";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/topbar";
import Sidebar from "./scenes/global/sidebar";

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
              {/* <Route
                path="/"
                element={<HomePage />}
              /> */}
              {/* <Route
                path="/"
                element={<Projects />}
              />  */}
              {/* <Route
                path="/"
                element={<Skills />}
              />  */}
              {/* <Route
                path="/"
                element={<Work Experience />}
              />  */}
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
