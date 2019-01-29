import * as React from 'react';

interface Props {
  links?: Array<{ text: string; url: string }>;
  copyright: any;
  credit: any;
}

const Footer: React.SFC<Props> = ({ links = [], copyright, credit }) =>
  <footer className="set-bg exo-footer">
    <a href="https://www.exolever.com/" target="_blank">
      <img className="core-logo" alt="OpenExO" src="/imgs/social/openexo_logo_white.png" />
    </a>
		<div className="footer-widget">
			<ul>
        {links.map(link => <li key={link.url}><a href={link.url} target="_blank">{link.text}</a></li>)}
      </ul>
    </div>
    <div className="container">
      <div className="copyright">{copyright}</div>
      <small className="copyright love">{credit}</small>
    </div>
  </footer>;

export default Footer;
