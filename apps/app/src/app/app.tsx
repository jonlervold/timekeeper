import { useState } from 'react';
import DurationDisplay from '../components/DurationDisplay';
import FillBackground from '../components/styles/FillBackground';
import HeaderBig from '../components/styles/HeaderBig';
import HomeContainer from '../components/styles/HomeContainer';
import StyledApp from '../components/styles/StyledApp';
import TimeSelector from '../components/TimeSelector';
import { defaultState } from '../defaultState';

export function App() {
  const [stateData, setStateData] = useState(defaultState);
  return (
    <StyledApp>
      <FillBackground />
      <HeaderBig>TimeKeeper</HeaderBig>
      <HomeContainer>
        <TimeSelector
          startStop={'Start'}
          stateData={stateData}
          setStateData={setStateData}
        />
        <TimeSelector
          startStop={'Stop'}
          stateData={stateData}
          setStateData={setStateData}
        />
      </HomeContainer>
      <DurationDisplay stateData={stateData} />
    </StyledApp>
  );
}

export default App;
