import React from 'react';
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container } from './styles';

import OnboardingImg from '../../../assets/Background-header.png';

const PageHeader: React.FC = () => {
  return (
    <Container>
      <Image source={OnboardingImg} resizeMode="contain" />
      <Feather name="book-open" size={120} color="#fff" style={{position: 'absolute'}} />
    </Container>
  );
}

export default PageHeader;