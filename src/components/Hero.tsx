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
    background: url(${backgroundImage});
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
            <div className="col-lg-6 pr-0">
              <h2>{title}</h2>
              <p>{subtitle}</p>
              <a href={cta.target} className="site-btn sb-line">{cta.text}</a>
            </div>
          </div>
          {
            image ?
              <div className="hero-rocket">
                <img src={image} alt="" />
              </div> : null
          }
        </div>
      </div>
    </ContainerWithBackgroundImage>
  )
};


export default Hero;
