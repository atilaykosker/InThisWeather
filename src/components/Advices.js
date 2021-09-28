/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

import styled from 'styled-components';
import { css } from 'styled-components';
import { DropletFill } from '@styled-icons/bootstrap';
import AdviceCard from './AdviceCard';
import WearAdviceCard from './WearAdviceCard';

const AdvicesMainContainer = styled.div`
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
`;

const AdvicesCardsContainer = styled.div`
   display: flex;
   justify-content: space-between;
   @media only screen and (max-width: 768px) {
      flex-direction: column;
      flex-wrap: wrap;
      gap: 15px;
      align-items: center;
   }
`;

const WearAdvicesCardsContainer = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 30px;
   @media only screen and (max-width: 1080px) {
      flex-direction: column;
      flex-wrap: wrap;
      gap: 15px;
      align-items: center;
   }
`;

const AdviceTitle = styled.div`
   font-size: 32px;
   font-weight: bold;
   color: black;
   margin-bottom: 20px;
`;
const Advices = (props) => {
   const [advices, setAdvices] = useState([]);
   const [wear, setWear] = useState({});
   useEffect(() => {
      setWearHandler(props.avgTemp, props.changeOfRain);
      setAdvicesHandler();
   }, [props]);
   const setWearHandler = (temp, rainChange) => {
      let conditionArr = [
         {
            cond: rainChange >= 50,
            curr: 'rainy',
            wear: { BotWear: ['Boot'], TopWear: [], Accessories: ['Umbrella'] },
         },
         {
            cond: rainChange < 50,
            curr: 'notRainy',
            wear: { BotWear: ['Sneaker'], TopWear: [], Accessories: [] },
         },
         {
            cond: temp <= 0,
            curr: 'colder',
            wear: {
               BotWear: [],
               TopWear: [],
               Accessories: ['Scarf', 'Beanie'],
            },
         },
         {
            cond: temp > 0 && temp <= 10,
            curr: 'cold',
            wear: {
               BotWear: ['Pant'],
               TopWear: ['Coat', 'Jumper'],
               Accessories: [],
            },
         },
         {
            cond: temp > 10 && temp < 25,
            curr: 'hot',
            wear: {
               BotWear: ['Short'],
               TopWear: ['Jacket', 'Shirt'],
               Accessories: [],
            },
         },
         {
            cond: temp >= 25,
            curr: 'hotter',
            wear: {
               BotWear: ['Short'],
               TopWear: ['Shirt'],
               Accessories: ['SunGlass'],
            },
         },
      ];
      let wearObj = {};
      wearObj.TopWear = wearObj.BotWear = wearObj.Accessories = [];
      conditionArr.forEach((element) => {
         if (element.cond) {
            wearObj.TopWear = [...wearObj.TopWear, ...element.wear.TopWear];
            wearObj.BotWear = [...wearObj.BotWear, ...element.wear.BotWear];
            wearObj.Accessories = [
               ...wearObj.Accessories,
               ...element.wear.Accessories,
            ];
         }
      });
      setWear(wearObj);
   };

   const setAdvicesHandler = () => {
      let advicesArr = [];

      if (props.changeOfRain > 50)
         advicesArr.push({
            text: '“It will be rainy today. You can put your umbrella in your bag.” ☔ ',
         });
      if (props.changeOfRain > 50 && props.avgTemp < 20)
         advicesArr.push({
            text: '“If you are going to spend time outside, you can wear your boots.” 🥾',
         });
      if (props.avgTemp > 30)
         advicesArr.push({
            text: "“The weather will be hot. Don't forget to take your water with you.” 🌊",
         });

      setAdvices(advicesArr);
   };

   if (props.avgTemp) {
      return (
         <AdvicesMainContainer>
            <AdviceTitle>Advices</AdviceTitle>
            <WearAdvicesCardsContainer>
               {wear.BotWear && wear.BotWear.length > 0 ? (
                  <WearAdviceCard
                     title={'Bottom & Foot Wear'}
                     items={wear.BotWear}
                  />
               ) : null}
               {wear.TopWear && wear.TopWear.length > 0 ? (
                  <WearAdviceCard title={'Top Wear'} items={wear.TopWear} />
               ) : null}
               {wear.Accessories && wear.Accessories.length > 0 ? (
                  <WearAdviceCard
                     title={'Accessories'}
                     items={wear.Accessories}
                  />
               ) : null}
            </WearAdvicesCardsContainer>
            <AdvicesCardsContainer>
               {advices.map((item) => {
                  return (
                     <AdviceCard key={item.text} text={item.text}></AdviceCard>
                  );
               })}
            </AdvicesCardsContainer>
         </AdvicesMainContainer>
      );
   } else {
      return null;
   }
};

export default Advices;
