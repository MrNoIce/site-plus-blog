import React from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';

class Example extends React.Component {
  render() {
    return (
      <Form>
        <legend>_Send me a message</legend>
        <Input placeholder="_name" />
        <Input placeholder="_email" />
        <Textarea placeholder="_message" />
        <Button variant="raised">Submit</Button>
      </Form>
    );
  }
}
export default Example