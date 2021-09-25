/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

import styled from 'styled-components';
import { css } from 'styled-components';
import { DropletFill } from '@styled-icons/bootstrap';
import AdviceCard from './AdviceCard';

const AdvicesMainContainer = styled.div`
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
`;

const AdvicesCardsContainer = styled.div`
   display: flex;
   justify-content: space-between; 
   
`;
const AdviceTitle = styled.div`
   font-size: 32px;
   font-weight: bold;
   color: black;
   margin-bottom: 20px;
`;
const Advices = (props) => {
   const [advices, setAdvices] = useState([]);

   useEffect(() => {
      setAdvicesHandler();
   }, [props]);

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

      console.log('advicesArr', advicesArr);
      setAdvices(advicesArr);
   };

   if (props.avgTemp) {
      return (
         <AdvicesMainContainer>
            <AdviceTitle>Advices</AdviceTitle>
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
