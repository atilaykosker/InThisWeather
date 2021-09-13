/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Search } from '@styled-icons/evaicons-solid';

const SearchBarWrap = styled.div`
   display: flex;
   flex-directions: row;
   align-items: center;
   justify-content: center;
`;

const SearchInput = styled.input`
   width: 80%;
   margin-right: 10px;
   height: 30px;
   border-radius: 10px;
   border: black 1px solid;
   padding: 5px;
   outline: none;
`;

const SearchIcon = styled(Search)`
   color: black;
   width: 50px;
   height: 50px;
`;

const SearchBar = (props) => {

   return (
      <SearchBarWrap>
         <SearchInput onKeyUp={(e) => props.changeInputValue(e.target.value)} />
         { props.searchInputValue}
         <SearchIcon />
      </SearchBarWrap>
   );
};

export default SearchBar;
