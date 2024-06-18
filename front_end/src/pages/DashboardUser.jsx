import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Collapse, Box } from '@mui/material';
import CollapsibleRow from '../components/common/dashboard-user-common/CollapsibleRow';

function createData(name, date, price, details) {
  return {
    name,
    date,
    price,
    details,
    isExpanded: false,
  };
}

export default function DashboardUser() {
  const [rows, setRows] = React.useState([
    createData('Reservation 1', '2023-04-01', '$15.00', 'Details of Reservation 1 here...'),
    createData('Reservation 2', '2023-04-02', '$20.00', 'Details of Reservation 2 here...')
  ]);

  const handleExpandClick = (row) => {
    const newRows = rows.map(r => {
      if (r === row) {
        return { ...r, isExpanded: !r.isExpanded };
      }
      return r;
    });
    setRows(newRows);
  };

  const handleDelete = (row) => {
    const newRows = rows.filter(r => r !== row);
    setRows(newRows);
  };

  return (
    <div style={{ margin: 20 }}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Typography variant="h6" gutterBottom>Manage Your Reservations</Typography>
      <TableContainer component={Paper} elevation={3}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Reservation</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Expand</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <CollapsibleRow
                key={row.name}
                row={row}
                handleExpandClick={handleExpandClick}
                handleDelete={handleDelete}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
