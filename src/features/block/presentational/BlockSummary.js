import React from "react";
import PropTypes from "prop-types";
import Card from "../../ui/Card";
import {Table, TableBody, TableRow, TableCell} from "@material-ui/core";

const SUMMARY_TITLE = "Summary";

const BlockSummary = ({
  summary: {
    bits,
    size,
    height,
  }
}) => (
  <Card title={SUMMARY_TITLE}>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Height</TableCell>
          <TableCell>{height}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bits</TableCell>
          <TableCell>{bits}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Size</TableCell>
          <TableCell>{size}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Card>
);

BlockSummary.propTypes = {
  summary: PropTypes.shape({
    bits: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

export default BlockSummary;
