import styled from 'styled-components/native';

export const TopbarContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20px 10px 20px;
    background-color: #ffff;
    box-shadow: 0px 5px 60px #0000;
`;

export const TopbarBrand = styled.Image`
    width: 128px;
    height: 30px;
`;

export const TopbarProfile = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${ ({ theme }) => theme.COLORS.VERDE_JADE};
`;

export const TopbarProfileAvatar = styled.Image`
    width: 46px;
    height: 46px;
`
export const TopbarProfileInfo = styled.View`
    margin-right: 10px;
    flex-direction: column;
    justify-content: space-between;
`

export const TopbarProfileName = styled.Text`
    color: ${({theme}) => theme.COLORS.VERDE_JADE};
    font-size: 14px;
    font-family: ${({theme}) => theme.FONTS.BOLD};
`

export const TopbarProfileCpf = styled.Text`
    margin-top: 5px;
    color: rgba(0,0,0, .600);
    font-size: 14px;
    font-family: ${({theme}) => theme.FONTS.BOLD};
    
`