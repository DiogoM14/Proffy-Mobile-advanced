import React from 'react';

import { Container } from './styles';

import PageHeader from '../Components/PageHeader';
import OnboardingBody from '../Components/OnboardBody';


const FirstOnboarding: React.FC = () => {
  return (
    <>
      <PageHeader color="#8257e5" name="book-open" background="OnboardingImg" />

      <OnboardingBody text="Encontre vários professores para ensinar você" number="01." />
    </>
  );
}

export default FirstOnboarding;