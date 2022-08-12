import React, {useState, useEffect} from 'react';
import 'hammerjs';
import {axiosDelete, axiosGet} from '../../helpers/axois';
import Delete from '../../image/delete.png';
import Edit from '../../image/edit.png';
import { useNavigate} from 'react-router-dom';


export default function EntityTable(){
  const [entity, setEntity] = useState([]);
  const [entitysearch, setEntitysearch] = useState("");
  const navigate = useNavigate("");

  useEffect(()=>{
    async function getAllEntity(){
      try {
        const entities = await axiosGet("entities/")
        console.log(entities.Data)
        setEntity(entities.Data)
      }
      catch(error){
        console.log(error)
      }
    }
    getAllEntity()
  }, [])

  function deleteentity (e, id){
    const entity = axiosDelete("delete_entity/"+id)
    alert("Record deleted for id " +id)
    window.location.reload(false);
  }

  function updateentity(id){
    navigate('/update_entity/'+id)
  }

  return (
    
    <div>
      <input className='admin-nav-button'
        type={"text"}
        placeholder= {"Entity Filter"}
        onChange={(e)=>{
            setEntitysearch(e.target.value);
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
                    Entity NAME
                </th>
                <th width="15%">
                    ACTION
                </th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {
            entity
            .filter((ent)=>{
              if (entitysearch === ""){
                return ent;
              }
              else if(ent.entityname.toLowerCase().includes(entitysearch.toLowerCase())){
                return ent;
              }
            })
            .map((ent) => {
              return(
                <tr
                  key={ent.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <th key={ent.id} component="th" scope="row">
                    {ent.entityname}
                  </th>
                  <th key={ent.id} value={ent.id}>
                    <div style={{float:"left"}} value={ent.id} onClick={((e) => deleteentity(e, ent.id))}><img src={Delete}/></div>
                    <div style={{marginLeft:"10px", float:"left"}} onClick={((e)=>updateentity(ent.id))}><img src={Edit}/></div>
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

