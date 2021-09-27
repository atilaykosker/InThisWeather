/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';
import { Refresh } from '@styled-icons/boxicons-regular';
import { User } from '@styled-icons/boxicons-regular';
import { css } from 'styled-components';
import Image from 'next/image';
import Api from '../scripts/fetchAutoComplete';
import SuggestionList from './SuggestionList';

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
   margin-left: 5px;
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

const AutoComplete = styled.div`
   position: relative;
   display: flex;
`;

const SuggestionListContainer = styled.div`
   position: absolute;
   background-color: white;
   width: 300px;
   max-height: 130px;
   overflow: auto;
   border: 1px solid #ddd;
   z-index: 1;
   margin-top: 50px;
   border-radius: 15px;
   padding:10px;
   /* width */
   ::-webkit-scrollbar {
      width: 8px;
   }

   /* Track */
   ::-webkit-scrollbar-track {
      background: white;
      padding-top: 20px;

   }

   /* Handle */
   ::-webkit-scrollbar-thumb {
      background: rgb(83, 83, 83);
      background-clip: padding-box;

   }

   /* Handle on hover */
   ::-webkit-scrollbar-thumb:hover {
      background: #555;
   }
   @media only screen and (max-width: 1080px) {
      width: 200px;
   }
`;

const SearchBar = (props) => {
   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
   const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
   const [showSuggestions, setShowSuggestions] = useState(false);
   const [input, setInput] = useState('');

   const onChange = async (e) => {
      const userInput = e.target.value;
      setInput(e.target.value);

      if (userInput.length >= 3) {
         const suggestions = await Api(e.target.value);
         // Filter our suggestions that don't contain the user's input

         const unLinked = suggestions.filter(
            (suggestion) =>
               suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) >
               -1
         );

         setShowSuggestions(true);
         setFilteredSuggestions(unLinked);
         setActiveSuggestionIndex(suggestions.length);
      } else {
         setShowSuggestions(false);
         setActiveSuggestionIndex(0);
      }
   };

   const onClick = (e) => {
      setFilteredSuggestions([]);
      setInput(e.target.innerText);
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
   };

   return (
      <SearchBarWrap>
         <LogoContainer>
            <Image src={`/logo.png`} alt="" width={50} height={50} />
            <LogoTitle>InThisWeather</LogoTitle>
         </LogoContainer>
         <SearchInputContainer>
            <AutoComplete>
               <SearchInput onChange={onChange} value={input} />
               <SuggestionListContainer>
                  {showSuggestions &&
                     input &&
                     filteredSuggestions.map((suggestion, index) => {
                        return (
                           <SuggestionList
                              suggestion={suggestion.name}
                              key={suggestion.id}
                              onClick={onClick}
                           />
                        );
                     })}
               </SuggestionListContainer>
            </AutoComplete>
            <RefreshIcon onClick={() => props.getWeather(input)} />
         </SearchInputContainer>
      </SearchBarWrap>
   );
};

export default SearchBar;
