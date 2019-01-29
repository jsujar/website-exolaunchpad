import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import 'modern-normalize';
import '../styles/normalize';

import LayoutRoot from '../components/LayoutRoot';
import LayoutMain from '../components/LayoutMain';

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
    render={() => (
      <LayoutRoot>
        <LayoutMain>{children}</LayoutMain>
      </LayoutRoot>
    )}
  />
);

export default IndexLayout;
