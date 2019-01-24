import React from 'react'
import styled, { keyframes } from 'styled-components'

const BackgroundAnimation = keyframes`
    0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}

`


const Container = styled.div`
    background-image: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
    background-size: 400%;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    animation: ${BackgroundAnimation} 45s ease infinite;
`








// const Container = ({ children }) => (
//     <div>
//         {children}
//     </div>
// )

export default Container