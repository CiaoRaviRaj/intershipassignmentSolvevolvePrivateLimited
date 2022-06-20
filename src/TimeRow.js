import React, { useState } from 'react'

import "./TimeRow.css";

import TimeColume from './TimeColume';

function TimeRow() {

  // 24 HR * 2 = 48 COLUMN SECTION 

    var timeRow = new Array(48);
    var hrValue = 0;
    var hrSlot = 0;
    var minSlot = 30;
  return (
    <div className='time__row'>
        {timeRow.fill([]).map(() => {
          hrValue++;
          var i = hrValue - 1;
          if (i % 2 === 0) {
            hrSlot++;
            minSlot = 0;
          }else {
            minSlot = 30;
          }
          return ( 
            <TimeColume 
            
              time={hrValue}
              hrSlot = {hrSlot}
              minSlot = {minSlot}
              /> 
          )
        })}
    </div>
    
  )
}

export default TimeRow;