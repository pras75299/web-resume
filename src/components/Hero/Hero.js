import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/> my personal portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur
        Lorem ipsum dolor sit amet, consectetur
        Lorem ipsum dolor sit amet, consectetur
        Lorem ipsum dolor sit amet, consectetur
      </SectionText>
      <Button onClick={() => window.location = 'http://github.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;