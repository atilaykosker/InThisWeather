/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';
import { Refresh } from '@styled-icons/boxicons-regular';
import { User } from '@styled-icons/boxicons-regular';
import { css } from 'styled-components';

const SearchBarWrap = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;
   height: 95px;
   background-color: black;
   padding-right: 30px;
   padding-left: 30px;

`;
const SearchInputContainer = styled.div`
   position: absolute;
   left: 50%;
   transform: translate(-50%, 0);
   display: flex;
   align-items: center;
   justify-content: center;
`;
const SearchInput = styled.input`
   width: 300px;
   margin-right: 10px;
   height: 45px;
   border-radius: 11px;
   border: white 3px solid;
   background-color: black;
   padding: 5px;
   padding-left: 8px;
   padding-right: 8px;
   outline: none;
   font-size: 18px;
   font-weight: bold;
   color: white;
`;

const LogoContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

const LogoTitle = styled.a`
   font-size: 36px;
   font-weight: bold;
   color: white;
`;
const Icon = css`
   color: white;
   width: 45px;
   height: 45px;
`;

const RefreshIcon = styled(Refresh)`
   color: white;
   width: 55px;
   height: 55px;
`;

const UserIcon = styled(User)`
   ${Icon}
   margin-left: auto;
`;

const SearchBar = (props) => {
   const [val, setVal] = useState('');
   return (
      <SearchBarWrap>
         <LogoContainer>
            <LogoTitle>InThisWeather</LogoTitle>
         </LogoContainer>
         <SearchInputContainer>
            <SearchInput onKeyUp={(e) => setVal(e.target.value)} />
            <RefreshIcon onClick={() => props.getWeather(val)} />
         </SearchInputContainer>
         <UserIcon />
      </SearchBarWrap>
   );
};

export default SearchBar;
