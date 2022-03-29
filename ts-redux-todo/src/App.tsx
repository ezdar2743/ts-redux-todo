import { useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "./redux/hook";
import AllRouter from "./routes/Router";
import { Globalstyle } from "./theme/global";
import { darkTheme, lightTheme } from "./theme/theme";
const App = () => {
  const isDark = useAppSelector((state) => state.modeChage);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Globalstyle />
      <AllRouter />
    </ThemeProvider>
  );
};

export default App;
