import styled from 'styled-components';
const StyledDiv = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

const SuggestionsList = (props) => {
   return <StyledDiv onClick={props.onClick}>{props.suggestion}</StyledDiv>;
};

export default SuggestionsList;
