import { Button, styled, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

function App() {
  //can you used styled to one style to all components
  //so you are taking Button component and adding these styles
  //Button comes from the import appove
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Settings
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="success"
        size="small"
      >
        Add new post
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        It uses h1 style but it is a p tag
      </Typography>
      <BlueButton>My button</BlueButton>
      <BlueButton>Another button</BlueButton>
    </div>
  );
}

export default App;
