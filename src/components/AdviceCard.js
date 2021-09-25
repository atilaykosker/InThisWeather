/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

import styled from 'styled-components';
import { css } from 'styled-components';
import { DropletFill } from '@styled-icons/bootstrap';
import Image from 'next/image';
import Umbrella from '../assets/umbrella.png';

const StyledAdviceCard = styled.div`
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
   padding: 20px;
   width: 350px;
   height: 150px;
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
   font-size: 22px;
   font-weight: 400;
   color: black;
`;

const ConditionImage = styled.div`
   flex-shrink: 0;
`;
const AdviceCard = (props) => {
   console.log(props);
   return (
      <StyledAdviceCard>
         <ContentContainer>
            <ConditionImage>
               <Image src={Umbrella} alt="" width={90} height={90} />
            </ConditionImage>
            <AdviceTitle>{props.text}</AdviceTitle>
         </ContentContainer>
      </StyledAdviceCard>
   );
};

export default AdviceCard;
