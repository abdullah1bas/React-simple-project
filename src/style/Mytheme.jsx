const { teal, grey } = require("@mui/material/colors");

// da b2a byt7t fe al mode da byt8yr 3la tol 3la 7asb ma al user 3amel dark or light
// const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
//    const theme = useMemo(() => createTheme({
//     palette: {
//       mode: prefersDarkMode ? 'dark' : 'light',
//     },
//   }),
// [prefersDarkMode],);
const getDesignTokens = (mode) => ({
  palette: {
    // hena lazem ykon asmha mode 3shan ycreate al theme
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          abdullah: {
            main: "#64748B",
          },
          favColor: {
            main: grey[300],
          },
        }
      : {
          // palette values for dark mode
          abdullah: {
            main: "teal",
          },
          favColor: {
            main: grey[800],
          },
        }),
  },
});

export default getDesignTokens;