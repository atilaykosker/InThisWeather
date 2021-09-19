import styled from 'styled-components';
import DailyConditionCard from './DailyConditionCard';
import HourlySlider from './HourlySlider';

const StyledMain = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   max-width: 90rem;
   height: 500px;
   padding: 10px 1rem;
   margin: 0 auto;
   border: 1px solid gray;
`;

const MainContent = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const ConditionsContainer = styled.div`
   margin-top: 23px;

   display: flex;
   justify-content: space-between;
   align-items: center;
   @media only screen and (max-width: 768px) {
      flex-direction: column;
   }
`;

const HourlySliderContainer = styled.div`
   margin-left: 50px;
   @media only screen and (max-width: 768px) {
      margin-left: 0px;
      margin-top: 30px;

      flex-direction: column;
   }
`;

const HeadConditionText = styled.p`
   font-size: 32px;
   font-weight: bold;
   color: black;
`;

const Main = (props) => {
   if (props.avgTemp) {
      return (
         <StyledMain>
            <MainContent>
               <HeadConditionText>
                  {props.cityName
                     ? props.cityName + ' is now ' + props.condition
                     : '..'}
               </HeadConditionText>
               <ConditionsContainer>
                  <DailyConditionCard {...props} />
                  <HourlySliderContainer>
                     <HourlySlider hourlyForecast={props.hourly} />
                  </HourlySliderContainer>
               </ConditionsContainer>
            </MainContent>
         </StyledMain>
      );
   } else {
      return <StyledMain> </StyledMain>;
   }
};

export default Main;
