import "./App.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import ManualModePage from "./pages/manual-mode/ui/manual-mode-page.tsx";

const theme = createTheme({});
function App() {
  return (
    <MantineProvider theme={theme}>
      <ManualModePage />
    </MantineProvider>
  );
}

export default App;
