import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function ModalCustomer() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    point: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.post('http://localhost:5188/api/Customer/CreateCustomer', formData);
      console.log('Response from server:', response.data);
      handleClose(); 
      window.location.reload(); 
    } catch (error) {
      console.error('Error saving customer:', error);
    }
  };

  return (
    <>
      <button
        className="mt-2 p-2 bg-blue-500 text-white rounded"
        onClick={handleShow}
      >
        + Add New Customer
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Enter gender"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPoint">
              <Form.Label>Point</Form.Label>
              <Form.Control
                type="number"
                name="point"
                value={formData.point}
                onChange={handleChange}
                placeholder="Enter point"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCustomer;