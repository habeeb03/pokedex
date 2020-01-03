import React, { Component } from "react";

import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

class AddToCat extends Component {
  //   const [show, setShow] = useState(false);
  state = {
    show: false
  };

  handleClose = () => {
    this.setState({
      show: false
    });
  };
  handleShow = () => {
    this.setState({
      show: true
    });
  };

  submitForm = (e) => {
      e.preventDefault()
      console.log('jkjsdfkl ')
  }

  render() {
    return (
      <>
        <Button variant="primary" className="btn-bot" onClick={this.handleShow}>
          Add to category
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add to Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              method="POST"
              action="http://127.0.0.1:8000/api/v1/add-to"
              onSubmit={(e)=> this.submitForm}
            >
              <p>Select a category</p>
              <select className="form-control">
                {this.props.categories.map(c => (
                  <option value={c.id}>{c.name}</option>
                ))}
              </select>
              <input
                type="hidden"
                name="pokes[]"
                value={this.props.pokesToCat}
                id=""
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={this.handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddToCat;
