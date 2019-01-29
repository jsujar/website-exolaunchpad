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
      title: config.siteMetadata.title,
      description: config.siteMetadata.description,
      btnLabel: 'Join the Community',
    },
    about: {
      features: [
        {
          title: 'What is ExO Launchpad?',
          description: () => 'The ExO Launchpad is a 5-day program that helps both innovators with a new idea and entrepreneurs with an early-stage startup to rapidly realize your vision.',
          image: '/imgs/feature_1.png'
        },
        {
          title: 'Who is developing ExO Launchpad?',
          description: () => <>
            <a target="_blank" href="https://www.franciscopalao.com/">Francisco Palao</a> and <a target="_blank" href="http://www.salimismail.com/">Salim Ismail</a> are developing the ExO Launchpad with a global group of ExO practitioners and entrepreneurs around the world. Their previous book, <a href="http://www.exponentialtransformationbook.com/">TheExponentialTransformation</a>, is being adapted for education and entrepreneurship to help you launch quickly.
          </>,
          image: '/imgs/feature_2.png'
        },
        {
          title: 'Why you need ExO Launchpad?',
          description: () => 'ExO Launchpad includes a number of our open tools and resources: ExO canvas, tools and methods allow anyone to tap into abundance and to manage it to scale exponentially as we deliver you educational resources, field experts and tools to help you build great exponential organizations.',
          image: '/imgs/feature_3.png'
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
        linkedIn: 'LinkedIn URL',
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
        success: 'Thanks for joining our community!',
        error: 'Please try it later, again.'
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
          Building Exponential Organizations - OpenExO ® {year} <br /> <small>Copyright &copy; {year} All rights reserved</small>
        </>,
      credit: () =>
        <>
          Made with ❤ by <a target="_blank" href="https://www.exodevhub.com/">ExO DevHub</a>
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
            title={hero.title}
            subtitle={hero.description}
            backgroundImage="/imgs/bg_hero.jpg"
            image="/imgs/rocket.png"
            cta={{ text: hero.btnLabel, target: '#mailinglist' }}
          />
          <About content={about.features.slice(0, 2)} />
          <div id="mailinglist">
            <StudentForm
              title={students.title()}
              labels={form.labels}
              fields={form.fields}
              messages={form.messages}
            />
            <About content={about.features.slice(-1)} />
            <CollaboratorForm
              title={collaborators.title()}
              labels={form.labels}
              fields={form.fields}
              messages={form.messages}
            />
          </div>
          <Footer links={footer.links} copyright={footer.copyright()} credit={footer.credit()} />
        </Page>
        <style>
          {`
            body {
              transition: opacity ease 0.5s;
              opacity: 1;
            }
          `}
        </style>
      </IndexLayout>
    )
  }
}

export default IndexPage;
