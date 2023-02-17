import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ColorBox, tableStyle, rowStyle, cellStyle, cellColorStyle} from './Table.styled';
import { formatNumber } from 'utils/serviceFunctions';


export function BasicTable(tableData) {
  // console.log('Table props', tableData.tableData);
  return (
    <TableContainer component={Paper} style={tableStyle}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableBody>
          {tableData.tableData.map(row => (
            <TableRow  style={rowStyle}
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={cellColorStyle}>
                <ColorBox backgroundColor={row.color}></ColorBox>
              </TableCell>
              <TableCell style={cellStyle} align="left">{row.name}</TableCell>
              <TableCell style={cellStyle} align="right">{formatNumber(row.total)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
