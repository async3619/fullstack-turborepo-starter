import { createTheme } from '@mui/material'

import { SuiteVariable } from '@/styles/fonts'

export const defaultTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: [SuiteVariable.style.fontFamily, 'Roboto', 'sans-serif'].join(
      ', ',
    ),
  },
})
