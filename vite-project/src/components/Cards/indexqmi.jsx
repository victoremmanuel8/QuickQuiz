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
    const [progressQmi, setProgressQmi] = useState(0);
  
    useEffect(() => {
      const qmiProgress = localStorage.getItem('progressQmi') || 0;
  
      setProgressQmi(parseInt(qmiProgress));
    }, []);
    return (
        <>
            <GlobalStyle /> 
            <Card>
                <h3>Intermediário</h3>
                    <ProgressBar>
                        <Progress width={progressQmi} />
                    </ProgressBar>
                <svg width="188" height="168" viewBox="0 0 188 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M125.786 75.2727L144.5 109.502L163.516 75.2727H186.638L158.687 121.636L187.121 168H164.12L144.5 134.616L125.061 168H101.879L130.132 121.636L102.604 75.2727H125.786Z" fill="#2A292E" />
                    <path d="M96.7688 43.6051V64.983H0.177912V43.6051H96.7688ZM48.4734 108.449C44.1173 108.449 40.4004 106.934 37.3228 103.903C34.2925 100.826 32.7773 97.1089 32.7773 92.7528C32.7773 88.4915 34.2925 84.8456 37.3228 81.8153C40.4004 78.785 44.1173 77.2699 48.4734 77.2699C52.7347 77.2699 56.3806 78.785 59.4109 81.8153C62.4412 84.8456 63.9563 88.4915 63.9563 92.7528C63.9563 97.1089 62.4412 100.826 59.4109 103.903C56.3806 106.934 52.7347 108.449 48.4734 108.449ZM48.4734 31.2472C45.5851 31.2472 42.9336 30.5606 40.5188 29.1875C38.1514 27.767 36.2575 25.8731 34.837 23.5057C33.4639 21.0909 32.7773 18.4394 32.7773 15.5511C32.7773 11.2898 34.2925 7.64394 37.3228 4.61364C40.4004 1.58333 44.1173 0.0681753 48.4734 0.0681753C52.7347 0.0681753 56.3806 1.58333 59.4109 4.61364C62.4412 7.64394 63.9563 11.2898 63.9563 15.5511C63.9563 19.8598 62.4412 23.553 59.4109 26.6307C56.3806 29.7083 52.7347 31.2472 48.4734 31.2472Z" fill="#2A292E" />
                </svg>
            </Card>
        </>
    )
}

export default Cards