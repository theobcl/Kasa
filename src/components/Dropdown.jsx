import React, { useState } from 'react';
import styled from 'styled-components';

import arrow from '../assets/About/arrow-bottom.png';

function Dropdown({ title, description }) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownContainer>
      <DropdownMain>
        <DropdownTitle>{title}</DropdownTitle>
        <a href={`#dropdown-${title}`} onClick={() => setOpen(!open)}>
          <DropdownArrow
            className={`dropdown-open-${open}`}
            src={arrow}
            alt="Open this list"
          />
        </a>
      </DropdownMain>
      {open && <DropdownDesc>{description}</DropdownDesc>}
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  color: white;
  width: 80%;
  margin: 0 auto 2rem;
`;

const DropdownMain = styled.div`
  background-color: #ff6060;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1rem;
  border-radius: 0.3rem;
`;

const DropdownTitle = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

const DropdownArrow = styled.img`
  transition: transform 0.5s ease-out;

  &.dropdown-open-true {
    transform: rotate(180deg);
  }
`;

const DropdownDesc = styled.p`
  background-color: #f7f7f7;
  color: #ff6060;
  font-size: 1.5rem;
  font-weight: 200;
  padding: 2rem 1rem 1rem;
  margin: 0;
  border-radius: 0.3rem;
  position: relative;
  z-index: -1;
`;

export default Dropdown;
