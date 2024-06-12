import React, { useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import Header from '../../Components/Header/Header';

const Barabanki = () => {
    const [data, setData] = useState([
      {
        "farmername": "akilesh kumar",
        "fathername": "nanha",
        "maps" : ""
      },
      {
        "farmername": "amar singh",
        "fathername": "chandra shekhar",
        "maps" : ""
      },
      {
        "farmername": "ameerachandra",
        "fathername": "ramsagar",
        "maps" : ""
      },
      {
        "farmername": "anuj kumar",
        "fathername": "nanha",
        "maps" : ""
      },
      {
        "farmername": "arpit kumar",
        "fathername": "nanha",
        "maps" : ""
      },
      {
        "farmername": "ashok kumar",
        "fathername": "vimalachand",
        "maps" : ""
      },
      {
        "farmername": "girja sankar",
        "fathername": "parashuram",
        "maps" : ""
      },
      {
        "farmername": "gulshan kumar",
        "fathername": "patan",
        "maps" : ""
      },
      {
        "farmername": "indraprakash",
        "fathername": "rakesh kumar",
        "maps" : ""
      },
      {
        "farmername": "maikulal yadav",
        "fathername": "hardwari",
        "maps" : ""
      },
      {
        "farmername": "manoj rawat",
        "fathername": "fakire",
        "maps" : ""
      },
      {
        "farmername": "pratap singh",
        "fathername": "shri ram",
        "maps" : ""
      },
      {
        "farmername": "prem chandra",
        "fathername": "ram tirath",
        "maps" : ""
      },
      {
        "farmername": "rakesh kumar",
        "fathername": "ram sagar",
        "maps" : ""
      },
      {
        "farmername": "ram bahadur",
        "fathername": "harnaam singh",
        "maps" : ""
      },
      {
        "farmername": "ram naresh kumar",
        "fathername": "raghavram",
        "maps" : ""
      },
      {
        "farmername": "ram prakash yadav",
        "fathername": "jagdish prasad",
        "maps" : ""
      },
      {
        "farmername": "ramavati",
        "fathername": "nanha",
        "maps" : ""
      },
      {
        "farmername": "ranjeet kumar yadav",
        "fathername": "chandra shekhar",
        "maps" : ""
      },
      {
        "farmername": "sandip kumar",
        "fathername": "premchandra",
        "maps" : ""
      },
      {
        "farmername": "sanjay kumar",
        "fathername": "shri ram",
        "maps" : ""
      },
      {
        "farmername": "satish chandra",
        "fathername": "awadh bihari",
        "maps" : ""
      },
      {
        "farmername": "satynaam singh",
        "fathername": "ram singh",
        "maps" : ""
      },
      {
        "farmername": "uma shankar",
        "fathername": "shri ram",
        "maps" : ""
      },
      {
        "farmername": "vikram singh",
        "fathername": "ram khelawan",
        "maps" : ""
      },
      {
        "farmername": "vindeshwari",
        "fathername": "ram shankar",
        "maps" : ""
      }
    ])
    //using state if you want to manage the pagination state yourself
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 5, //customize the default page size
    });
    const columns = [
    {
        accessorKey: 'farmername',
        header: 'Farmer Name',
        Cell: ({ cell }) => {
            return <>{cell.getValue().toUpperCase()}</>
        }
    },
    {
        accessorKey: 'fathername',
        header: 'Father Name',
        Cell: ({ cell }) => {
            return <>{cell.getValue().toUpperCase()}</>
        }
    },
    {
        accessorKey: 'maps',
        header: 'Maps',
        Cell : ({ cell }) => {
            return <a href={`/${cell.getValue()}`} target='_blank'>Open</a>
        }
    }
];
  return (
    <div>
        <Header/>
        <div className='card px-5 pb-5' style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingTop : '80px'}} >   
          <MaterialReactTable
              data={data}
              columns={columns}
              muiPaginationProps = {{
                  showFirstButton: true,
                  showLastButton: true,
              }}
          />
        </div>
    </div>
    
    
  )
}

export default Barabanki