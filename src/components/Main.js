import styled from 'styled-components';
import DailyConditionCard from './DailyConditionCard';

const StyledMain = styled.div`
   display: flex;
   flex-direction: row;
   justify-content:center;
   max-width: 90rem;
   height: 500px;
   padding: 10px 1rem;
   margin: 0 auto;
   border: 1px solid gray;
`;

const MainContent = styled.div`
display:flex;
flex-direction:column ;
align-items: center;
`;

const ConditionsContainer = styled.div`
display:flex;

flex-direction:row ;

`;

const HeadConditionText = styled.p`
   font-size: 28px;
   font-weight: bold;
   color: black;
`;

const Main = (props) => {
   console.log(`props`, props);

   return (
      <StyledMain>
         <MainContent>
            <HeadConditionText>{props.cityName ? props.cityName + " is now " + props.condition: ".."}</HeadConditionText>
            <ConditionsContainer>
               <DailyConditionCard {...props} />
               </ConditionsContainer>
         </MainContent>
      </StyledMain>
   );
};

export default Main;
