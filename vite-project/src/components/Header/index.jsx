import React from 'react';
import styled from 'styled-components';
import Logo from '../../../public/vite.svg'


const HeaderStyle = styled.header`
position: absolute;
top: 30px;
left: 50px;
`;

const Divstyle = styled.div`
width: 100%;
height: 50px;
`;

function Header() {
    return(
      <Divstyle>
        <HeaderStyle>
          <img src={Logo}/>
        </HeaderStyle>
      </Divstyle>
    )
}

export default Header