/* eslint-disable react/prop-types */
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';

const StyledSidebar = styled.div`
width: 30%;
background-color:blue;
`;
const Sidebar = (props) => {

   return (
      <StyledSidebar>
         <SearchBar {...props}/>
      </StyledSidebar>
   );
};

export default Sidebar;
