import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import NavBar from "./components/NavBar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Add from "./components/Add";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const DarkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* navbar */}
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
