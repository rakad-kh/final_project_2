import { manHoldingBox } from '../../assets';
import './AppointmentsContainer.css';

const AppointmentsContainer = () => {
  return (
    <div className="appointmentsContainer">
      <div className="defaultText">עוד לא הוספת תורים</div>

      <img className="manHoldingBox" src={manHoldingBox} alt="manHoldingBox" />
    </div>
  );
};

export default AppointmentsContainer;
