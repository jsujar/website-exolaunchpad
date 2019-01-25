import * as React from 'react';
import Section from '../components/Section';
import * as feature1st from '../img/exo/01+Connect-Icon.png';
import * as feature2nd from '../img/exo/01+Exponential-Icon.png';
import * as feature3rd from '../img/exo/01+Help-Icon.png';

interface Props {
  content: Array<{ title: string, description: Function }>
}

const imgs = [feature1st, feature2nd, feature3rd];

const About: React.SFC<Props> = ({ content }) => {
  return (
    <Section className="about-section spad">
      <div className="element">
        <div className="row">
        {content.map(({ title, description }, index) =>
          <div className="col-lg-4 col-md-6 feature-item">
            <img className="exo-feature-icon" src={imgs[index]} />
            <h4>{title}</h4>
            <p>{description()}</p>
          </div>
        )}
        </div>
      </div>
    </Section>
  )
};

export default About;
