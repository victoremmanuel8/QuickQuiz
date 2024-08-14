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
    const [progressQgb, setProgressQgb] = useState(0);

    useEffect(() => {
        const qgbProgress = localStorage.getItem('progressQgb') || 0;

        setProgressQgb(parseInt(qgbProgress));
    }, []);
    return (
        <>
            <GlobalStyle />
            <Card>
                <h3>Básico</h3>
                <ProgressBar>
                    <Progress width={progressQgb} />
                </ProgressBar>
                <svg width="96" height="156" viewBox="0 0 96 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M43.6308 155.455V0.909082H53.5313V155.455H43.6308ZM72.1855 50.3516C71.622 45.0793 69.2475 40.9742 65.0619 38.0362C60.9165 35.0982 55.5235 33.6293 48.8829 33.6293C44.2143 33.6293 40.2098 34.3336 36.8694 35.7422C33.529 37.1508 30.9733 39.0625 29.2025 41.4773C27.4317 43.892 26.5261 46.6489 26.4859 49.7479C26.4859 52.3236 27.0695 54.5573 28.2366 56.4489C29.444 58.3404 31.074 59.9503 33.1265 61.2784C35.1791 62.5663 37.453 63.6529 39.9482 64.5383C42.4435 65.4238 44.9589 66.1683 47.4944 66.772L59.0853 69.6697C63.7539 70.7564 68.2413 72.2254 72.5477 74.0767C76.8943 75.928 80.778 78.2623 84.199 81.0795C87.6601 83.8968 90.3969 87.2976 92.4092 91.282C94.4215 95.2663 95.4276 99.9349 95.4276 105.288C95.4276 112.532 93.5763 118.911 89.8737 124.425C86.171 129.898 80.8183 134.184 73.8154 137.283C66.8528 140.342 58.4213 141.871 48.5207 141.871C38.9018 141.871 30.5508 140.382 23.4674 137.404C16.4243 134.426 10.9106 130.079 6.92623 124.364C2.9821 118.649 0.849047 111.687 0.527078 103.477H22.5619C22.8838 107.783 24.212 111.365 26.5463 114.222C28.8805 117.08 31.9191 119.213 35.662 120.621C39.4452 122.03 43.671 122.734 48.3396 122.734C53.2094 122.734 57.4755 122.01 61.1379 120.561C64.8405 119.072 67.7383 117.019 69.8311 114.403C71.9239 111.747 72.9904 108.648 73.0306 105.107C72.9904 101.887 72.0446 99.2306 70.1933 97.1378C68.3419 95.0047 65.7461 93.2339 62.4056 91.8253C59.1054 90.3764 55.2418 89.0885 50.8147 87.9616L36.7487 84.3395C26.5664 81.7235 18.5171 77.7592 12.6009 72.4467C6.72499 67.094 3.78702 59.9905 3.78702 51.1364C3.78702 43.8518 5.75909 37.4728 9.70321 31.9993C13.6876 26.5258 19.1007 22.2798 25.9426 19.2614C32.7844 16.2026 40.5318 14.6733 49.1848 14.6733C57.9584 14.6733 65.6455 16.2026 72.2458 19.2614C78.8865 22.2798 84.0983 26.4856 87.8815 31.8785C91.6646 37.2313 93.6166 43.389 93.7373 50.3516H72.1855Z" fill="#2A292E" />
                </svg>
            </Card>
        </>
    )
}

export default Cards