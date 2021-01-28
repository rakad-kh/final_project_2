import React, { useState } from 'react';
import { ConfirmButton, SelectButton, DateTimeButton } from '../buttons';
import './AppointmentForm.css';

const donationType = ['טרומבוציטים', 'גרנולוציטים'];
const hospitalName = [
  'איכילוב',
  'תל השומר',
  'בילינסון',
  'הדסה',
  'רמב״ם',
  'סורוקה',
];
const squaresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const bloodKind = ["לא ידועה", "+A", "-A", "+B", "-B", "+AB"];
const msgContent = ["הודעת ברירת מחדל", "zichronmenachem@gmail.com הודעת שגיאה "];

const AppointmentForm = () => {
  const [donation, setDonation] = useState('טרומבוציטים');
  const [hospital, setHospital] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [squares, setSquares] = useState('');

  return (
    <div className="appointmentForm">
      <SelectButton
        header={'תרומת'}
        content={donationType}
        setData={setDonation}
        data={donation}
      ></SelectButton>
      <SelectButton
        header={'בית חולים'}
        content={hospitalName}
        setData={setHospital}
        data={hospital}
      ></SelectButton>
      <DateTimeButton
        header={'תאריך ושעה'}
        date={date}
        setDate={setDate}
        hour={hour}
        setHour={setHour}
      ></DateTimeButton>
      <SelectButton header={'משבצות'} content={squaresNum} setData={setSquares}>
        data={squares}
      </SelectButton>
      {donation === "גרנולוציטים" ?
        <SelectButton header={'תוכן הודעה'} content={msgContent} setData={setSquares}>
          {' '}
          data={squares}
        </SelectButton> : null}
      {donation === "גרנולוציטים" ?
        <SelectButton header={'סוג דם'} content={bloodKind} setData={setSquares}>
          {' '}
          data={squares}
        </SelectButton> : null}
      <ConfirmButton text="הוספה" />
    </div>
  );
};

export default AppointmentForm;
