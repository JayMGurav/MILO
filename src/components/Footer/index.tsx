import NextLink from 'next/link';

import {
  FooterContainer,
  FooterDiv,
  FooterFlexDiv,
  FooterBrandDiv,
  FooterMenuList,
} from './Footer.styles';

function Footer() {
  return (
    <FooterContainer>
      <FooterDiv>
        <FooterFlexDiv>
          <FooterBrandDiv>
            <strong>🤝MILO</strong>
            <p>© Milo {new Date().getFullYear()}.</p>
          </FooterBrandDiv>
        </FooterFlexDiv>
        <FooterFlexDiv>
          <FooterMenuList>
            <NextLink href="/about">
              <a>About</a>
            </NextLink>
            <NextLink href="/about">
              <a>Privacy</a>
            </NextLink>
            <NextLink href="/about">
              <a>Terms</a>
            </NextLink>
            <NextLink href="/about">
              <a>Contact us</a>
            </NextLink>
          </FooterMenuList>
        </FooterFlexDiv>
      </FooterDiv>
    </FooterContainer>
  );
}

export default Footer;
