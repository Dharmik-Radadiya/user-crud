import { Provider } from "react-redux";
import Root from "./pages/Root";
import { store } from "./store";
import theme from "./app/theme";
import { ThemeProvider } from "@emotion/react";

/**
 * Renders the main application component.
 * @return {JSX.Element} The rendered application component.
 */
const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
