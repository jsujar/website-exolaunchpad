import * as React from 'react';
import styled from '@emotion/styled';

interface Props {
  title: string;
  subtitle?: string;
  cta: {
    text: string;
    target: string;
  };
  image?: string;
  backgroundImage: string;
}

const Hero: React.SFC<Props> = ({ title, subtitle, cta, image, backgroundImage }) => {

  const ContainerWithBackgroundImage = styled.section`
    background-image: url(${backgroundImage});
    background-color: #3DA8E0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    background-attachment: fixed;
  `;

  return (
    <ContainerWithBackgroundImage className="hero-section set-bg">
      <div className="container h-100">
        <div className="hero-content text-white">
          <div className="row">
            <div className="col-lg-8">
              <h1><img src="/imgs/social/logo.svg" alt={title} /></h1>
              <p>{subtitle}</p>
              <a href={cta.target} className="site-btn sb-line">{cta.text}</a>
            </div>
            <div className="col-lg-4 hero-rocket">
              <img src={image} alt={title} />
            </div>
          </div>
        </div>
      </div>
    </ContainerWithBackgroundImage>
  )
};


export default Hero;
