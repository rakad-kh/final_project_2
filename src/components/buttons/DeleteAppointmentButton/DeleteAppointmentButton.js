import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Button from '@material-ui/core/Button';

import './DeleteAppointmentButton.css';

const DeleteAppointmentButton = ({ onClick }) => {
  return (
    <div className="deleteAppointmentButtonContainer">
      <Button variant="outlined" color="secondary" onClick={onClick}>
        מחק תור
        <DeleteOutlineOutlinedIcon className="deleteOutlineOutlinedIcon" />
      </Button>
    </div>
  );
};

export default DeleteAppointmentButton;
