/* eslint-disable react/prop-types */
import styled from 'styled-components';
import SearchBar from './SearchBar';

const StyledHeader = styled.div`
background-color:blue;
`;
const Header = (props) => {

   return (
      <StyledHeader>
         <SearchBar {...props}/>
      </StyledHeader>
   );
};

export default Header;
