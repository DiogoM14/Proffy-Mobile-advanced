import React from 'react';
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container } from './styles';

import OnboardingImg from '../../../assets/Background-header.png';
import OnboardingImgGreen from '../../../assets/header-background.png';

interface PageHeaderProps {
  color: string;
  name: string;
  background: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ color, name, background }) => {
  return (
    <Container style={{ backgroundColor: color }}>
      <Image source={OnboardingImg} resizeMode="contain" />
      <Feather name={name} size={120} color="#fff" style={{position: 'absolute'}} />
    </Container>
  );
}

export default PageHeader;