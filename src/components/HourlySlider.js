import { useState, useEffect } from 'react';

import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import { consts } from 'react-elastic-carousel';
import { DropletFill } from '@styled-icons/bootstrap';
import { RightArrow,LeftArrow } from '@styled-icons/boxicons-solid';


const DropIcon = styled(DropletFill)`
   color: #00e0ff;
   width: 20px;
   height: 20px;
`;

const RightArrowIcon = styled(RightArrow)`
   color: gray;
   width: 20px;
   height: 20px;
`;

const LeftArrowIcon = styled(LeftArrow)`
   color: gray;
   width: 20px;
   height: 20px;
`;

const HourText = styled.div`
   font-size: 30px;
   font-weight: 200;
   color: black;
   margin-bottom: 5px;
`;

const RainCondition = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 8px;
`;

const RainText = styled.div`
   font-size: 26px;
   font-weight: 200;
   color: black;
`;

const SlideContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;

   box-shadow: 3px 6px 13px -3px rgba(0, 0, 0, 0.25);
   border-radius: 30px;
   width: 150px;
   height: 150px;
   padding: 15px;
`;

const SliderContainer = styled.div`
   width: 650px;
   height: 160px;
   @media only screen and (max-width: 768px) {
      width: 300px;
   }
   @media only screen and (max-width: 1080px) {
      width: 300px;
   }
`;

const StyledButton = styled.div`
height:auto;
display:flex;
align-items:center;
`

const HourlySlider = (props) => {
   const [currentTime, setCurrentTime] = useState(0);

   useEffect(() => {
      setCurrentTimeHandler();
   });

   const setCurrentTimeHandler = () => {
      const dateForTime = new Date();
      const time = dateForTime.getHours();
      setCurrentTime(time);
   };

   const hourlyArray = props.hourlyForecast.filter((e, i) => i >= currentTime);

   const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
      { width: 850, itemsToShow: 2 }
    ]

   return (
      <SliderContainer>
         <Carousel
            breakPoints={breakPoints}
            renderArrow={props => {
               if(props.type === "PREV"){
                  return(
                     <StyledButton {...props}><LeftArrowIcon >GERİ</LeftArrowIcon></StyledButton>
                  )
               }else{
                  return(
                     <StyledButton {...props}><RightArrowIcon>ileri</RightArrowIcon></StyledButton>
                  )
               }
            }}
         >
            {hourlyArray.map((item) => {
               return (
                  <SlideContainer key={item.time_epoch}>
                     <HourText>{item.time.substring(11, 16)}</HourText>
                     {/* <Image src={ExampleImage} alt="" width={45} height={45} /> */}
                     <HourText>{item.temp_c | 0}</HourText>
                     <RainCondition>
                        <DropIcon />
                        <RainText>%6</RainText>
                     </RainCondition>
                  </SlideContainer>
               );
            })}
         </Carousel>
      </SliderContainer>
   );
};

export default HourlySlider;
