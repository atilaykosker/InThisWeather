/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledLayout = styled.div`
   width: 100%;
   display:flex;
   flex-direction: column;
`;
const Layout = ({ children }) => {
   return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
