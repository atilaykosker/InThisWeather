/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Image from 'next/image';

import styled from 'styled-components';
import { css } from 'styled-components';
import { DropletFill } from '@styled-icons/bootstrap';

import ExampleImage from '../assets/examplePic.png';

const themeHotter = css`
   background-color: #ff7431;
`;

const themeHot = css`
   background-color: #ffbe31;
`;

const themeAvg = css`
   background-color: #fadb60;
`;

const themeCold = css`
   background-color: #0d84ff;
`;

const themeColder = css`
   background-color: #82cbff;
`;

const StyledCard = styled.div`
   background-color: #ffedd1;
   ${props =>{
      if(props.themeColor == "themeHotter"){
         return`
         ${themeHotter};
         `
      }
      if(props.themeColor == "themeHot"){
         return`
         ${themeHot};
         `
      }
      if(props.themeColor == "themeAvg"){
         return`
         ${themeAvg};
         `
      }
      if(props.themeColor == "themeCold"){
         return`
         ${themeCold};
         `
      }
      if(props.themeColor == "themeColder"){
         return`
         ${themeColder};
         `
      }
   }};
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
   margin-top: -40px;
`;

const DailyConditionCard = (props) => {
   const [theme, setTheme] = useState('');

   useEffect(() => {
      setThemeHandler(props.avgTemp);
   }, [props.avgTemp]);

   const setThemeHandler = (temp) => {
      let themeName = '';
      if (temp < 0) themeName = 'themeColder';
      else if (temp < 10) themeName = 'themeCold';
      else if (temp < 20) themeName = 'themeAvg';
      else if (temp < 30) themeName = 'themeHot';
      else themeName = 'themeHotter';
      setTheme(themeName);

      StyledCard.defaultProps = {
         theme: themeName,
      };
      console.log(`StyledCard`, StyledCard.defaultProps)
   };

   const floatToint = (value) => {
      return value | 0;
   };

   const getDateFormatted = () => {
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
      const time =
         ' ' + dateForTime.getHours() + ':' + dateForTime.getMinutes();

      return day + time;
   };

   if (props.avgTemp) {
      return (
         <StyledCard themeColor={theme}>
            <ConditionsContent>
               <RainCondition>
                  <DropIcon />
                  <RainText>%{props.changeOfRain}</RainText>
               </RainCondition>
               <CelciusText>{floatToint(props.avgTemp)}°C</CelciusText>
               <DateText>{getDateFormatted()}</DateText>
            </ConditionsContent>
            <ConditionImage>
               <Image src={ExampleImage} alt="" width={200} height={200} />
            </ConditionImage>
         </StyledCard>
      );
   } else {
      return null;
   }
};

export default DailyConditionCard;
