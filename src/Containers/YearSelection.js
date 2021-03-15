import React,{useState} from 'react';
import styled from 'styled-components';




function YearSelection({setLaunchYear,setLaunchSuccess,setLandSuccess}) {
    
    
    return (
        <Container>
            <Name>
                Filters
            </Name>
            <LaunchYear>
                Launch Year 
            </LaunchYear>
            <Underline/>
            <Years>
                <button onClick={(e)=> setLaunchYear(e.target.name)} name='2006'>2006</button>
                <button onClick={(e)=> setLaunchYear(e.target.name)} name='2007'>2007</button>
                <button onClick={(e)=> setLaunchYear(e.target.name)} name='2008'>2008</button>
                <button onClick={(e)=> setLaunchYear(e.target.name)} name='2009'>2009</button>
                <button onClick={(e)=> setLaunchYear(e.target.name)} name='2010'>2010</button>
                <button onClick={(e)=> setLaunchYear(e.target.name)} name='2011'>2011</button>
                <button onClick={(e)=> setLaunchYear(e.target.name)} name='2012'>2012</button>
                <button onClick={(e)=> setLaunchYear(e.target.name)} name='2013'>2013</button>
                <button onClick={(e)=> setLaunchYear(e.target.name)} name='2014'>2014</button>
                <button onClick={(e)=> setLaunchYear(e.target.name)} name='2015'>2015</button>
                <button onClick={(e)=> setLaunchYear(e.target.name)} name='2016'>2016</button>
                <button onClick={(e)=> setLaunchYear(e.target.name)} name='2017'>2017</button>
                <button onClick={(e)=> setLaunchYear(e.target.name)} name='2018'>2018</button>
                <button onClick={(e)=> setLaunchYear(e.target.name)} name='2019'>2019</button>
                <button onClick={(e)=> setLaunchYear(e.target.name)} name='2020'>2020</button>

            </Years>
                <LaunchTitle>
                    Successfull Launch
                </LaunchTitle>
                <Underline/>
                <SelectionButtons>
                <button onClick={(e) => setLaunchSuccess(true)} name='launchTrue'>True</button>
                <button onClick={(e) => setLaunchSuccess(false)} name='launchFalse'>False</button>
                </SelectionButtons>
                <LandingTitle>
                    Successfull Landing
                </LandingTitle>
                <Underline/>
                <SelectionButtons>
                <button onClick={(e) => setLandSuccess(true)} name='landTrue'>True</button>
                <button onClick={(e) => setLandSuccess(false)} name='landFalse'>False</button>
                </SelectionButtons>
            
        </Container>
    )
}

export default YearSelection;

const Container = styled.div`
    background-color: #ffffff;
    margin-top: 5px;
    border-radius: 15px;
    overflow-y: hidden;
    display: flex;
    flex-flow: column wrap;

`

const Name = styled.div`
    color: #000000;
    background:#ffffff;
    border-radius: 10px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 10px;
    padding-top: 6px;
    `

const LaunchYear = styled.div`
    color: #000000;
    background:#ffffff;
    font-weight: 300;
    display: flex;
    justify-content: center;
    padding-top: 4px;

`

const Underline= styled.hr`
    height:1px;
    width: 150px;
    border-width: 0;
    color: #ECECEC;
    background-color:gray;
`

const Years = styled.div`
    display: grid;
    grid-template-columns: 60px 60px;
    align-items: center;
    background: white;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 32px;
    grid-gap: 10px;

    button{
        background: #bcf5bc;
        border: none;
        color: black;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border-radius: 4px;
        font-size: 20px;
        margin: 4px 2px;
        cursor: pointer;
    }
    `

const LaunchTitle = styled.div`
    color: #000000;
    background:#ffffff;
    font-weight: 300;
    display: flex;
    justify-content: center;
    padding-top: 20px;`

const SelectionButtons = styled.div`
    display: grid;
    grid-template-columns: 60px 60px;
    align-items: center;
    background: white;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 32px;
    grid-gap: 10px;

    button{
        background: #bcf5bc;
        border: none;
        color: black;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border-radius: 4px;
        font-size: 20px;
        margin: 4px 2px;
        padding: 6px;
        cursor: pointer;
    }
    
`

const LandingTitle = styled.div`
    color: #000000;
    background:#ffffff;
    font-weight: 300;
    display: flex;
    justify-content: center;
    padding-top: 20px;`


