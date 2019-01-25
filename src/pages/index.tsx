import * as React from 'react';

// components
import Page from '../components/Page';
import Hero from '../components/Hero';
import About from '../components/About';
import Application from '../components/forms/LaunchpadForm';
import Footer from '../components/Footer';
import IndexLayout from '../layouts';

// assets
import '../styles/bootstrap.css';
import '../styles/style.css';

import * as rocket from '../img/rocket.png';
import * as heroImage from '../img/exo/bg-55.png';


// data
const DATA = {
  en: {
    hero: {
      title: 'ExO Launchpad',
      description: 'Launchpad helps you build a new type of organization, an ExO or Exponential Organization. An ExO is a purpose-driven venture that leverages exponential technologies and a set of common attributes to grow and transform the world.',
      btnLabel: 'Join the Community',
    },
    about: {
      features: [
        {
          title: 'What is Launchpad?',
          description: () => 'The ExO Launchpad is a 5-day program that helps both innovators with a new idea and entrepreneurs with an early-stage startup to rapidly realize your vision.'
        },
        {
          title: 'Who is developping?',
          description: () => <>
            <a target="_blank" href="http://http://franciscopalao.com/">Francisco Palao</a> and <a target="_blank" href="http://www.salimismail.com/">Salim Ismail</a> are developing the ExO Launchpad with a global group of ExO practitioners and entrepreneurs around the world. Their previous book, <a href="http://www.exponentialtransformationbook.com/">TheExponentialTransformation</a>, is being adapted for education and entrepreneurship to help you launch quickly.
          </>
        },
        {
          title: 'Why you need this?',
          description: () => 'ExO Launchpad includes a number of our open tools and resources: ExO canvas, tools and methods allow anyone to tap into abundance and to manage it to scale exponentially as we deliver you educational resources, field experts and tools to help you build great exponential organizations.'
        }
      ]
    },
    application: {
      title: 'Do you want to join the collaborator community to build the ExO Launchpad?',
      fields: [
        {
          label: ''
        }
      ],
      messages: {
        success: '',
        error: ''
      }
    },
    footer: {
      links: [
        { text: 'Exponential Organizations', url: 'https://www.exponentialorgs.com/' },
        { text: 'Exponential Transformation', url: 'https://www.exponentialtransformationbook.com/' },
        { text: 'ExO Canvas', url: 'https://www.exocanvas.com/' },
        { text: 'OpenExO', url: 'https://www.exolever.com/' },
      ],
      copyright: (year = new Date().getFullYear()) =>
        <>
          Building Exponential Organizations - OpenExO® {year} <br /> <small>Copyright &copy; {year} All rights reserved</small>
        </>
    }
  }
};

class IndexPage extends React.Component<null, null> {
  render() {
    return (
      <IndexLayout>
        <Page>
          <Hero
            title={DATA.en.hero.title}
            subtitle={DATA.en.hero.description}
            backgroundImage={heroImage}
            image={rocket}
            cta={{ text: DATA.en.hero.btnLabel, target: '#' }}
          />
          <About content={DATA.en.about.features} />
          {/* <Application /> */}
          <Footer links={DATA.en.footer.links} copyright={DATA.en.footer.copyright} />
        </Page>
        <style>{`body { opacity: 1 }`}</style>
      </IndexLayout>
    )
  }
}

export default IndexPage;
