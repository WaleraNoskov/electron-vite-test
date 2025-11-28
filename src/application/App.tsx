import "./App.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import ManualModePage from "../pages/manual-mode/ui/manual-mode-page.tsx";
import { Provider } from "react-redux";
import { store } from "./store.ts";

const theme = createTheme({});

function App() {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <ManualModePage />
      </MantineProvider>
    </Provider>
  );
}

export default App;
