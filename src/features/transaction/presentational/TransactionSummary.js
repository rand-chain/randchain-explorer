import React from "react";
import PropTypes from "prop-types";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import Card from "../../ui/Card";

const TITLE = "Summary";

const TransactionSummary = ({summary: {size, weight, receivingTime}}) => (
  <Card title={TITLE}>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Size</TableCell>
          <TableCell>{size}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Weight</TableCell>
          <TableCell>{weight}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Receiving time</TableCell>
          <TableCell>{receivingTime}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Card>
);

TransactionSummary.propTypes = {
  summary: PropTypes.shape({
    size: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
    receivingTime: PropTypes.string.isRequired,
  })
};

export default TransactionSummary;
