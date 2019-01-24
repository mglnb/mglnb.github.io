import React from 'react'
import styled, { keyframes } from 'styled-components'

const BackgroundAnimation = keyframes`
    0% {
		background-position: 0% 45%;
	}
    50% {
		background-position: 0% 55%;

    }
	100% {
		background-position: 0% 45%;
	}

`


const Container = styled.div`
    background-image: url('/imgs/bg.jpg');
    background-size: 100% 200%;
    background-position: 0% 45%;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    animation: ${BackgroundAnimation} 10s ease infinite;
`








// const Container = ({ children }) => (
//     <div>
//         {children}
//     </div>
// )

export default Container