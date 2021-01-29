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

        <TableCell align="right" style={cellStyle}>
          {row.fat}
        </TableCell>
        <TableCell align="right" style={cellStyle}>
          {row.carbs}
        </TableCell>
        <TableCell align="right" style={cellStyle}>
          {row.protein}
        </TableCell>
      </TableRow>
      <CollapseRow open={open} history={row.history} />
    </Fragment>
  );
};

Row.propTypes = {
  row: PropTypes.shape({
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,

    protein: PropTypes.number.isRequired,
  }).isRequired,
};

export default Row;
