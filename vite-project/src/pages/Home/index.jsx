import H from '../../components/Header';
import styled, { css } from 'styled-components';
import Banner from '../../../public/banner.svg'
import Card from '../../../public/card.svg'
import Icon from '../../../public/icon.svg'
import Dropdown from '../../components/DropDown';
import GlobalStyle from '../../components/Colors';
import { Link } from 'react-router-dom';

const SectionStyled = styled.section`
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: var(--third);
`;

const DivRowAround = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-top: 150px;
${props => props.$around100 && css`
    justify-content: space-around;
    width: 100%;
    p {
        font-size: 50px;
        font-weight: 700;
    }
  `}
`;

function Home() {

    return (
        <>
            <H />
            <GlobalStyle />
            <SectionStyled>
                <img src={Banner} />
                <DivRowAround $around100>
                    <p>O que está <br /> procurando?</p>
                    <Dropdown />
                    <img src={Icon} />
                </DivRowAround>
                <DivRowAround $around100>
                    <Link to="/Qmb">
                        <img src={Card} />
                    </Link>
                    <Link to="/Qmi">
                        <img src={Card} />
                    </Link>
                    <Link to="/Qma">
                        <img src={Card} />
                    </Link>
                </DivRowAround>
            </SectionStyled>
        </>
    )
}

export default Home
