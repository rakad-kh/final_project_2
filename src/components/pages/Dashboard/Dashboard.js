import AppointmentsContainer from '../../AppointmentsContainer';
import AppointmentForm from '../../AppointmentForm';
import { Fragment } from 'react';
const Dashboard = () => (
    <Fragment>
        <AppointmentForm />
        <AppointmentsContainer />
    </Fragment>
);

export default Dashboard;
