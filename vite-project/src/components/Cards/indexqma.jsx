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
    const [progressQma, setProgressQmi] = useState(0);
  
    useEffect(() => {
      const qmaProgress = localStorage.getItem('progressQma') || 0;
  
      setProgressQmi(parseInt(qmaProgress));
    }, []);
    return (
        <>
            <GlobalStyle />
            <Card>
                <h3>Avançado</h3>
                    <ProgressBar>
                        <Progress width={progressQma} />
                    </ProgressBar>
                <svg width="174" height="178" viewBox="0 0 174 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M171.194 95.1818V110.203H83.6225V95.1818H171.194ZM115.316 95.1818V177H96.4599V95.1818H115.316ZM139.659 95.1818H158.463V153.19C158.463 155.498 158.836 157.256 159.581 158.463C160.327 159.67 161.357 160.505 162.671 160.967C163.985 161.393 165.512 161.606 167.252 161.606C168.495 161.606 169.684 161.535 170.821 161.393C171.957 161.251 172.898 161.109 173.644 160.967V176.041C172.046 176.503 170.181 176.929 168.051 177.32C165.956 177.746 163.612 177.959 161.02 177.959C154.556 177.959 149.372 176.201 145.466 172.685C141.595 169.17 139.659 163.257 139.659 154.947V95.1818Z" fill="#FEFEFE" />
                    <path d="M38.011 93.3274L66.4556 0.909088H83.1815L48.2915 110H35.5607L38.011 93.3274ZM28.3697 53.9631L41.5266 94.1797L43.6573 110H31.9386L10.8448 53.9631H28.3697ZM0.617543 69.8366V53.9631H27.3576V69.8366H0.617543Z" fill="#FEFEFE" />
                </svg>
            </Card>
        </>
    )
}

export default Cards