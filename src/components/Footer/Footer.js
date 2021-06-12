import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="https://github.com/">9818020030</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:singh.prashantking@gmail.com">singh.prashantking@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Lorem ipsum lorem in </Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/pras75299">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://github.com">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://github.com/pras75299">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
