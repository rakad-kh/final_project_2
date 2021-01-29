import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Button from '@material-ui/core/Button';

import './DeleteAppointmentButton.css';

const DeleteAppointmentButton = () => {
  return (
    <div className="deleteAppointmentButtonContainer">
      <Button variant="outlined" color="secondary">
        מחק תור
        <DeleteOutlineOutlinedIcon className="deleteOutlineOutlinedIcon" />
      </Button>
    </div>
  );
};

export default DeleteAppointmentButton;
