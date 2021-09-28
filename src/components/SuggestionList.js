import styled from 'styled-components';
const StyledDiv = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 10px;
   font-size: 18px;
   font-weight: 300;
   @media only screen and (max-width: 480px) {
      font-size: 14px;
   }
`;

const SuggestionsList = (props) => {
   return <StyledDiv onClick={props.onClick}>{props.suggestion}</StyledDiv>;
};

export default SuggestionsList;
