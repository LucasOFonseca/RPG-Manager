import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

interface AppThemeProps {
  children: React.ReactNode;
}

export const AppTheme: React.FC<AppThemeProps> = ({ children }) => {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            padding: "12px 16px",
          },
        },
      },
    },
  });

  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledEngineProvider>
    </>
  );
};
