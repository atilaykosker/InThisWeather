/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Main from '../components/main';

const StyledLayout = styled.div`
   background-color: white;
   display: flex;
   flex-direction: row;
   justify-content: center;
   width: 100%;
`;
const Layout = () => {
   return (
      <StyledLayout>

         <Main />
      </StyledLayout>
   );
};

export default Layout;
