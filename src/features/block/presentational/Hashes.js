import React from "react";
import PropTypes from "prop-types";
import Card from "../../ui/Card";
import {Table, TableBody, TableRow, TableCell} from "@material-ui/core";

const HASHES_TITLE = "Hashes";

const Hashes = ({hashes: {hash, previousBlockHash, nextBlockHash}}) => (
  <Card title={HASHES_TITLE}>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Hash</TableCell>
          <TableCell>{hash}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Previous Block</TableCell>
          <TableCell>{previousBlockHash}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Next Block</TableCell>
          <TableCell>{nextBlockHash}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Card>
);

Hashes.propTypes = {
  hashes: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    previousBlockHash: PropTypes.string.isRequired,
    nextBlockHash: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hashes;
