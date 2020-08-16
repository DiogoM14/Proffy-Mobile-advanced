import React from 'react';

import { Container } from './styles';

import PageHeader from '../Components/PageHeader';
import OnboardingBody from '../Components/OnboardBody';

const Onboarding: React.FC = () => {
  return (
    <>
      <PageHeader />

      <OnboardingBody />
    </>
  );
}

export default Onboarding;