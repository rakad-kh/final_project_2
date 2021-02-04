import { manHoldingBox } from '../../assets';
import './AppointmentsContainer.css';
import { CollapsibleTable } from '../Table2';


const AppointmentsContainer = (props) => {
  const { rows, setRows } = props;
  return (
    <div className="appointmentsContainer">
      <div className="table">
        <CollapsibleTable rows={rows} setRows={setRows} />
      </div>
      {/* <div className="defaultText">עוד לא הוספת תורים</div> */}
      {/* <img className="manHoldingBox" src={manHoldingBox} alt="manHoldingBox" /> */}
    </div>
  );
};

export default AppointmentsContainer;
