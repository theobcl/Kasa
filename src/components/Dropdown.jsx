import React, { useState } from 'react';
import styled from 'styled-components';

import arrow from '../assets/About/arrow-bottom.png';

function Dropdown({ title, description }) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownContainer>
      <DropdownTitle>
        <div>{title}</div>
        <a href={`#dropdown-${title}`} onClick={() => setOpen(!open)}>
          <img src={arrow} alt="Ouvrir cette liste" />
        </a>
      </DropdownTitle>
      {open && <DropdownDesc>{description}</DropdownDesc>}
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  color: white;
  width: 80%;
  margin: 0 auto 2rem;
`;

const DropdownTitle = styled.div`
  background-color: #ff6060;
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 1rem;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  z-index: 2;
`;

const DropdownDesc = styled.div`
  background-color: #f7f7f7;
  color: #ff6060;
  font-size: 1.5rem;
  padding: 2rem 1rem;
  border-radius: 0.3rem;
  z-index: 1;
`;

export default Dropdown;
