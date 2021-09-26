/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

import styled from 'styled-components';
import { css } from 'styled-components';
import { DropletFill } from '@styled-icons/bootstrap';
import Image from 'next/image';

const StyledAdviceCard = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
   padding: 20px;
   width: 350px;
   height: 280px;
   box-shadow: 3px 4px 13px rgba(0, 0, 0, 0.25);
   border-radius: 30px;
`;

const ContentContainer = styled.div`
   display: flex;
   gap: 10px;
`;

const DropIcon = styled(DropletFill)`
   color: #00e0ff;
   width: 30px;
   height: 30px;
`;

const AdviceTitle = styled.div`
   margin-top: 10px;
   font-size: 23px;
   font-weight: 300;
   color: gray;
   text-align: center;
`;

const ConditionImage = styled.div`
   flex-shrink: 0;
`;
const WearAdviceCard = (props) => {
   console.log(props);
   return (
      <StyledAdviceCard>
         <ContentContainer>
            <ConditionImage>
               {props.items.map((element) => {
                  return (
                     <Image
                        key={element}
                        src={`/Clothes/png/${element}.png`}
                        alt=""
                        width={150}
                        height={150}
                     />
                  );
               })}
            </ConditionImage>
         </ContentContainer>
         <AdviceTitle>{props.title}</AdviceTitle>
      </StyledAdviceCard>
   );
};

export default WearAdviceCard;
