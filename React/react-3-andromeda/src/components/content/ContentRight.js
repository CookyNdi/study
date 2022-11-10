import { Button, Card, Nav, Form, Modal } from 'react-bootstrap'

const ContentRight = ({ handleShow, show, handleClose, handleChangeTitle, handleChangeContent, postTitleName, addPost, postContentName, addPostContent }) => {



  return (
    <div>
      <Button onClick={handleShow}>Start New Topic</Button>
      <Card className='mt-3'>
        <Card.Body>
          <h5 className='text-start'>Top User</h5>
          <p>CookyNdi</p>
          <p>CookyNdi</p>
          <p>CookyNdi</p>
          <p>CookyNdi</p>
          <p>CookyNdi</p>
          <hr></hr>
          <p>CookyNdi</p>
        </Card.Body>
      </Card>
      <Card className='mt-3'>
        <Card.Body>
          <Nav className="flex-flex Footer">
            <Nav.Link href="/">Help</Nav.Link>
            <Nav.Link href="/">Blog</Nav.Link>
            <Nav.Link href="/">Terms</Nav.Link>
            <Nav.Link href="/">Privacy Police</Nav.Link>
            <Nav.Link href="/">Advertise</Nav.Link>
          </Nav>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Posting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Get All Your Thoughts And Problems Out</Form.Label>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Tittle Here" onChange={handleChangeTitle} value={postTitleName} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control as="textarea" rows={3} placeholder="Write Every Thing Here" onChange={handleChangeContent} value={postContentName} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => { handleClose(); addPost(); addPostContent(); }}>Send</Button>
        </Modal.Footer>
      </Modal>
    </div >
  )
}

export default ContentRight