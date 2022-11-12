import { Container, Row, Col, Button } from 'react-bootstrap'

const Intro = () => {
  return (
    <div className='intro'>
      <Container className='text-white d-flex justify-content-center align-items-center'>
        <Row>
          <Col>
            <h1>Andromeda</h1>
            <h1>Watching Free Movie</h1>
            <div className='introBtn mt-4 text-center'>
              <Button variant='dark'>Watch Now!!</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}



export default Intro