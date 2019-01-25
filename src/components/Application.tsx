import * as React from 'react';
import HighlightSection from './HighlightSection';
import LaunchpadForm from './forms/LaunchpadForm';

interface Props {
  content: Array<{ title: string, description: Function }>
}

const Application: React.SFC<Props> = ({ title }) => {
  return (
    <HighlightSection title={title} tagline="" backgroundImage={formBg}>
      <LaunchpadForm />
    </HighlightSection>

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
