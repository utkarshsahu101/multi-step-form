import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

const PersonalDetails = ({ nextStep, prevStep, handleChange, values }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  const prev = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <Container maxWidth="xs">
      <Typography align="center" variant="h4" component="h1">
        Sign Up
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Firstname"
              placeholder="Firstname"
              value={values.firstName}
              onChange={handleChange("firstName")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Lastname"
              placeholder="Lastname"
              value={values.lastName}
              onChange={handleChange("lastName")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Country"
              placeholder="Country"
              value={values.country}
              onChange={handleChange("country")}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={prev}
              type="submit"
              fullWidth
            >
              Previous
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={next}
              type="submit"
              fullWidth
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default PersonalDetails;
