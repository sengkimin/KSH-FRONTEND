import React from 'react';
import Type from '../../components/Type';
import DropdownResident from '../../components/DropdownResident';
import ReactDatePicker from '../../components/ReactDatePicker';
// import ReactDatePicker from '../../components/ReactDatePicker';
// import Date from '../../components/Date';

const Reporting = () => {

  return (
    <div className='text-3xl'>Report

      <div className='text-3xl flex justify-between'>
        <div className='text-xl mt-6 flex'>
          <Type />
        </div>
        {/* <div className='text-xl flex mt-2 ml-16'>
    </div> */}
        <div className='text-xl flex  mt-5'>
        <ReactDatePicker/>
        <DropdownResident />
        </div>
      </div>
    </div>)



};

export default Reporting;
