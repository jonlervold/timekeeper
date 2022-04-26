import styled from 'styled-components';
import TimeSelector from '../components/TimeSelector';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <h1>TimeKeeper</h1>
      <TimeSelector/>
    </StyledApp>
  );
}

export default App;
