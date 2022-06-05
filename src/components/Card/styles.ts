import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const CardContainer = styled.View`
    margin-top: 15px;
    padding: 15px;
    background-color: white;
    border-radius: 10px;
    width: 100%;
    
`;

export const CardHeader = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 100%;
`;

export const CardBody = styled.View`
    margin-top: 5px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CardTitle = styled.Text`
    color: ${({theme}) => theme.COLORS.VERDE_JADE};
    font-family: ${({theme}) => theme.FONTS.BOLD};
    font-size: 18px;
    width: 90%;
`;

export const CardIconArrowFront = styled.View`
    text-align: end;
    width: 10%;
`

export const CardIcon = styled.View`
    width: 20%;
`

export const CardDescription = styled.Text`
    color: ${({theme}) => theme.COLORS.CINZA_CLARO};
    font-family: ${({theme}) => theme.FONTS.BOLD};
    font-size: 16px;
    width: 80%;
`