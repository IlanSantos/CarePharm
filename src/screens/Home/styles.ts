import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px 30px;
`;

export const CardList = styled.View`
    flex-direction: column;
    width: 100%;
`

export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.CINZA_CLARO};
    font-family: ${({theme}) => theme.FONTS.BOLD};
    font-size: 24px;
`;

export const TitleVerdeJade = styled.Text`
    color: ${({theme}) => theme.COLORS.VERDE_JADE};
    font-family: ${({theme}) => theme.FONTS.BOLD};
    font-size: 24px;
`;
