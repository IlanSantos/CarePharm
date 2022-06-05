import React from "react"
import { TopbarContainer, TopbarProfile, TopbarProfileAvatar, TopbarProfileCpf, TopbarProfileInfo, TopbarProfileName } from "./styles"
import CarePharmLogo from '../../../../assets/CarePharmLogo.svg';
import Avatar from '../../../../assets/Avatar46.png';
import {Shadow} from "react-native-shadow-2";

export const Topbar = () => {
    return (
        <Shadow distance={30}
            offset={[0, -10]}
            startColor={'rgba(0,0,0, .10)'}
            viewStyle={{width: '100%'}}
        >
            <TopbarContainer>
                <CarePharmLogo />
                <TopbarProfile>
                    <TopbarProfileInfo>
                        <TopbarProfileName>João Augusto Cruz</TopbarProfileName>
                        <TopbarProfileCpf>CPF: 000.000.00-00</TopbarProfileCpf>
                    </TopbarProfileInfo>
                    <TopbarProfileAvatar source={Avatar} resizeMode="contain" />
                </TopbarProfile>
            </TopbarContainer>
        </Shadow>
    )
}