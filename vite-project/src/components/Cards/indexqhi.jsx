import GlobalStyle from '../Colors';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';


const Card = styled.div`
height: 400px;
border-radius: 20px;
padding: 18px;
background-color: var(--fourth);
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
    const [progressQhi, setProgressQhi] = useState(0);

    useEffect(() => {
        const qhiProgress = localStorage.getItem('progressQhi') || 0;

        setProgressQhi(parseInt(qhiProgress));
    }, []);
    return (
        <>
            <GlobalStyle />
            <Card>
                <h3>Intermediário</h3>
                <ProgressBar>
                    <Progress width={progressQhi} />
                </ProgressBar>
                <svg width="131" height="130" viewBox="0 0 131 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.14 26L37.22 29.64C34.84 47.28 30.64 63.94 18.6 74.02L3.34 64.5C13.56 55.96 18.18 41.96 20.14 26ZM106.1 25.72L124.72 32.86C117.58 46.44 109.04 61.42 102.04 71.22L87.48 64.78C94.06 54.42 101.9 38.18 106.1 25.72ZM64.66 0.0999947H73.9V43.92C73.9 65.2 87.06 97.68 130.74 113.78C126.96 117.56 121.64 124.7 119.12 129.6C85.52 115.88 68.58 87.74 64.66 73.88C60.88 88.16 45.48 115.46 12.3 129.6C10.06 125.82 4.18 118.68 0.54 115.18C42.82 99.08 55.56 65.06 55.56 44.06V0.0999947H64.66Z" fill="#2A292E" />
                </svg>
            </Card>
        </>
    )
}

export default Cards