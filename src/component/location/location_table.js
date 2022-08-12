import React, {useState, useEffect} from 'react';
import 'hammerjs';
import {axiosDelete, axiosGet} from '../../helpers/axois';
import Delete from '../../image/delete.png';
import Edit from '../../image/edit.png';
import { useNavigate} from 'react-router-dom';


export default function LocationTable(){
  const [location, setlocation] = useState([]);
  const [locationsearch, setLocationsearch] = useState("");
  const navigate = useNavigate("");

  useEffect(()=>{
    async function getAllLocation(){
      try {
        const locations = await axiosGet("geo_locations/")
        console.log(locations.Data)
        setlocation(locations.Data)
      }
      catch(error){
        console.log(error)
      }
    }
    getAllLocation()
  }, [])

  function deletelocation (e, id){
    const location = axiosDelete("delete_location/"+id)
    alert("Record deleted for id " +id)
    window.location.reload(false);
  }

  function updatelocation(id){
    navigate('/update_location/'+id)
  }

  return (
    
    <div>
      <input className='admin-nav-button'
        type={"text"}
        placeholder= {"Location Filter"}
        onChange={(e)=>{
            setLocationsearch(e.target.value);
            }
        }
      />
      
      <br/>
      <div className='tablecontainer'>
        <table className='table'>
          <thead className='table-head'>
            <tr className='table-row'>
                {/* <th>
                    Sr. No.
                </th> */}
                <th>
                    LOCATION NAME
                </th>
                <th>
                    ENTITY
                </th>
                <th>
                    ACTION
                </th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {
            location
            .filter((loc)=>{
              if (locationsearch === ""){
                return loc;
              }
              else if(loc.location.toLowerCase().includes(locationsearch.toLowerCase())){
                return loc;
              }
            })
            .map((loc) => {
              return(
                <tr
                  key={loc.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <th key={loc.id} component="th" scope="row">
                    {loc.location}
                  </th>
                  <th key={loc.id} component="th" scope="row">
                    {loc.entity}
                  </th>
                  <th key={loc.id} value={loc.id}>
                    <div style={{float:"left"}} value={loc.id} onClick={((e) => deletelocation(e, loc.id))}><img src={Delete}/></div>
                    <div style={{marginLeft:"10px", float:"left"}} onClick={((e)=>updatelocation(loc.id))}><img src={Edit}/></div>
                  </th>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}

