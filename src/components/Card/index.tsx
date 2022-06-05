import { Pressable } from 'react-native';
import { CardBody, CardContainer, CardDescription, CardHeader, CardIcon, CardIconArrowFront, CardTitle } from "./styles";
import ArrowFront from '../../../assets/ArrowFront.svg';
import { useEffect } from 'react';

type AtributosCard = {
    title?:string;
    description?: string;
    icon?: JSX.Element;
    onPress?():void;
};

export function Card({title, description, icon, onPress}:AtributosCard){

    return (
        <Pressable onPress={onPress}>
            <CardContainer>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardIconArrowFront>
                        <ArrowFront style={{position: 'absolute', right: 0, top: 0, height: 0}} />
                    </CardIconArrowFront>
                </CardHeader>
                <CardBody>
                    <CardDescription>
                        {description}
                    </CardDescription>
                    <CardIcon>
                        {icon}
                    </CardIcon>
                </CardBody>
            </CardContainer>
        </Pressable>
    );
}