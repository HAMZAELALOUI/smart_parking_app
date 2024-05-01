import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Collapse, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { visuallyHidden } from '@mui/utils';

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
              <React.Fragment key={row.name}>
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
      <Box sx={{
        margin: 1,
        padding: 2,
        border: '1px solid #ccc',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        backgroundColor: 'white',
        transition: 'box-shadow 0.3s ease-in-out'
      }}>
        <Typography variant="h6" gutterBottom component="div" sx={{
          borderBottom: '2px solid #4a148c',
          padding: '12px 16px',
          backgroundColor: '#f3e5f5',
          borderRadius: '7px 7px 0 0',
          fontWeight: 'bold',
          color: '#4a148c'
        }}>
          Detailed Reservation Information
        </Typography>
        <Box sx={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Typography variant="subtitle1" sx={{ color: '#333' }}>
            Date of Reservation: <strong>{row.date}</strong>
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#333' }}>
            Total Price: <strong>{row.price}</strong>
          </Typography>
          <Typography variant="body1" sx={{ color: '#666' }}>
            {row.details}
          </Typography>
        </Box>
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
