import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material'

interface AppThemeProps {
  children: React.ReactNode
}

export const AppTheme: React.FC<AppThemeProps> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            padding: '12px 16px',
          },
        },
      },
    },
  })

  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}
