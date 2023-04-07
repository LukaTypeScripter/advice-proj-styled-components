import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { GlobalStyle,Container,QuoteBoxInside,Advice,Quote,Divider,QuoteGenButton,GenImg } from './components/styled/styled';
import divider from "./images/pattern-divider-mobile.svg"
import dice from './images/icon-dice.svg'
function App() {
  const [text, setText] = useState<any>([]);
  const fetchAdvice = async () => {
    const res = await fetch("	https://api.adviceslip.com/advice");
    const data = await res.json();

    // console.log(data)

    setText(data.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);
const {id,advice} = text
  return (
  <>
  <GlobalStyle/>
  <Container>
    <QuoteBoxInside>
    <Advice>Advice #{id}</Advice>
    <Quote>{advice}</Quote>
   <Divider src={divider}/>
<QuoteGenButton onClick={fetchAdvice}>
<GenImg src={dice}/>
</QuoteGenButton>
  </QuoteBoxInside>
  </Container>
  </>
  )
}

const Button = styled.div `
  
`



export default App
