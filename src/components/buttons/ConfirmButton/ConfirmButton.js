import './ConfirmButton.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(1),
    minWidth: 100,
    color: "black"
  }
}));

const ConfirmButton = ({ text, width, disabled }) => {
  const classes = useStyles();
  const style = {
    width: 110,
  };


  return (
    <form className={classes.container} noValidate>
      <button type={"submit"} className="confirmButton" style={style} disabled={disabled}>
        {text}
      </button>
    </form>
  );
};

export default ConfirmButton;
