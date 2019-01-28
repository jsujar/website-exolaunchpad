import * as React from 'react';
import Section from '../components/Section';

interface Column {
  title: string;
  description: Function;
  horizontal?: boolean;
  image: any;
}

interface Props {
  content: Column[]
}

const Vertical = ({ title, description, image, column }) =>
  <div className={`col-lg-${column}`}>
    <img src={image} alt="" />
    <div className="about-text">
      <h3>{title}</h3>
      <p>{description()}</p>
    </div>
  </div>;

const Horizontal = ({ title, description, image }) =>
  <>
    <div className="col-lg-6">
      <img src={image} alt=""/>
    </div>
    <div className="col-lg-6 about-text">
      <h3>{title}</h3>
      <p>{description()}</p>
    </div>
  </>;

const About: React.SFC<Props> = ({ content }) => {
  const column = Math.floor(12 / content.length);
  return (
    <Section className="spad">
      <div className="row">
      {content.map(({ title, description, horizontal, image }) => {
        const props = { title, description, image, column };
        return horizontal ?
          <Horizontal {...props} key={title} /> : <Vertical {...props} key={title} />
      })}
      </div>
    </Section>
  )
};

export default About;
