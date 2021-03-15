import './App.css';
import React, {useEffect, useState} from 'react';
import Filters from './Containers/Filters';
import YearSelection from './Containers/YearSelection';
import styled from 'styled-components';
import LaunchInfo from './Containers/LaunchInfo';
import axios from 'axios';
import instance from './axios';


function App() {

  const [missionData, setMissionData] = useState([]);

  const [launchyear, setLaunchYear]=useState();
  const [launchsuccess, setLaunchSuccess] = useState();
  const [landsuccess, setLandSuccess] = useState();
 

  const getData = () => {
    // const resp= axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${year}`)
      const resp = axios.get(`https://api.spacexdata.com/v3/launches?limit=100`,{
          params:{
            launch_year: launchyear,
            launch_success: launchsuccess,
            land_success: landsuccess
          }
      })
      .then((respo) => {
        console.log(respo.data)
        setMissionData(respo.data)})
      }

    useEffect(()=>{
      getData();
    },[launchyear,launchsuccess,landsuccess]);

  // useEffect(() => {
  //   async function fetchData(){
  //   const request = await instance.get();
  //   console.log(request.data);
  //   setMissionData(request.data);
        
  //   }
  //   fetchData();
  // },[]);
  return (
    <div className="App">
      <Container>
        <Filters/>
        <Main>
          <YearSelection setLaunchYear={setLaunchYear} setLandSuccess={setLandSuccess} setLaunchSuccess={setLaunchSuccess}/>
          <LaunchInfo missionData={missionData}/>
        </Main>
      </Container>
     
    </div>
  );
}

export default App;


const Container = styled.div
  `width:100%;
  height:200vh;
  background: #ECECEC;
  display: grid;
  grid-template-rows:40px minmax(0, 1fr)
  flex-flow: column wrap;`

const Main = styled.div
  `
  display:grid;
  grid-template-columns: 260px auto;
  grid-gap: 10px;`
