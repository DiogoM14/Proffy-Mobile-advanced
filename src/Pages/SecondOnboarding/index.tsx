import React from 'react';

import { Container } from './styles';

import PageHeader from '../Components/PageHeader';
import OnboardingBody from '../Components/OnboardBody';


const SecondOnboarding: React.FC = () => {
  return (
    <>
      <PageHeader color="#04d361" name="monitor" background="OnboardingImgGreen" />

      <OnboardingBody text="Ou dê aulas sobre o que você mais conhece" number="02." />
    </>
  );
}

export default SecondOnboarding;