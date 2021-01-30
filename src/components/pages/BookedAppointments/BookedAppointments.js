import { SelectButton } from '../../buttons';
import { useState } from 'react';
import BookedAppointmentsContainer from '../../BookedAppointmentsContainer';

import AddLocationOutlinedIcon from '@material-ui/icons/AddLocationOutlined';

import './BookedAppointments.css';
const hospitalName = [
  'איכילוב',
  'תל השומר',
  'בילינסון',
  'הדסה',
  'רמב״ם',
  'סורוקה',
];
const BookedAppointments = () => {
  const [hospital, setHospital] = useState('');
  return (
    <div>
      <div className="selectButtonContainer">
        <AddLocationOutlinedIcon style={{ marginTop: 29 }} />
        <SelectButton
          header={'בית חולים'}
          content={hospitalName}
          setData={setHospital}
          data={hospital}
        />
      </div>

      <BookedAppointmentsContainer />
    </div>
  );
};

export default BookedAppointments;
