import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import 'modern-normalize';
import '../styles/normalize';

import LayoutRoot from '../components/LayoutRoot';
import LayoutMain from '../components/LayoutMain';

type StaticQueryProps = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
    };
  };
};

const IndexLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          <meta name="keywords" content="Exponential, bussiness, transform, change, rapid, tech" />
          <meta name="apple-mobile-web-app-title" content="ExO Launchpad" />
          <meta property="og:site_name" content={data.site.siteMetadata.title} />
          <meta property="og:description" content={data.site.siteMetadata.description} />
          <meta property="og:image" content="/imgs/social/banner.png" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:type" content="website" />
          <meta itemprop="name" content={data.site.siteMetadata.title} />
          <meta itemprop="url" content={data.site.siteMetadata.siteUrl} />
          <meta itemprop="description" content={data.site.siteMetadata.description} />
          <meta itemprop="thumbnailUrl" content="/imgs/social/banner.png" />
          <meta itemprop="image" content="/imgs/social/banner.png" />
          <meta name="twitter:title" content={data.site.siteMetadata.title} />
          <meta name="twitter:image" content="/imgs/social/banner.png" />
          <meta name="twitter:url" content={data.site.siteMetadata.siteUrl} />
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:description" content={data.site.siteMetadata.description} /> 
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
          <link rel="stylesheet" type="text/css" href="/css/bootstrap.css" preload="true" />
          <link rel="stylesheet" type="text/css" href="/css/style.css" preload="true" />
          <style>
            {
              `body {
                opacity: 0;
                transition: all ease 0.5s;
                margin: 0;
              }`
            }
          </style>
        </Helmet>
        <LayoutMain>{children}</LayoutMain>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-133345282-1"></script>
        <script  dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-133345282-1');
        ` }} />
        <script dangerouslySetInnerHTML={{ __html: `
          // Hotjar Tracking Code for https://www.exolaunchpad.com
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:1175389,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        ` }} />
      </LayoutRoot>
    )}
  />
);

export default IndexLayout;
