/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledLayout = styled.div`
display: flex;
`;
const Layout = ({children}) => {
   return (
      <StyledLayout>
         {children}
      </StyledLayout>
   );
};

export default Layout;
