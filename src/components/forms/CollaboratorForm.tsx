import * as React from 'react';
import HighlightSection from '../HighlightSection';
import Form from './BaseForm';

interface Props {
  title: any;
  labels: any;
  fields: { groups: any };
  messages: any;
}

const CollaboratorForm: React.SFC<Props> = ({ title, labels, fields, messages }) => {
  return (
    <HighlightSection title={title} backgroundImage="imgs/bg_form.jpg">
      <Form
        labels={labels}
        messages={messages}
        enableName
        enableLinkedIn
        enableGroups={[fields.groups.launchpadCollaborators]}
      />
    </HighlightSection>
  )
};

export default CollaboratorForm;
