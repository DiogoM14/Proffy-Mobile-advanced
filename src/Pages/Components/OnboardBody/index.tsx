import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Numeration, DynamicText, PointsContainer, Point, GoBack, Footer } from './styles';

import back from '../../../assets/icons/back.png'
import { Image } from 'react-native';

interface OnboardingProps {
  number: string;
  text: string;
}

const OnboardBody: React.FC<OnboardingProps> = ({ number, text }) => {
  const { navigate } = useNavigation();

  function SecondOnboarding() {
    navigate('SecondOnboarding')
  }

  return (
    <Container>
      <Numeration>{number}</Numeration>

      <DynamicText>{text}</DynamicText>
        
      <Footer>
        <PointsContainer>
          <Point />
          <Point style={{backgroundColor: '#c1bccc'}} />
        </PointsContainer>

        <GoBack onPress={SecondOnboarding} >
          <Image source={back} resizeMode="contain" />
        </GoBack>
      </Footer>
    </Container>
  );
}

export default OnboardBody;