import GlobalStyle from '../Colors';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';


const Card = styled.div`
height: 400px;
border-radius: 20px;
padding: 18px;
background-color: var(--secondary);
overflow: hidden;
position: relative;
 h3 {
    font-size: 35px;
    font-weight: 600;
 }
 svg {
    position: absolute;
    bottom: 50px;
    right: 25px;
 }
`;
const ProgressBar = styled.div`
  width: 300px;
  background-color: var(--backProg);
  border-radius: 25px;
  overflow: hidden;
  margin-top: 20px;
`;

const Progress = styled.div`
  height: 15px;
  width: ${props => props.width}%;
  background-color: var(--third);
  transition: width 0.3s ease-in-out;
  border-radius: 25px;
`;

function Cards() {
    const [progressQmb, setProgressQmb] = useState(0);

    useEffect(() => {
        const qmbProgress = localStorage.getItem('progressQmb') || 0;

        setProgressQmb(parseInt(qmbProgress));
    }, []);
    return (
        <>
            <GlobalStyle />
            <Card>
                <h3>Básico</h3>
                    <ProgressBar>
                        <Progress width={progressQmb} />
                    </ProgressBar>
                <svg width="187" height="137" viewBox="0 0 187 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M120.205 136.547V28.4219H144.736V136.547H120.205ZM78.4082 94.75V70.2187H186.533V94.75H78.4082Z" fill="#2A292E" />
                    <path d="M72.5254 0.718748V24H0.494142V0.718748H72.5254Z" fill="#2A292E" />
                </svg>
            </Card>
        </>
    )
}

export default Cards