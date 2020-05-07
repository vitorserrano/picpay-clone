import React from 'react';
import { Image } from 'react-native';

import { 
    Container,
    Option,
    Label,    
} from './styles';

import Img1 from '../../assets/01.png';
import Img2 from '../../assets/02.png';
import Img3 from '../../assets/03.png';
import Img4 from '../../assets/04.png';
import Img5 from '../../assets/05.png';
import Img6 from '../../assets/06.png';
import Img7 from '../../assets/07.png';

const items = [
    {
        key: String(Math.random()),
        img: Img1,
        label: 'Recarga',
    },
    {
        key: String(Math.random()),
        img: Img2,
        label: 'Uber',
    },
    {
        key: String(Math.random()),
        img: Img3,
        label: 'Ônibus',
    },
    {
        key: String(Math.random()),
        img: Img4,
        label: 'Tv',
    },
    {
        key: String(Math.random()),
        img: Img5,
        label: 'Doações',
    },
    {
        key: String(Math.random()),
        img: Img6,
        label: 'Barras',
    },
    {
        key: String(Math.random()),
        img: Img7,
        label: 'FAQ',
    },
];

export default function Suggestions() {
    return (
        <Container>
            {items.map((item) => (
                <Option key={item.key}>
                    <Image source={item.img}></Image>
                    <Label>{item.label}</Label>
                </Option>
            ))}
        </Container>
    );
}