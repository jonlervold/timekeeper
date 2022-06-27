import styled from 'styled-components';

const MainButton = styled.button`
  background: bisque;
  border-radius: 8px;
  border: 2px solid black;
  color: black;
  width: 100%;
  overflow: hidden;
  padding-left: 0;
  padding-right: 0;
  &:active {
    background-color: brown;
  }
`;

export default MainButton;
