import React, { Component } from "react";
import { Segment, Button, Input } from "semantic-ui-react";

class MessageForm extends Component {
  render() {
    return (
      <Segment className="message__form">
        <Input
          fluid
          name="message"
          style={{ marginBottom: "0.7em" }}
          label={<Button icon={"add"} />}
          labelPosition='left'
          placeholder='write a message'
        />
        <Button.Group icon widths='2'>
            <Button
                color='orange'
                content='Add Replay'
                labelPosition='left'
                icon='edit'
            />
            <Button
                color='teal'
                content='Upload Media'
                labelPosition='right'
                icon='cloud upload'
            />
        </Button.Group>
      </Segment>
    );
  }
}

export default MessageForm;
