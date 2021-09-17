/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { DropletFill } from '@styled-icons/bootstrap';
import Image from 'next/image';

import ExampleImage from '../assets/examplePic.png';

const StyledCard = styled.div`
   background-color: #ffedd1;
   width: auto;
   height: 191px;
   border-radius: 30px;
   box-shadow: 1px 4px 9px -1px rgba(0, 0, 0, 0.15);
   display: flex;
   justify-content: space-between;
   margin-top: 23px;
`;

const ConditionsContent = styled.div`
   display: flex;
   flex-direction: column;
   padding: 20px 30px;
`;

const RainCondition = styled.div`
   display: flex;
   align-items: center;
`;

const CelciusText = styled.div`
   font-size: 70px;
   font-weight: 500;
   padding: 0px;
`;

const DateText = styled.div`
   font-weight: 300;
   font-size: 28px;
   color: gray;
   margin-top: -10;
`;

const RainText = styled.div`
   font-size: 20px;
   font-weight: 700;
   color: gray;
`;

const DropIcon = styled(DropletFill)`
   color: #00e0ff;
   width: 30px;
   height: 30px;
`;

const ConditionImage = styled.div`
   margin-left: 20px;
   margin-right: 20px;
   margin-top:-40px;
`;

const DailyConditionCard = (props) => {
   const floatToint = (value) => {
      return value | 0;
   };

   const daysList = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
   ];
   const date = new Date(props.date);
   const day = daysList[date.getDay()];

   const dateForTime = new Date();
   const time = ' ' + dateForTime.getHours() + ':' + dateForTime.getMinutes();

   if (props.avgTemp) {
      return (
         <StyledCard>
            <ConditionsContent>
               <RainCondition>
                  <DropIcon />
                  <RainText>%{props.changeOfRain}</RainText>
               </RainCondition>
               <CelciusText>{floatToint(props.avgTemp)}°C</CelciusText>
               <DateText>{day + time}</DateText>
            </ConditionsContent>
            <ConditionImage>
               <Image src={ExampleImage} alt=""  width={200} height={200} />
            </ConditionImage>
         </StyledCard>
      );
   } else {
      return null;
   }
};

export default DailyConditionCard;
