import { useState } from 'react';
import styled from 'styled-components';
import FetchData from '../scripts/fetchData';


const StyledMain = styled.div`
   background-color: whitesmoke;
   display: flex;
   flex-direction: row;
   justify-content: center;
   width: 100%;
   height: 750px;
`;

const Main = (props) => {

   console.log(`props`, props)

   return (
      <StyledMain >
                  { props.cityName}
                  
      </StyledMain>
   );
};

export default Main;
