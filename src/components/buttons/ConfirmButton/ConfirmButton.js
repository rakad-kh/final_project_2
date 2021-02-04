import './ConfirmButton.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(1),
    minWidth: 100,
    color: 'black',
  },
}));

const ConfirmButton = ({ text, width, disabled, onClick }) => {
  const classes = useStyles();
  const style = {
    width: 110,
  };

  return (
    <div className={classes.container}>
      <button
        className="confirmButton"
        style={style}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default ConfirmButton;
