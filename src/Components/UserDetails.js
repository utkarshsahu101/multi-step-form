import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

const UserDetails = ({ nextStep, handleChange, values }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Container maxWidth="xs">
      <Typography align="center" variant="h4" component="h1">
        Sign Up
      </Typography>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              placeholder="Email Address"
              label="Email Address"
              onChange={handleChange("email")}
              defaultValue={values.email}
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <br />
          <Grid item xs={12}>
            <TextField
              placeholder="Username"
              label="Username"
              onChange={handleChange("username")}
              defaultValue={values.username}
              fullWidth
              autoComplete="username"
            />
          </Grid>
          <br />
          <Grid item xs={12}>
            <TextField
              placeholder="Password"
              label="Password"
              onChange={handleChange("password")}
              defaultValue={values.password}
              fullWidth
              autoComplete="password"
              type="password"
            />
          </Grid>
        </Grid>
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={next}
          fullWidth
          type="submit"
        >
          Next
        </Button>
      </form>
    </Container>
  );
};

export default UserDetails;
