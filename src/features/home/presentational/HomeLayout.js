import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const TITLE = "Summary";

const HomeLayout = ({graph, blocks}) => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        {TITLE}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {graph}
        </Grid>
        <Grid item xs={12} sm={12}>
          {blocks}
        </Grid>
      </Grid>
    </>
  );
};
HomeLayout.propTypes = {
  graph: PropTypes.element.isRequired,
  blocks: PropTypes.element.isRequired
};

export default HomeLayout;
