import styled from 'styled-components';
import logoWhite from '../../assets/Footer/logo_white.svg';

function Footer() {
  return (
    <FooterContainer>
      <Image src={logoWhite} alt="logo kasa" />
      <Text>© 2020 Kasa. All rights reserved</Text>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 13rem;
  padding: 2rem;
`;

const Image = styled.img`
  height: 4rem;

  @media (max-width: 1490px) {
    height: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 0;
  text-align: center;

  @media (max-width: 1490px) {
    font-size: 0.725rem;
  }
`;
export default Footer;
