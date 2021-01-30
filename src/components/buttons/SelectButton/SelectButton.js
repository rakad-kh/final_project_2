import './SelectButton.css';

import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 90,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectButton({ setData, header, content, data }) {
  const classes = useStyles();
  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{header}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data}
          defaultValue=""
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          {(() => {
            const options = [];
            for (let elem of content) {
              options.push(
                <MenuItem key={elem} value={elem}>
                  {elem}
                </MenuItem>
              );
            }
            return options;
          })()}
        </Select>
      </FormControl>
    </div>
  );
}
