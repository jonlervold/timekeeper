import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import DurationDisplay from '../components/DurationDisplay';
import HeaderBig from '../components/HeaderBig';
import HomeContainer from '../components/HomeContainer';
import TimeSelector from '../components/TimeSelector';
import { defaultState } from '../defaultState';

const StyledApp = styled.div`
  background-color: navajowhite;
  text-align: center;
  font-family: Tahoma;
`;

const FillBackground = createGlobalStyle`
body {
  background: gray;
}`

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
