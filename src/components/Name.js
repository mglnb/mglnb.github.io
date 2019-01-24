import React from 'react'
import styled, { keyframes } from 'styled-components'


const delay = 1.5;


const SVGKeyframes = keyframes`
    25% {
        transform: scale(1);
        opacity: .9;
    }
    80% {
        transform: scale(1);
        opacity: .9;
 
    }
    100% {
        margin-top: -10vh;
        transform: scale(1);
        opacity: .9;
    }
`

const SVG = styled.svg`
    stroke-linejoin: round;
    opacity: 0;
    mix-blend-mode: overlay;
    filter: brightness(120%);
    transform: scale(2);
    transform-origin: top center;
    animation: ${SVGKeyframes} ${delay}s forwards ${delay}s;
    margin: 0 20%;
    max-width: 600px;
`
const SVGLines = styled.svg`
    stroke-linejoin: round;
    opacity: .9;
    mix-blend-mode: overlay;
    filter: brightness(120%);
    max-width: 1050px;
`
const BorderName = styled.rect`
    stroke: #FFF;
    stroke-width: 3px;
    fill: transparent;
`

const TextName = styled.text`
    font-size: 122px;
    fill: #FFF;
    font-weight: 100;    
`
const dashArray = keyframes`
    to {
        stroke-dashoffset: 0;
    }
`



const G2Line1 = styled.line`
    stroke-dasharray: 390;
    stroke-dashoffset: 390;
    animation: ${dashArray} .8s forwards ${delay + delay + .7}s ease;
    stroke-width: 2;
    stroke: #FFF;

`

const G2Line2 = styled.line`
    stroke-dasharray: 72;
    stroke-dashoffset: 72;
    animation: ${dashArray} .3s forwards ${delay + delay + 1.5}s ease;
    stroke-width: 2;
    stroke: #FFF;

`

const G1Line = styled.line`
    stroke-dasharray: 230;
    stroke-dashoffset: 230;
    animation: ${dashArray} 1s forwards ${delay + delay + .2}s ease;
    stroke-width: 2;
    stroke: #FFF;
`





const Name = () => (
    <>
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 303" preserveAspectRatio="xMidYMid meet">
            <BorderName height="294" width="793" y="8" x="5.49" />
            <TextName xmlSpace="preserve" text-anchor="start" y="132.5" x="175.14063">MIGUEL</TextName>
            <TextName xmlSpace="preserve" text-anchor="start" y="257.5" x="153.60938">NOVACK</TextName>
        </SVG>
        <SVGLines preserveAspectRatio="xMidYMid meet" viewBox="0 0 998 288">
            <g>
                <G1Line x1="497.38435" y1="-1.48784" x2="497.38435" y2="228.04401" />
            </g>
            <g>
                <G2Line1 x1="499.59893" y1="157.53653" x2="113.72387" y2="157.53653" />
                <G2Line2 x1="115" y1="157.56092" x2="115" y2="226.83869" />
            </g>
            <g>
                <G2Line1 x1="494.66997" y1="157.53653" x2="880.42898" y2="157.53653" />
                <G2Line2 x1="880.20164" y1="156" x2="880.20164" y2="226.83869" />
            </g>
        </SVGLines>
    </>
)

export default Name