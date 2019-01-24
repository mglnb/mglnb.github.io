import React from 'react'
import styled from 'styled-components'

const OptionsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1050px;
    width: 100%;
    justify-items: center;
    color: white;
    grid-column-gap: 145px;
`

const Button = styled.button`
    all: unset;
    cursor: pointer;
    border: 1px solid whitesmoke;
    mix-blend-mode: overlay;
    height: 50px;
    width: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: url('#blur') saturate(2);
        background: inherit;

    }
`


const Options = () => (
    <OptionsGrid>   
        <Button>Experiência</Button>
        <Button>Portfolio</Button>
        <Button>Curiosidades</Button>
    </OptionsGrid>
)

export default Options