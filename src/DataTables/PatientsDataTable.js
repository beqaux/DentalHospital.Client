import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

const PatientsDataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5104/api/Patients');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  const columns = [
    {
      name: 'ID',
      selector: (row) => row.patientId,
      sortable: true,
    },
    {
      name: 'İsim',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Yaş',
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: 'Telefon Numarası',
      selector: (row) => row.phoneNumber,
      sortable: true,
    },
    {
      name: 'TC Kimlik No',
      selector: (row) => row.turkeyId,
      sortable: true,
    },
    {
      name: 'Cinsiyet',
      selector: (row) => row.gender,
      sortable: true,
      cell: row => {
        return row.gender ? 'Erkek' : 'Kadın'; }
    
    },
    {
        name: 'Randevu Zamanı',
        selector: (row) => row.created,
        sortable: true,
    },
    {
        name: 'Doktor',
        selector: (row) => row.doctorPatients[0].doctor.name,
        sortable: true,
      }

  ];

  return (
    <DataTable
      title="Patients Data Table"
      columns={columns}
      data={data}
    />
  );
};

export default PatientsDataTable;
