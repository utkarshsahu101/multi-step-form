import { Container, Typography } from "@material-ui/core";
import React from "react";

const Success = () => {
  return (
    <Container maxWidth="xs">
      <Typography align="center" variant="h5" component="h1">
        Your Details Submitted Successfully
      </Typography>
    </Container>
  );
};

export default Success;
