import React from 'react';

import { Container, Numeration, DynamicText, PointsContainer, Point, GoBack, Footer } from './styles';

import back from '../../../assets/icons/back.png'
import { Image } from 'react-native';

const OnboardBody: React.FC = () => {
  return (
    <Container>
      <Numeration>01.</Numeration>
      <DynamicText>Encontre vários professores para ensinar você</DynamicText>
        
      <Footer>
        <PointsContainer>
          <Point />
          <Point style={{backgroundColor: '#c1bccc'}} />
        </PointsContainer>

        <GoBack>
          <Image source={back} resizeMode="contain" />
        </GoBack>
      </Footer>
    </Container>
  );
}

export default OnboardBody;