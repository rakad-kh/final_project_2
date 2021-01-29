import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Row from '../Row';

import { createData } from './utils';

const rows = [createData('12:00', 'haifa', 4), createData('14:00', 'haifa', 7)];

const cellStyle = {
  font: 'normal normal normal 16px/24px Rubik',
  color: '#272932',
  opacity: '1',
};

const CollapsibleTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />

            <TableCell align="left" style={cellStyle}>
              רשומים
            </TableCell>
            <TableCell align="center" style={cellStyle}>
              מקום
            </TableCell>
            <TableCell align="right" style={cellStyle}>
              שעה
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.hour} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CollapsibleTable;
