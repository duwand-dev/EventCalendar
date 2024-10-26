//external imports
import React, { createContext, useState } from 'react'
import { createTheme, Switch, ThemeProvider } from '@mui/material';
import { FormControlLabel } from '@material-ui/core';
//interal imports
import Calendar from './components/EventCalendar';
import { Dark, Light, ThemeType } from './types/type';

function App() {
  const [colorTheme, setColorTheme] = useState<ThemeType>(Light);
  const theme = createTheme({
    palette: {
      mode: colorTheme,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="size-full bg-white">
        <FormControlLabel
          control={
            <Switch
              checked={colorTheme === Light ? false : true}
              onChange={() => setColorTheme(colorTheme === Light ? Dark : Light)}
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
