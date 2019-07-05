import * as React from 'react';
import serialize from 'form-serialize';
import jsonp from 'jsonp';
import styled from '@emotion/styled';
import Checkbox from './Checkbox';
import TextField from './TextField';
import Button from './Button';

const MC = {
  endpoint: 'https://exodevhub.us20.list-manage.com/subscribe/post-json',
  userId: 'ccfff1ccf7951d4ec0af22cac',
  formId: '8ca8438865',
  groupId: '189'
};

interface Labels {
  required: string;
  email: string;
  name: string;
  location: string;
  linkedIn: string;
  groups: string;
  button: string;
}

interface Messages {
  success: string;
  error: string;
};

interface Group {
  id: number;
  label: string;
  hidden: boolean;
}

interface Props {
  labels: Labels;
  messages: Messages;
  enableName?: boolean;
  enableLocation?: boolean;
  enableLinkedIn?: boolean;
  enableGroups?: Group[];
  groupTitle?: any;
}

interface State {
  complete: boolean;
  message: string;
}

const getUrl = (params: string) => `${MC.endpoint}?${params}`;

const getId = (() => {
  let id = 0;
  return () => {
    id += 1;
    return id;
  };
})();

const getMsg = (msg: string) => /^\d \-/.test(msg) ? msg.split('-')[1] : msg;

const Message = styled.div`
  text-align: center;
  font-size: 30px;
`;

const Group = styled.div`
  margin-bottom: 20px;
`;

const Body = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  color: #fff;
  font-size: 1em;
`;

const Required = styled.div`
  &:before {
    content: "*";
    position: relative;
    top: 5px;
    margin-right: 5px;
    color: #500e5d;
    font-size: 150%;
    font-weight: normal;
  }
`;

const Header = styled.div`
  position: absolute;
  right: 0;
  font-size: 12px;
`;

const Footer = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const Form = styled.form`
  display: block;
  text-align: left;
`;

class BaseForm extends React.Component<Props, State> {
  id = getId();

  state = {
    complete: false,
    message: ''
  };

  onSubmit = (event: any) => {
    const { messages } = this.props;
    event.preventDefault();
    const url = getUrl(serialize(event.target));

    jsonp(url, { param: 'c' }, (err, data)=> {
      const complete = (data && data.result === 'success');
      const message = complete
        ? messages.success
        : `Error: ${(data && getMsg(data.msg)) || messages.error}`;
      this.setState({ complete, message });
    })
  }

  render() {
    const { labels, enableName, enableLocation, enableLinkedIn, enableGroups, groupTitle } = this.props;
    const visibleGroups = enableGroups ? enableGroups.filter(group => !group.hidden): [];
    const hiddenGroups = enableGroups ? enableGroups.filter(group => group.hidden): [];

    if (this.state.complete) {
      return (
        <Body>
          <Message>{this.state.message}</Message>
        </Body>
      );
    }

    return (
      <Body>
        <Header>
          <Required>{labels.required}</Required>
        </Header>
        <Form
          method="post"
          name="mc-embedded-subscribe-form"
          target="_blank"
          onSubmit={this.onSubmit}
        >
          <input type="hidden" value="exolaunchpad.com" name="SITE" />
          <Group>
            <TextField
              id={`mce-EMAIL-${this.id}`}
              type="email"
              name="EMAIL"
              label={labels.email}
              defaultValue=""
              required
            />
          </Group>
          {enableName &&
            <Group>
              <TextField
                id={`mce-NAME-${this.id}`}
                name="NAME"
                label={labels.name}
                defaultValue=""
              />
            </Group>}
          {enableLocation &&
            <Group>
              <TextField
                id={`mce-LOCATION-${this.id}`}
                name="LOCATION"
                label={labels.location}
                defaultValue=""
              />
            </Group>}
          {enableLinkedIn &&
            <Group>
              <TextField
                id={`mce-LINKEDIN-${this.id}`}
                name="LINKEDIN"
                label={labels.linkedIn}
                defaultValue=""
              />
            </Group>}
          {visibleGroups.length > 0 &&
            <Group>
              {groupTitle && <div><label>{groupTitle}</label></div>}
              {visibleGroups.map(group =>
                <Checkbox
                  key={group.id}
                  id={`mce-group[${MC.groupId}][${group.id}]-${this.id}`}
                  name={`group[${MC.groupId}][${group.id}]`}
                  value={group.id}
                  label={group.label}
                />
              )}
            </Group>}
          {this.state.message &&
            <Message dangerouslySetInnerHTML={{ __html: this.state.message }} />}
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            {hiddenGroups.map(group =>
              <input key={group.id} type="hidden" value={group.id} name={`group[${MC.groupId}][${group.id}]`} readOnly />)}
            <input type="text" name={`b_${MC.userId}_${MC.formId}`} value="" readOnly />
            <input type="hidden" name="u" value={MC.userId} readOnly />
            <input type="hidden" name="id" value={MC.formId} readOnly />
          </div>
          <Footer>
            <Button label={labels.button} />
          </Footer>
        </Form>
      </Body>
    );
  }
}

export default BaseForm;
