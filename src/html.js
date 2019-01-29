import React from "react"
import PropTypes from "prop-types"
import config from "../gatsby-config"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
        <style>
            {`
              body {
                opacity: 0;
                margin: 0;
              }
            `}
          </style>
          <title>{config.siteMetadata.title}</title>
          <meta charSet="utf-8" />
          <meta http-equiv="Cache-control" content="public" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content={config.siteMetadata.description} />
          <meta name="keywords" content="Exponential, bussiness, transform, change, rapid, tech" />
          <meta name="apple-mobile-web-app-title" content="ExO Launchpad" />
          <meta property="og:site_name" content={config.siteMetadata.title} />
          <meta property="og:description" content={config.siteMetadata.description} />
          <meta property="og:image" content={config.siteMetadata.image} />
          <meta property="og:title" content={config.siteMetadata.title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={config.siteMetadata.siteUrl} />
          <meta itemprop="name" content={config.siteMetadata.title} />
          <meta itemprop="url" content={config.siteMetadata.siteUrl} />
          <meta itemprop="description" content={config.siteMetadata.description} />
          <meta itemprop="thumbnailUrl" content={config.siteMetadata.image} />
          <meta itemprop="image" content={config.siteMetadata.image} />
          <meta name="twitter:title" content={config.siteMetadata.title} />
          <meta name="twitter:image" content={config.siteMetadata.image} />
          <meta name="twitter:url" content={config.siteMetadata.siteUrl} />
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:description" content={config.siteMetadata.description} />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
          <link rel="stylesheet" href="/css/bootstrap.css" preload="true" />
          <link rel="stylesheet" href="/css/style.css" preload="true" />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
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
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
