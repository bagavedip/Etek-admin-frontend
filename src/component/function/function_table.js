import React, {useState, useEffect} from 'react';
import 'hammerjs';
import {axiosDelete, axiosGet} from '../../helpers/axois';
import Delete from '../../image/delete.png';
import Edit from '../../image/edit.png';
import { useNavigate} from 'react-router-dom';


export default function FunctionTable(){
  const [Function, setFunction] = useState([]);
  const [functionsearch, setFunctionsearch] = useState("");
  const navigate = useNavigate("");

  useEffect(()=>{
    async function getAllFunction(){
      try {
        const functions = await axiosGet("function/")
        console.log(functions)
        console.log(functions.Data)
        setFunction(functions.Data)
      }
      catch(error){
        console.log(error)
      }
    }
    getAllFunction()
  }, [])

  function deletefunction (e, id){
    const deletefunction = axiosDelete("delete_function/"+id)
    alert("Record deleted for id " +id)
    window.location.reload(false);
  }

  function updatefunction(id){
    navigate('/update_function/'+id)
  }

  return (
    
    <div>
      <input className='admin-nav-button'
        type={"text"}
        placeholder= {"Process Filter"}
        onChange={(e)=>{
            setFunctionsearch(e.target.value);
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
                    FUNCTION NAME
                </th>
                <th>
                    LOCATION
                </th>
                <th>
                    ACTION
                </th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {
            Function
            .filter((func)=>{
              if (functionsearch === ""){
                return func;
              }
              else if(func.Function_name.toLowerCase().includes(functionsearch.toLowerCase())){
                return func;
              }
            })
            .map((func) => {
              return(
                <tr
                  key={func.Function_id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <th component="th" scope="row">
                    {func.Function_name}
                  </th>
                  <th component="th" scope="row">
                    {func.Location}
                  </th>
                  <th value={func.Function_id}>
                    <div style={{float:"left"}} value={func.Function_id} onClick={((e) => deletefunction(e, func.Function_id))}><img src={Delete}/></div>
                    <div style={{marginLeft:"10px", float:"left"}} onClick={((e)=>updatefunction(func.Function_id))}><img src={Edit}/></div>
                    
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

