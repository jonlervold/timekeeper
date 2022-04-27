import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import DurationDisplay from '../components/DurationDisplay';
import FillBackground from '../components/FillBackground';
import HeaderBig from '../components/HeaderBig';
import HomeContainer from '../components/HomeContainer';
import StyledApp from '../components/StyledApp';
import TimeSelector from '../components/TimeSelector';
import { defaultState } from '../defaultState';

export function App() {
  const [stateData, setStateData] = useState(defaultState)
  return (
    <StyledApp>
       <FillBackground/>
      <HeaderBig>TimeKeeper</HeaderBig>
      <HomeContainer>
          <TimeSelector startStop={"Start"} stateData={stateData} setStateData={setStateData}/>
          <TimeSelector startStop={"Stop"} stateData={stateData} setStateData={setStateData}/>
      </HomeContainer>
      <DurationDisplay stateData={stateData}/>
    </StyledApp>
  );
}

export default App;
