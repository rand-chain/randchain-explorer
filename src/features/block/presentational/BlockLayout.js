import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const BlockLayout = ({blockHeight, summary, hashes}) => (
  <>
    <Typography variant="h4" gutterBottom>
      Block #{blockHeight}
    </Typography>

    <Grid container spacing={3}>
      <Grid item xs={12}>
        {hashes}
      </Grid>
      <Grid item xs={12}>
        {summary}
      </Grid>
    </Grid>
  </>
);

BlockLayout.propTypes = {
  blockHeight: PropTypes.number.isRequired,
  summary: PropTypes.node.isRequired,
  hashes: PropTypes.node.isRequired,
};

export default BlockLayout;
