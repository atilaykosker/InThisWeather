/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Image from 'next/image';

import styled from 'styled-components';
import { css } from 'styled-components';
import { DropletFill } from '@styled-icons/bootstrap';

const themeHotter = css`
   background-color: #ff9090;
`;

const themeHot = css`
   background-color: #ffa572;
`;

const themeAvg = css`
   background-color: #ffedd1;
`;

const themeCold = css`
   background-color: #d6ffff;
`;

const themeColder = css`
   background-color: #82ffff;
`;

const StyledCard = styled.div`
   background-color: #ffedd1;
   ${(props) => {
      if (props.themeColor == 'themeHotter') {
         return `
         ${themeHotter};
         `;
      }
      if (props.themeColor == 'themeHot') {
         return `
         ${themeHot};
         `;
      }
      if (props.themeColor == 'themeAvg') {
         return `
         ${themeAvg};
         `;
      }
      if (props.themeColor == 'themeCold') {
         return `
         ${themeCold};
         `;
      }
      if (props.themeColor == 'themeColder') {
         return `
         ${themeColder};
         `;
      }
   }};
   max-width: 410px;
   height: 191px;
   border-radius: 30px;
   box-shadow: 1px 4px 9px -1px rgba(0, 0, 0, 0.15);
   display: flex;
   justify-content: space-evenly;
   align-items:center;
   padding-right: 20px;
   font-size: 20px;
   @media only screen and (max-width: 420px) {
      font-size: 17px;
      height: 160px;

   }
`;

const ConditionsContent = styled.div`
   display: flex;
   flex-direction: column;
   padding: 20px 20px;
`;

const RainCondition = styled.div`
   display: flex;
   align-items: center;
`;

const CelciusText = styled.div`
   font-size: 3.5em;
   font-weight: 500;
   padding: 0px;
`;

const DateText = styled.div`
   font-weight: 300;
   font-size: 1em;
   color: gray;
   margin-top: -10;
`;

const RainText = styled.div`
   font-size: 1em;
   font-weight: 700;
   color: gray;
`;

const DropIcon = styled(DropletFill)`
   color: #00e0ff;
   width: 30px;
   height: 30px;
`;

const ConditionImage = styled.div`
   /* margin-left: 20px;
   margin-right: 20px;
   margin-top: -40px; */
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
         ' ' +
         dateForTime.getHours() +
         ':' +
         dateForTime.toTimeString().slice(3, 5);
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
               <img
                  src={'/WeatherIcons/' + props.code + '.png'}
                  alt=""
                  width={180}
                  height={180}
               />
            </ConditionImage>
         </StyledCard>
      );
   } else {
      return null;
   }
};

export default DailyConditionCard;
