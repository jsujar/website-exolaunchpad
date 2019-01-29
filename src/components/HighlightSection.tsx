import * as React from 'react';
import styled from '@emotion/styled';

interface Props {
  children?: React.ReactNode;
  title?: string;
  tagline?: string;
  icon?: string;
  backgroundImage?: string;
}

const HighlightSection: React.SFC<Props> = ({ title, tagline, icon, backgroundImage, children }) => {

  const BackgroundImage = styled.section`
    background-image: url(${backgroundImage});
    background-attachment: fixed;
    background-position: 100% 100%;
    background-size: cover;
    margin: -4px 0;
  `;

  return (
    <BackgroundImage className="domain-search-section sc-about-page">
      <div className="container">
        <div className="section-title">
          <img src="/imgs/rocket.png" width="100" />
          <h2 className="text-white">{title}</h2>
          {tagline ? <p className="text-white">{tagline}</p> : null}
        </div>
        {children}
      </div>
    </BackgroundImage>
  )
};

export default HighlightSection;
