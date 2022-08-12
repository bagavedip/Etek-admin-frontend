import React, {useState, useEffect} from 'react';
// import DonutChart from "react-donut-chart";
// import internetGrowthData from './donut-series-data.json';
// import { Chart, ChartTitle, ChartLegend, ChartArea, ChartTooltip, ChartSeries, ChartSeriesItem, ChartSeriesLabels } from '@progress/kendo-react-charts';
import 'hammerjs';
import {axiosGet} from '../../helpers/axois';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import axios from 'axios';

export default function DoughnutChart(){
  const [severities, setSeverities] = useState([])
  const [assets, setAssets] = useState([])
  useEffect(()=>{
    async function getAllInsights(){
      try {
        const severity = await axiosGet("severities/")
        console.log("in doughnut")
        console.log(severity.Data)
        console.log("after doughnut")
        setSeverities(severity.Data)
      }
      catch(error){
        console.log(error)
      }
    }
    getAllInsights()
  }, [])

  useEffect(()=>{
    async function getAllAssets(){
      try {
        const asset = await axiosGet("asset/")
        console.log(asset.Data)
        setAssets(asset.Data)
      }
      catch(error){
        console.log(error)
      }
    }
    getAllAssets()
  }, [])

  return (
    <div className='App'>
      <h5>High:{severities.High}, Low: {severities.Low}</h5>
      <div>
      <br/>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Asset Name</TableCell>
            <TableCell>Asset Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          assets.map((asset) => {
            return(
              <TableRow
                key={asset.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {asset.AssetName}
                </TableCell>
                <TableCell>{asset.AssetType}</TableCell>
              </TableRow>
            )
          })
        }
        </TableBody>
      </Table>
    </TableContainer>
    {/* 
     */}
    </div>
        
    </div>
  );
}
  
//   return (
//     <div className='App'>
//       <h1>Hello Guys</h1>
//       {
//         severities.map((insight, i)=>{
//           return (
//             <h5> {insight.entityname}</h5>
//           )
//         })
//       }
//     </div>
//   );
// }

  
  
/*
export default function Doughnut() {
  const labelContent = e => '';
  const mapSeries = (series, index, array) => <ChartSeriesItem type="donut" startAngle={150} name={series.name} data={series.data} field="value" categoryField="category" colorField="color">
  {index === array.length - 1 && <ChartSeriesLabels position="outsideEnd" background="none" content={labelContent} />}
</ChartSeriesItem>;

const renderTooltip = context => {
  const {
    category,
    series,
    value
  } = context.point || context;
  return <div>{category} ({series.name}): {value}%</div>;
};

  const [resolved, setResolved] = useState([]);
  

  useEffect(() => {
   const resData= axiosGet("entities/")
      .then((res) => {
        console.log(res);
        setResolved(res.Data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <div className="App">
      <Chart>
        <ChartTooltip render={renderTooltip} />
        <ChartTitle text="Share of Internet Population Growth" />
        <ChartLegend visible={false} />
        <ChartArea background="none" />
        <ChartSeries>
          {internetGrowthData.map(mapSeries)}
        </ChartSeries>
      </Chart>
    </div>
  );
}
*/

