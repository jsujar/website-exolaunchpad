import * as React from 'react';
import HighlightSection from '../HighlightSection';
import Form from './BaseForm';

interface Props {
  title: Function;
  labels: any;
  fields: { groups: any };
  messages: any;
}

const Application: React.SFC<Props> = ({ title, labels, fields, messages }) => {
  return (
    <HighlightSection title={title()} backgroundImage="/imgs/bg_form.jpg">
      <Form
        labels={labels}
        messages={messages}
        enableName
        enableLocation
        enableGroups={[
          fields.groups.movement,
          fields.groups.launchpadStudents
        ]}
      />
    </HighlightSection>
  )
};

export default Application;
