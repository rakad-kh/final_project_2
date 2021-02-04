import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import AppointmentRow from '../AppointmentRow';

const cellStyle = {
  font: 'normal normal normal 16px/24px Rubik',
  color: '#272932',
  opacity: '1 ',
  paddingBottom: 0,
  paddingTop: 0,
  textAlign: 'center',
};

const rowStyle = {
  font: 'normal normal normal 16px/24px Rubik',
  color: '#272932',
  opacity: '1 ',
};

const AppointmentsTable = ({ rows, onDeleteAppFromIndex }) => {
  const makeOnDelete = (index) => () => {
    onDeleteAppFromIndex(index);
  };

  return (
    <TableContainer>
      <Table
        style={{
          borderCollapse: 'separate',
          borderSpacing: '0px 4px ',
          width: '100%',
          height: '48px',
        }}
      >
        <TableHead align="right">
          <TableRow style={rowStyle}>
            <TableCell style={cellStyle} width="10%"></TableCell>
            <TableCell style={cellStyle} width="30%">
              כמות משבצות
            </TableCell>
            <TableCell style={cellStyle} width="30%">
              שעה
            </TableCell>
            <TableCell style={cellStyle} width="30%">
              תאריך
            </TableCell>
            <TableCell style={cellStyle} width="30%">
              בית חולים
            </TableCell>
            <TableCell style={cellStyle} width="30%">
              סוג תרומה
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <AppointmentRow
              key={index}
              row={row}
              onDelete={makeOnDelete(index)}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppointmentsTable;
