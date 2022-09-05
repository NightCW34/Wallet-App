import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

//Custom components
import { colors } from "../colors";
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';

const AmountSectionBackground = styled.View`
    width: 100%;
    padding-top: 5px;
    align-items: center;
    flex: 1
`;

//Types
import { AmountProps } from './types';

const AmountSection: FunctionComponent<AmountProps> = (props) => {
    return(
        <AmountSectionBackground>
            <SmallText textStyles={{ color: colors.secondary, marginBottom: 15 }}>
                Balance Total
            </SmallText>
            <RegularText textStyles={{ color: colors.secondary, fontSize: 28}}>
                 $ {props.balance}
            </RegularText>
        </AmountSectionBackground>
    );
};

export default AmountSection;