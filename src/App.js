import React, { useState } from 'react';
import moment from 'moment';
import { AppWrapper } from './appStyles'
import Calendar from './components/Calendar/index';
import Theme from './Theme';
import { weekArray } from './constants'

const App = () => {
  const [selectedDate, setSelectedDate] = useState(moment());
  
  return (
  <Theme>
    <AppWrapper>
        <Calendar date={selectedDate}
          onSelectedDateChange={setSelectedDate}
          weeks={weekArray}
        />
    </AppWrapper>
  </Theme>

  )
};

export default App;