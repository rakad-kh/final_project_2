/* eslint-disable react/jsx-no-duplicate-props */
import { manHoldingBox } from '../../assets';
import './AppointmentsContainer.css';
import AppointmentsTable from '../AppointmentsTable';

const AppointmentsContainer = ({ appArray }) => {
  return (
    <div className="appointmentsContainer">
      <div id="default" className={appArray.length ? 'hide' : null}>
        <div className="defaultText">עוד לא הוספת תורים</div>
        <img
          className="manHoldingBox"
          src={manHoldingBox}
          alt="manHoldingBox"
        />
      </div>

      <div
        className="tableContainer"
        className={appArray.length ? null : 'hide'}
      >
        <AppointmentsTable rows={appArray} />
      </div>
    </div>
  );
};

export default AppointmentsContainer;
