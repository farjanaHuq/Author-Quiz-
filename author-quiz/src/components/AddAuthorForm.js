import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button} from 'react-bootstrap';


class AddAuthorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onFieldChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    const author = [this.state.name, this.state.imageUrl];
    console.log(author);

  }

  render() {
    return (
      <div className="Form">
        <h1>Add Author</h1>
        <Form onSubmit={(event) => {event.persist();this.handleSubmit(event)}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Author Name</Form.Label>
            <Form.Control
              type="name"
              name="last name"
              value={this.state.name}
              onChange={this.onFieldChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              type="image url"
              name="Image Url"
              value={this.state.imageUrl}
              onChange={this.onFieldChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddAuthorForm;
