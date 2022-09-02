import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// Import Colors

import { colors } from "../colors";

const StyledText = styled.Text`
    font-size: 13px;
    color: ${colors.gray};
    text-aling: left;
    font-family: Lato-Regular;
`;

//Types
import { TextProps } from "./types";

const SmallText: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default SmallText;