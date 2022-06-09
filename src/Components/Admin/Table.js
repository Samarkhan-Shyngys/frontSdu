import { useState } from 'react';
import { DataGrid,  GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import { TrashIcon } from '@heroicons/react/outline';
const columns = 
    [
      { field: 'emailID',headerName: 'emailID', width: 140},
      { field: 'name', headerName: 'Имя, фамилия', width: 200},
      { field: 'faculty', headerName: 'Факультет', width: 240},
      { field: 'profession', headerName: 'Специальность', width: 220,},
      { field: 'phone', headerName: 'Номер телефона', width: 180},
      { field: 'icon', headerName: '',
      renderCell: ({row: icon }) => {
          return <TrashIcon className='h-6 w-6 ml-6' onClick={()=>console.log("aaa")}/>
      },
      width: 100, editable: true, sortable: false}

    ]

const CustomToolbar = ({ setFilterButtonEl }) => (
    <GridToolbarContainer>
      <GridToolbarFilterButton ref={setFilterButtonEl}/>
    </GridToolbarContainer>
  );

export function Table(props) {
    const [filterButtonEl, setFilterButtonEl] = useState(null);
  return (
    <div style={{ height: 250, width: '100%'}}>
      <DataGrid
        disableColumnMenu 
        hideFooter 
        columns={columns}
        rows={props.data}
        // onRowClick={() => ()}
        components={{
            Toolbar: CustomToolbar,
          }}
          componentsProps={{
            panel: {
              anchorEl: filterButtonEl,
            },
            toolbar: {
              setFilterButtonEl,
            },
          }}
      />
    </div>
  );
}




