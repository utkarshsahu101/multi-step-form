import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";

const Confirmation = ({ nextStep, prevStep, values }) => {
  const { email, username, firstName, lastName, country } = values;

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
        User Details
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Email" secondary={email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Username" secondary={username} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Firstname" secondary={firstName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Lastname" secondary={lastName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Country" secondary={country} />
        </ListItem>
      </List>
      <br />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
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
        <Grid item xs={12} sm={8}>
          <Button
            variant="contained"
            color="primary"
            onClick={next}
            type="submit"
            fullWidth
          >
            Confirm & Continue
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Confirmation;
