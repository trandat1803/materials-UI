import React from "react";
import Typography from '@mui/material/Typography';
import { Box, Link } from '@mui/material';
import SearchAppBar from "./components/SearchAppBar";
import OutlinedCard from "./components/OutlinedCard";
import jobs from "./jobs.json";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.coderschool.vn">
        CoderSchool
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  return (
    <>
    <SearchAppBar/>
    {jobs.slice(0, 4).map(job => (
      <OutlinedCard book={job}/>
    ))}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          My new React app
        </Typography>
        <Copyright />
      </Box>
    </>
  );
}

export default App;
