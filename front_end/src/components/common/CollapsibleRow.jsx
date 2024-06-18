import React from 'react';
import { TableRow, TableCell, IconButton, Collapse, Box, Typography, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import ReservationDetails from './UserReservationDetails';

const CollapsibleRow = ({ row, handleExpandClick, handleDelete }) => (
  <React.Fragment>
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell component="th" scope="row">
        {row.date}
      </TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.price}</TableCell>
      <TableCell>
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => handleExpandClick(row)}
          aria-expanded={row.isExpanded}
          aria-controls={`panel-${row.name}-content`}
        >
          <ExpandMoreIcon />
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton aria-label="delete" onClick={() => handleDelete(row)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
        <Collapse in={row.isExpanded} timeout="auto" unmountOnExit>
          <ReservationDetails row={row} />
        </Collapse>
      </TableCell>
    </TableRow>
  </React.Fragment>
);

export default CollapsibleRow;
