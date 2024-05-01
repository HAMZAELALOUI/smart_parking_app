import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';

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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Reservation</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Details</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <React.Fragment key={row.name}>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => handleExpandClick(row)}
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
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={row.isExpanded} timeout="auto" unmountOnExit>
                      <Box margin={1}>
                        <Typography variant="h6" gutterBottom component="div">
                          Reservation Details
                        </Typography>
                        <Typography variant="body2">{row.details}</Typography>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
