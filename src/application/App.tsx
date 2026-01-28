import "./App.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import ManualModePage from "../pages/manualMode/ui/manualModePage.tsx";
import { ModalsProvider } from "@mantine/modals";

const theme = createTheme({});

function App() {
  return (
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <ModalsProvider>
          <ManualModePage />
        </ModalsProvider>
      </MantineProvider>
    </Provider>
  );
}

export default App;
