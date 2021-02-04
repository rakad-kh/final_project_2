import AppointmentsContainer from '../../AppointmentsContainer';
import AppointmentForm from '../../AppointmentForm';
import { Fragment, useState } from 'react';
const Dashboard = () => {
  const [appArray, setAppArray] = useState([]);
  const addAppToArray = (app) => {
    appArray.push(app);
    setAppArray([...appArray]);
  };

  return (
    <Fragment>
      <AppointmentForm addAppToArray={addAppToArray} />
      <AppointmentsContainer appArray={appArray} />
    </Fragment>
  );
};

export default Dashboard;
