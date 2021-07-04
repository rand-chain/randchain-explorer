import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import TablePagination from "../ui/TablePagination";

const HEAD_CELLS = ["Hash", "Height", "Randomness"];
const TITLE = "Blocks";

const BlocksLayout = ({blocks, onBlockClick}) => (
  <>
    <Typography variant="h4" gutterBottom>
      {TITLE}
    </Typography>

    <TablePagination
      headRow={HEAD_CELLS}
      bodyRows={blocks}
      onRowClick={onBlockClick}
    />
  </>
);

BlocksLayout.propTypes = {
  blocks: PropTypes.arrayOf(
    PropTypes.shape({
      hash: PropTypes.string.isRequired,
      height: PropTypes.number.isRequired,
      randomness: PropTypes.string.isRequired,
    }).isRequired
  ),
  onBlockClick: PropTypes.func.isRequired
};

export default BlocksLayout;
