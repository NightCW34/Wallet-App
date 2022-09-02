import styled from "styled-components/native";
import React, { FunctionComponent } from "react";
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

//Components
import { colors } from "../colors";
import RegularText from "./../Texts/RegularText";

const ButtonView = styled.TouchableOpacity`
  aling-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

//Types
interface ButtonProps {
    btnStyles?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    textStyles?: StyleProp<TextStyle>;
    children: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
      <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
    </ButtonView>
  );
};

export default RegularButton;