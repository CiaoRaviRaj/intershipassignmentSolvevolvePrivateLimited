import React from 'react';

//DAYS ROW MAP COMPONENT

function Days(day) {
  return (
    <div className={day.className}>
        <h3>{day.dayName}</h3>
    </div>
  )
}

export default Days