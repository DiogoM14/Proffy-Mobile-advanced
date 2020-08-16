import styled from 'styled-components/native';

import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  /* background: red; */
  padding: 90px 40px;
`;

export const Numeration = styled.Text`
  font-family: Archivo_500Medium;
  font-size: 40px;
  color: #6a6180;
  opacity: 0.16;
`;

export const DynamicText = styled.Text`
  font-family: Poppins_500Medium;
  font-size: 24px;
  line-height: 34px;
  margin-top: 24px;
  color: #6a6180;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;
`;

export const PointsContainer = styled.View`
  flex-direction: row;
`;

export const Point = styled.View`
  width: 4px;
  height: 4px;

  margin-left: 4px;
  border-radius: 2px;

  background: #8257e5;
`;

export const GoBack = styled(BorderlessButton)``;
