import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

const AppointmentDataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5104/api/Appointments');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  const columns = [
    {
      name: 'ID',
      selector: (row) => row.appointmentId,
      sortable: true,
    },
    {
      name: 'Note',
      selector: (row) => row.note,
      sortable: true,
    },
    {
      name: 'Photo',
      selector: (row) => row.photo,
      sortable: true,
    },
    {
      name: 'Tooth',
      selector: (row) => row.teeth.toothId,
      sortable: true,
    },

  ];

   

  return (
    <DataTable
      title="Appointment Data Table"
      columns={columns}
      data={data}
    />
  );
};

export default AppointmentDataTable;
