import React, {useState, useEffect} from 'react';
import 'hammerjs';
import {axiosDelete, axiosGet} from '../../helpers/axois';
import Delete from '../../image/delete.png';
import Edit from '../../image/edit.png';
import { useNavigate} from 'react-router-dom';


export default function ProcessTable(){
  const [process, setProcess] = useState([]);
  const [processsearch, setProcesssearch] = useState("");
  const navigate = useNavigate("");

  useEffect(()=>{
    async function getAllProcess(){
      try {
        const processes = await axiosGet("process_details/")
        console.log(processes.Data)
        setProcess(processes.Data)
      }
      catch(error){
        console.log(error)
      }
    }
    getAllProcess()
  }, [])

  function deleteprocess (e, id){
    const process = axiosDelete("delete_process/"+id)
    alert("Record deleted for id " +id)
    window.location.reload(false);
  }

  function updateprocess(id){
    navigate('/update_process/'+id)
  }

  return (
    
    <div>
      <input className='admin-nav-button'
        type={"text"}
        placeholder= {"Process Filter"}
        onChange={(e)=>{
            setProcesssearch(e.target.value);
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
                    PROCESS NAME
                </th>
                <th>
                    ACTION
                </th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {
            process
            .filter((proc)=>{
              if (processsearch === ""){
                return proc;
              }
              else if(proc.Process.toLowerCase().includes(processsearch.toLowerCase())){
                return proc;
              }
            })
            .map((proc) => {
              return(
                <tr
                  key={proc.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <th component="th" scope="row">
                    {proc.Process}
                  </th>
                  <th value={proc.Id}>
                    <div style={{float:"left"}} value={proc.Id} onClick={((e) => deleteprocess(e, proc.Id))}><img src={Delete}/></div>
                    <div style={{marginLeft:"10px", float:"left"}} onClick={((e)=>updateprocess(proc.Id))}><img src={Edit}/></div>
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

