import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../Colors';

const DropDown = styled.div `
  position: relative;
  display: inline-block;
  font-weight: 600;
  button {
    background-color: #DDDDDD;
    color: var(--third);
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 30px;
    font-weight: 600;
    border-radius: 10px;
  }
  ul {
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    border-radius: 10px;
  }
  li {
    padding: 12px 16px;
    cursor: pointer;
        &:hover {
            background-color: #f1f1f1;
        }
  }
`;

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const options = ['Matemática', 'Geografia', 'História'];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropDown>
    <GlobalStyle/>
      <button onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || 'Selecione... ▼'}
      </button>
      {isOpen && (
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </DropDown>
  );
}

export default Dropdown;
