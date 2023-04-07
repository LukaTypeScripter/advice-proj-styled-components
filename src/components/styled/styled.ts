import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


const defaultThemes = {

    PrimaryColors: {
        LightCyan: 'hsl(193, 38%, 86%)',
        NeonGreen:'hsl(150, 100%, 66%)',
    },
    NeutralColors : {
        GrayishBlue:'hsl(217, 19%, 38%)',
        DarkGrayishBlue:'hsl(217, 19%, 24%)',
        DarkBlue:' hsl(218, 23%, 16%)',
    },
   
    FontWeight: {
        weight: '800'
    }
}

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap');
*,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
font-family: 'Manrope', sans-serif;
background-color: ${defaultThemes.NeutralColors.DarkBlue};
display: flex;
justify-content: center;
flex-direction: column;
}
`;

export const Container = styled.div`
    background-color: ${defaultThemes.NeutralColors.DarkGrayishBlue};
    max-width: 100%;
    border-radius: 1rem;
    margin-top: 7rem;
    @media only screen and (min-width: 1440px) {
        position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 550px;
}
`

export const QuoteBoxInside = styled.div `
text-align: center;
`
export const Advice = styled.p `
    color: ${defaultThemes.PrimaryColors.NeonGreen};
    font-size: 0.938rem;
    font-weight: ${defaultThemes.FontWeight.weight};
    line-height: 119.7%;
   padding-top: 35px;
   @media only screen and (min-width: 1440px) {
        font-size: 1.5rem;
    }
`
export const  Quote = styled.p `
    margin: 2.5rem;
    color: ${defaultThemes.PrimaryColors.LightCyan};
    min-width: 250px;
    font-size: 1.375rem;
    @media only screen and (min-width: 1440px) {
        font-size: 2.5rem;
    }
`
export const Divider = styled.img `
width: 90%;
height: 1.95rem;
margin-bottom: 50px;
outline: none;
@media only screen and (min-width: 1440px) {
       height: 2.3rem;
}

`

export const QuoteGenButton = styled.button `
    background-color:${defaultThemes.PrimaryColors.NeonGreen} ;
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
    outline: none;
    border: none;
    position: relative;
    top: 30px;
    @media only screen and (min-width: 1440px) {
        width: 4.5rem;
    height: 4.5rem;
    }
`
export const GenImg = styled.img `
    background-color: ${defaultThemes.PrimaryColors.NeonGreen};
    cursor: pointer;
    background-image: url(images/icon-dice.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    
    
    
` 