import styled from 'styled-components';
import DailyConditionCard from './DailyConditionCard';
import HourlySlider from './HourlySlider';
import Advices from './Advices';

const StyledMain = styled.div`
   display: flex;
   justify-content: center;
   max-width: 90rem;
   height: auto;
   padding: 10px;
   margin: 0 auto;
`;

const MainContent = styled.div`
   display: flex;
   flex-direction: column;
`;

const ConditionsContainer = styled.div`
   margin-top: 23px;

   display: flex;
   justify-content: space-between;
   align-items: center;
   @media only screen and (max-width: 1080px) {
      flex-direction: column;
   }
`;

const HourlySliderContainer = styled.div`
   margin-left: 50px;
   @media only screen and (max-width: 1080px) {
      margin-left: 0px;
      margin-top: 30px;

      flex-direction: column;
   }
`;

const HeadConditionText = styled.div`
   font-size: 32px;
   font-weight: bold;
   color: black;
   display: flex;
   justify-content: center;
   text-align: center;
      margin-top: 20px;
   @media only screen and (max-width: 1080px) {
      margin-top: 10px;
   }
`;

const AdvicesContainer = styled.div`
   margin-top: 20px;
   margin-bottom: 20px;
   @media only screen and (max-width: 1080px) {
      margin-left: 0px;
      margin-top: 30px;

      flex-direction: column;
   }
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
               <AdvicesContainer>
                  <Advices {...props} />
               </AdvicesContainer>
            </MainContent>
         </StyledMain>
      );
   } else {
      return <StyledMain> </StyledMain>;
   }
};

export default Main;
