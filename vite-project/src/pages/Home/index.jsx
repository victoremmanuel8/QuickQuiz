import H from '../../components/Header';
import styled, { css } from 'styled-components';
import Banner from '../../../public/banner.svg'
import Icon from '../../../public/icon.svg'
import Dropdown from '../../components/DropDown';
import GlobalStyle from '../../components/Colors';
import { Link } from 'react-router-dom';
import Cards from '../../components/Cards/indexqmb';
import Cards2 from '../../components/Cards/indexqmi';
import Cards3 from '../../components/Cards/indexqma';
import Cards4 from '../../components/Cards/indexqhb';
import Cards5 from '../../components/Cards/indexqhi';
import Cards6 from '../../components/Cards/indexqha';
import Cards7 from '../../components/Cards/indexqgb';
import Cards8 from '../../components/Cards/indexqgi';
import Cards9 from '../../components/Cards/indexqga';

const SectionStyled = styled.section`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 50px;
margin-bottom: 60px;
color: var(--third);
`;

const DivRowAround = styled.div`
display: flex;
flex-direction: row;
align-items: center;
${props => props.$around100 && css`
    justify-content: space-around;
    width: 100%;
    p {
        font-size: 50px;
        font-weight: 700;
    }
  `}
  ${props => props.$aroundBetween && css`
    justify-content: space-between;
    width: 100%;
    gap: 160px;
    flex-wrap: wrap;
  `}
`;

const Subtitulo = styled.h2`
font-size: 40px;
font-weight: 600;
margin-bottom: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--third);
`;

function Home() {
    return (
        <>
            <H />
            <GlobalStyle />
            <SectionStyled>
                <img src={Banner} />
                {/* <DivRowAround $around100>
                    <p>O que está <br /> procurando?</p>
                    <Dropdown />
                    <img src={Icon} />
                </DivRowAround> */}
                <div>
                    <Subtitulo>Matemática</Subtitulo>
                    <DivRowAround $aroundBetween>
                        <StyledLink to="/Qmb">
                            <Cards />
                        </StyledLink>
                        <StyledLink to="/Qmi">
                            <Cards2 />
                        </StyledLink>
                        <StyledLink to="/Qma">
                            <Cards3 />
                        </StyledLink>
                    </DivRowAround>
                </div>
                <div>
                    <Subtitulo>História</Subtitulo>
                    <DivRowAround $aroundBetween>
                        <StyledLink to="/Qhb">
                            <Cards4 />
                        </StyledLink>
                        <StyledLink to="/Qhi">
                            <Cards5 />
                        </StyledLink>
                        <StyledLink to="/Qha">
                            <Cards6 />
                        </StyledLink>
                    </DivRowAround>
                </div>
                <div>
                    <Subtitulo>Geografia</Subtitulo>
                    <DivRowAround $aroundBetween>
                        <StyledLink to="/Qgb">
                            <Cards7 />
                        </StyledLink>
                        <StyledLink to="/Qgi">
                            <Cards8 />
                        </StyledLink>
                        <StyledLink to="/Qga">
                            <Cards9 />
                        </StyledLink>
                    </DivRowAround>
                </div>
            </SectionStyled>
        </>
    )
}

export default Home
