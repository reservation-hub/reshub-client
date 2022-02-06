import MypageMenu from '@/components/detail/user/MypageMenu';
import MainTemplate from '@/components/Template/MainTemplate';
import Section from '@/components/Template/Section';
import React from 'react';

const MyReservation = () => {
  return (
    <MainTemplate>
      <Section classes='w-[100rem] mx-auth'>
        <div className='flex'>
          <MypageMenu />
        </div>
      </Section>
    </MainTemplate>
  )
};

export default MyReservation;

