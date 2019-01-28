import * as React from 'react';
import config from '../../gatsby-config';
// components
import Page from '../components/Page';
import Hero from '../components/Hero';
import About from '../components/About';
import StudentForm from '../components/forms/StudentForm';
import CollaboratorForm from '../components/forms/CollaboratorForm';
import Footer from '../components/Footer';
import IndexLayout from '../layouts';

// data
const DATA = {
  en: {
    hero: {
      description: config.siteMetadata.description,
      btnLabel: 'Join the Community',
    },
    about: {
      features: [
        {
          title: 'What is ExO Launchpad?',
          description: () => 'The ExO Launchpad is a 5-day program that helps both innovators with a new idea and entrepreneurs with an early-stage startup to rapidly realize your vision.',
          image: require('../img/exo/feature-1.jpg')
        },
        {
          title: 'Who is developping ExO Launchpad?',
          description: () => <>
            <a target="_blank" href="https://franciscopalao.com/">Francisco Palao</a> and <a target="_blank" href="http://www.salimismail.com/">Salim Ismail</a> are developing the ExO Launchpad with a global group of ExO practitioners and entrepreneurs around the world. Their previous book, <a href="http://www.exponentialtransformationbook.com/">TheExponentialTransformation</a>, is being adapted for education and entrepreneurship to help you launch quickly.
          </>,
          image: require('../img/exo/feature-2.jpg')
        },
        {
          title: 'Why you need ExO Launchpad?',
          description: () => 'ExO Launchpad includes a number of our open tools and resources: ExO canvas, tools and methods allow anyone to tap into abundance and to manage it to scale exponentially as we deliver you educational resources, field experts and tools to help you build great exponential organizations.',
          image: require('../img/exo/feature-3.jpg'),
          horizontal: true
        }
      ]
    },
    form: {
      labels: {
        required: 'indicates required',
        submit: 'Subscribe',
        email: 'Email Address',
        name: 'Name',
        location: 'Preferred Location of Summit/Workshop',
        linkedIn: 'Linked in URL',
        button: 'Subscribe'
      },
      fields: {
        groups: {
          movement: { id: 4, label: 'Join the general ExO Movement email list' }, 
          launchpadStudents: { id: 8, hidden: true }, 
          launchpadCollaborators: { id:1, hidden: true} 
        }
      },
      messages: {
        success: 'Thanks for joining our community',
        error: 'Error'
      }
    },
    students: {
      title: () => <>Do you want to join an upcoming<br />ExO Launchpad class?</>
    },
    collaborators: {
      title: () => <>Do you want to join the collaborator community<br />to build the ExO Launchpad?</>
    },
    footer: {
      links: [
        { text: 'Exponential Organizations', url: 'https://www.exponentialorgs.com/' },
        { text: 'Exponential Transformation', url: 'https://www.exponentialtransformationbook.com/' },
        { text: 'ExO Canvas', url: 'https://www.exocanvas.com/' }
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
    const { hero, about, form, students, collaborators, footer } = DATA.en;
    return (
      <IndexLayout>
        <Page>
          <Hero
            subtitle={hero.description}
            backgroundImage="/imgs/bg_hero.jpg"
            image="/imgs/rocket.png"
            cta={{ text: hero.btnLabel, target: '#mailinglist' }}
          />
          <About content={about.features.slice(0, 2)} />
          <div id="mailinglist">
            <StudentForm
              title={students.title}
              labels={form.labels}
              fields={form.fields}
              messages={form.messages}
            />
            <About content={about.features.slice(-1)} />
            <CollaboratorForm
              title={collaborators.title}
              labels={form.labels}
              fields={form.fields}
              messages={form.messages}
            />
          </div>
          <Footer links={footer.links} copyright={footer.copyright} />
        </Page>
        <style>{`body { opacity: 1 }`}</style>
      </IndexLayout>
    )
  }
}

export default IndexPage;
