import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CollapseRow from '../CollapseRow';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const cellStyle = {
  font: 'normal normal bold 16px/24px Rubik',
  letterSpacing: '0px',
  color: '#272932',
  opacity: '1',
};

const Row = ({ row }) => {
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();
  const { hour, location, numOfBookedAppointments, volunteers } = row;

  return (
    <Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell align="left" style={cellStyle}>
          {numOfBookedAppointments}
        </TableCell>
        <TableCell align="center" style={cellStyle}>
          {location}
        </TableCell>
        <TableCell align="right" style={cellStyle}>
          {hour}
        </TableCell>
      </TableRow>
      <CollapseRow
        open={open}
        volunteers={volunteers}
        numOfBookedAppointments={numOfBookedAppointments}
      />
    </Fragment>
  );
};

Row.propTypes = {
  row: PropTypes.shape({
    hour: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    numOfBookedAppointments: PropTypes.number.isRequired,
    volunteers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        isArrivalConfirmed: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Row;
