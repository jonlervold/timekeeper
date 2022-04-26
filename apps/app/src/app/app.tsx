import { useState } from 'react';
import styled from 'styled-components';
import TimeSelector from '../components/TimeSelector';
import { stateTable } from '../stateTable';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [stateData, setStateData] = useState(stateTable)
  return (
    <StyledApp>
      <h1>TimeKeeper</h1>
      <table><tbody>
        <tr>
          <td><TimeSelector startStop={"Start"} stateData={stateData} setStateData={setStateData}/></td>
          <td><TimeSelector startStop={"Stop"} stateData={stateData} setStateData={setStateData}/></td>
      </tr>
      </tbody>
      </table>
      <h1>Duration:</h1>
    </StyledApp>
  );
}

export default App;
