import AppointmentsContainer from '../../AppointmentsContainer';
import AppointmentForm from '../../AppointmentForm';
import { Fragment, useState } from 'react';

const Dashboard = () => {
    const [rows, setRows] = useState([]);
    return (
        <Fragment>
            <AppointmentForm rows={rows} setRows={setRows} />
            <AppointmentsContainer rows={rows} setRows={setRows} />
        </Fragment>
    );
};


export default Dashboard;
