import React, { createContext, useState } from 'react'
import Calendar from './components/EventCalendar';
import { createTheme, Switch, ThemeProvider } from '@mui/material';
import { FormControlLabel } from '@material-ui/core';

function App() {
  const [colorTheme, setColorTheme] = useState<"light" | "dark">("light");
  const theme = createTheme({
    palette: {
      mode: colorTheme,
    },
  });
  console.log(theme)

  return (
    <ThemeProvider theme={theme}>
      <div className="size-full bg-white">

        <FormControlLabel
          control={
            <Switch
              checked={colorTheme === "light" ? false : true}
              onChange={() => setColorTheme(colorTheme === "light" ? "dark" : "light")}
              name="loading"
              color="primary"
            />}
          label={colorTheme.toUpperCase()}
        />
        <Calendar />
      </div>
    </ThemeProvider>
  );
}

export default App;
