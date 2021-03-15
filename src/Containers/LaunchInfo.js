import React from 'react';
import styled from 'styled-components';


function LaunchInfo({missionData}) {

    return (
        <Container>
            {missionData.length > 0 &&
            missionData.map((data,index) => (
                     <OuterDiv>
                     <img  src={data.links.mission_patch_small}/>
                     <MissionDetails>
                         <MissionName>
                             {data.mission_name} #{data.flight_number}
                         </MissionName>
                         <MissionID>
                             <label>Mission Ids:</label>
                             <li>{data.mission_id[0]}</li>
                             
                         </MissionID>
                         <LaunchYear>
                             <label>Launch Year:</label> { data.launch_year > 0 && data.launch_year}
                         </LaunchYear>
                         <LaunchSuccess>
                             <label>Successfull Launch: </label>{data.launch_success ? data.launch_success.toString() : data.launch_success.toString() }
                         </LaunchSuccess>
                         <LandingSuccess>
                         <label>Successfull Landing:</label> {data.launch_landing}
                         </LandingSuccess>
                     </MissionDetails>
                 
             </OuterDiv>
                
            ))}
               
            
        </Container>
   
)
}

export default LaunchInfo;

const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    grid-gap: 40px;
    background-color: #ECECEC;
    padding: 4px 25px 4px;`

const OuterDiv = styled.div`
    background:#ffffff;
    height: 350px;
    width: 200px;
    border-radius: 15px;

    img{
        justify-contents: center;
        height: 150px;
        width: 150px;
        margin: 20px;
        background: light-gray;
    }
    `

const MissionDetails = styled.div`
    display: flex;
    flex-flow: column;
    background: white;
    background-color: #ffffff;
`

const MissionID = styled.div`
    background-color: #ffffff;
    padding-left: 17px;
    padding-top: 1px;
    padding-bottom: 5px;
    margin-top: 2px;
    font-size: 12px;
    color: #808080;
    font-weight: 500;
    
    li{
        background: white;
        

    }

    label{
        font-size: 12px;
        font-weight: 800;
        color: black;
        background: white;
    }
    `

const MissionName = styled.div`
    background-color: #ffffff;
    padding-left: 17px;
    padding-top: 1px;
    padding-bottom: 5px;
    margin-top: 2px;
    color: #46008b;
    font-weight: 900;
    font-size: 14px;
`

const LaunchYear = styled.div`
    background-color: #ffffff;
    padding-left: 17px;
    padding-top: 1px;
    padding-bottom: 5px;
    margin-top: 2px;
    font-size: 12px;
    color: #808080;
    font-weight: 500;
    label{
        font-size: 12px;
        font-weight: 800;
        color: black;
        background: white;
    }
    `

const LaunchSuccess = styled.div`
    background-color: #ffffff;
    padding-left: 17px;
    padding-top: 1px;
    padding-bottom: 5px;
    margin-top: 2px;
    font-size: 12px;
    color: #808080;
    font-weight: 500;
    label{
        font-size: 12px;
        font-weight: 800;
        color: black;
        background: white;
    }
    
    `

const LandingSuccess = styled.div`
    background-color: #ffffff;
    padding-left: 17px;
    padding-top: 1px;
    padding-bottom: 5px;
    margin-top: 2px;
    font-size: 12px;
    color: #808080;
    font-weight: 500;
    label{
        font-size: 12px;
        font-weight: 800;
        color: black;
        background: white;
    }`



    
