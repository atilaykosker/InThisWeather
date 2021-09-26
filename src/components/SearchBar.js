/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';
import { Refresh } from '@styled-icons/boxicons-regular';
import { User } from '@styled-icons/boxicons-regular';
import { css } from 'styled-components';
import Image from 'next/image';

const SearchBarWrap = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start;
   position: relative;
   height: 100px;
   background-color: black;
   padding-right: 30px;
   padding-left: 30px;
   @media only screen and (max-width: 1080px) {
      display: flex;
      height: auto;
      min-height: 110px;
      flex-direction: column;
      align-items: center;
      
   }
`;
const SearchInputContainer = styled.div`
   position: absolute;
   left: 50%;
   transform: translate(-50%, 0);
   display: flex;
   align-items: center;
   justify-content: center;
   @media only screen and (max-width: 1080px) {
      height: auto;
      min-height: 100px;
      flex-direction: row;
      align-items: center;
      margin-top: 30px;
   }
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
   text-align: center;

   @media only screen and (max-width: 1080px) {
      width: 200px;
   }
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
   margin-left:5px;
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
            <Image src={`/logo.png`} alt="" width={50} height={50} />
            <LogoTitle>InThisWeather</LogoTitle>
         </LogoContainer>
         <SearchInputContainer>
            <SearchInput onKeyUp={(e) => setVal(e.target.value)} />
            <RefreshIcon onClick={() => props.getWeather(val)} />
         </SearchInputContainer>
      </SearchBarWrap>
   );
};

export default SearchBar;
