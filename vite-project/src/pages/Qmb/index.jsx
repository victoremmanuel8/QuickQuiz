import H from '../../components/Header';
import styled from 'styled-components';

const SectionStyled = styled.section`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: black;
`;

function Qmb() {

  return (
    <>
      <H/>
      <SectionStyled>
        <h1>Quiz matemática Básico</h1>
      </SectionStyled>
    </>
  )
}

export default Qmb
