import GlobalStyle from '../Colors';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';


const Card = styled.div`
height: 400px;
border-radius: 20px;
padding: 18px;
background-color: var(--third);
overflow: hidden;
position: relative;
color: var(--primary);
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
  background-color: var(--primary);
  transition: width 0.3s ease-in-out;
  border-radius: 25px;
`;

function Cards() {
    const [progressQha, setProgressQha] = useState(0);

    useEffect(() => {
        const qhaProgress = localStorage.getItem('progressQha') || 0;

        setProgressQha(parseInt(qhaProgress));
    }, []);
    return (
        <>
            <GlobalStyle />
            <Card>
                <h3>Avançado</h3>
                <ProgressBar>
                    <Progress width={progressQha} />
                </ProgressBar>
                <svg width="100" height="110" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.437678 104V88.5384H20.1749V87.7429C14.1096 83.8319 9.30368 78.6615 5.75728 72.2315C2.21088 65.8016 0.437678 58.1454 0.437678 49.2628C0.437678 42.17 1.58114 35.6738 3.86808 29.7741C6.18815 23.8414 9.45283 18.7206 13.6621 14.4119C17.8714 10.0701 22.843 6.72253 28.5769 4.36932C34.3108 1.98295 40.6247 0.789769 47.5186 0.789769C54.4126 0.789769 60.7265 1.98295 66.4604 4.36932C72.1943 6.72253 77.1659 10.0701 81.3752 14.4119C85.5845 18.7206 88.8326 23.8414 91.1195 29.7741C93.4396 35.6738 94.5996 42.17 94.5996 49.2628C94.5996 58.1454 92.8264 65.8016 89.28 72.2315C85.7336 78.6615 80.9277 83.8319 74.8624 87.7429V88.5384H94.5996V104H55.6223V84.5114C59.467 82.9205 62.9306 80.4844 66.013 77.2031C69.1285 73.8887 71.5977 69.9446 73.4206 65.3707C75.2436 60.7969 76.155 55.8087 76.155 50.4062C76.155 44.142 74.9287 38.5241 72.476 33.5526C70.0565 28.581 66.6924 24.6534 62.3837 21.7699C58.075 18.8532 53.12 17.3949 47.5186 17.3949C43.3425 17.3949 39.4978 18.2401 35.9846 19.9304C32.5044 21.5876 29.4883 23.9077 26.9363 26.8906C24.3842 29.8736 22.3955 33.3703 20.9703 37.3807C19.5783 41.358 18.8823 45.6998 18.8823 50.4062C18.8823 55.8087 19.7937 60.7969 21.6167 65.3707C23.4396 69.9446 25.8922 73.8887 28.9746 77.2031C32.0901 80.4844 35.5703 82.9205 39.415 84.5114V104H0.437678Z" fill="white" />
                </svg>
            </Card>
        </>
    )
}

export default Cards