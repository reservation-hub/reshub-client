import { AppointmentAttributes } from '@/pages/reservation/stepPage/StepTwo';
import dayjs from 'dayjs';
import React from 'react';
import { AppointmentPicker } from 'react-appointment-picker';
import Box from '../Template/Box';

const ReservationCalendar = ({ days }: { days: AppointmentAttributes[][] }) => {
  const initialDay = new Date(dayjs().format('YYYY-MM-DD'))

  return (
    <Box title='日付を選択' boxClass='mt-12'>
      <AppointmentPicker 
        days={days}
        initialDay={initialDay}
        maxReservableAppointments={1}
        unitTime={60 * 30 * 1000}
        visible
        alpha
        selectedByDefault
        continuous
        local='ja-JP'
      />
    </Box>
  )
};

export default ReservationCalendar;
