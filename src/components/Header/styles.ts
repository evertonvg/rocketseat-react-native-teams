import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

import { DefaultTheme } from "styled-components/native";

export const BackIcon = styled(CaretLeft).attrs(({ theme }: { theme: DefaultTheme }) => ({
  size: 36,
  color: theme.COLORS.WHITE
}))``;