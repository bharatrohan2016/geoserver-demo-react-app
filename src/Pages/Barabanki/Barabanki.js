import React, { useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import Header from '../../Components/Header/Header';

const Barabanki = () => {
    const [data, setData] = useState([
      {
        "farmername": "akilesh kumar",
        "fathername": "nanha",
        "maps" : "geo/barabanki/akilesh-kumar.html"
      },
      {
        "farmername": "amar singh",
        "fathername": "chandra shekhar",
        "maps" : "geo/barabanki/amar-singh.html"
      },
      {
        "farmername": "ameerachandra",
        "fathername": "ramsagar",
        "maps" : "geo/barabanki/ameerachandra.html"
      },
      {
        "farmername": "anuj kumar",
        "fathername": "nanha",
        "maps" : "geo/barabanki/anuj-kumar.html"
      },
      {
        "farmername": "arpit kumar",
        "fathername": "nanha",
        "maps" : "geo/barabanki/arpit-kumar.html"
      },
      {
        "farmername": "ashok kumar",
        "fathername": "vimalachand",
        "maps" : "geo/barabanki/ashok-lumar.html"
      },
      {
        "farmername": "girja sankar",
        "fathername": "parashuram",
        "maps" : "geo/barabanki/girja-sankar.html"
      },
      {
        "farmername": "gulshan kumar",
        "fathername": "patan",
        "maps" : "geo/barabanki/gulshan-kumar.html"
      },
      {
        "farmername": "indraprakash",
        "fathername": "rakesh kumar",
        "maps" : "geo/barabanki/indraprakash-rakesh.html"
      },
      {
        "farmername": "maikulal yadav",
        "fathername": "hardwari",
        "maps" : "geo/barabanki/maikulal-yadav.html"
      },
      {
        "farmername": "manoj rawat",
        "fathername": "fakire",
        "maps" : "geo/barabanki/manoj-rawat.html"
      },
      {
        "farmername": "pratap singh",
        "fathername": "shri ram",
        "maps" : "geo/barabanki/pratap-singh.html"
      },
      {
        "farmername": "prem chandra",
        "fathername": "ram tirath",
        "maps" : "geo/barabanki/prem-chandra.html"
      },
      {
        "farmername": "rakesh kumar",
        "fathername": "ram sagar",
        "maps" : "geo/barabanki/rakesh-kumar.html"
      },
      {
        "farmername": "ram bahadur",
        "fathername": "harnaam singh",
        "maps" : "geo/barabanki/ram-bahadur.html"
      },
      {
        "farmername": "ram naresh kumar",
        "fathername": "raghavram",
        "maps" : "geo/barabanki/ram-naresh-kumar.html"
      },
      {
        "farmername": "ram naresh",
        "fathername": "ram",
        "maps" : "geo/barabanki/ram-naresh.html"
      },
      {
        "farmername": "ram prakash yadav",
        "fathername": "jagdish prasad",
        "maps" : "geo/barabanki/ram-prakash.html"
      },
      {
        "farmername": "ramavati",
        "fathername": "nanha",
        "maps" : "geo/barabanki/ramavati-nanha.html"
      },
      {
        "farmername": "ranjeet kumar yadav",
        "fathername": "chandra shekhar",
        "maps" : "geo/barabanki/ranjeet-kumar.html"
      },
      {
        "farmername": "sandip kumar",
        "fathername": "premchandra",
        "maps" : "geo/barabanki/sandip-kumar.html"
      },
      {
        "farmername": "sanjay kumar",
        "fathername": "shri ram",
        "maps" : "geo/barabanki/sanjay-kumar.html"
      },
      {
        "farmername": "satish chandra",
        "fathername": "awadh bihari",
        "maps" : "geo/barabanki/satish-chandra.html"
      },
      {
        "farmername": "satynaam singh",
        "fathername": "ram singh",
        "maps" : "geo/barabanki/satynaam-singh.html"
      },
      {
        "farmername": "uma shankar",
        "fathername": "shri ram",
        "maps" : "geo/barabanki/uma-shankar.html"
      },
      {
        "farmername": "vikram singh",
        "fathername": "ram khelawan",
        "maps" : "geo/barabanki/vikram-singh.html"
      },
      {
        "farmername": "vindeshwari",
        "fathername": "ram shankar",
        "maps" : "geo/barabanki/vindeshwari-ram.html"
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
                  paging:true,
                    pageSize:6,
                  
              }}
              enableRowNumbers
          />
        </div>
    </div>
    
    
  )
}

export default Barabanki