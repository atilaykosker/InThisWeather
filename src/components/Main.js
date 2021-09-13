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
   // const [searchValue, setSearchValue] = useState(' ');

   // const changeHandler = async (e) => {
   //    if (e.keyCode != 13) {
   //       setSearchValue(e.target.value);
   //    } else {
   //       getData();
   //    }
   // };

   // const getData = async () => {
   //    const weatherObj = await FetchData(searchValue);
   //    console.log(weatherObj);
   // };
   return (
      <StyledMain >
                  { props.searchInputValue}
      </StyledMain>
   );
};

export default Main;
