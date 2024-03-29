import styled from 'styled-components';

import React from 'react';
import Banner from '../components/Banner';
import aboutBanner from '../assets/About/about-banner.jpg';
import Dropdown from '../components/Dropdown';
import AboutList from '../data/about.json';

function About() {
  return (
    <div>
      <Banner image={aboutBanner} text="" />
      <DropdownContainer>
        {AboutList.map((about) => (
          <Dropdown
            key={`key-${about.title}`}
            title={about.title}
            description={about.description}
          />
        ))}
      </DropdownContainer>
    </div>
  );
}

const DropdownContainer = styled.div`
  width: 80%;
  margin: auto;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export default About;
