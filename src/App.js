import React from 'react';
import AppointmentDataTable from './DataTables/AppointmentDataTable';
import PatientsDataTable from './DataTables/PatientsDataTable';

const App = () => {
  return (
    <div className="App">
      <AppointmentDataTable />
      <PatientsDataTable />
    </div>
  );
};

export default App;
