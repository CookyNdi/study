import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import antmanImage from '../assets/images/superhero/antman.jpg'
import avengerImage from '../assets/images/superhero/avenger.jpg'
import batmanImage from '../assets/images/superhero/batman.jpg'
import robinhoodImage from '../assets/images/superhero/robinhood.jpg'
import supermanImage from '../assets/images/superhero/superman.jpg'
import spidermanImage from '../assets/images/superhero/spiderman-cover.jpg'

const Superhero = () => {
  return (
    <div id='superhero'>
      <Container>
        <Row className='text-center text-white p-4'>
          <Col>
            <h1>TRENDING</h1>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md={3} className='mb-4'>
            <Card className="bg-dark text-white text-center listTrending">
              <Image src={antmanImage} alt="Antman" className='imageTrending' />
              <Card.Title className='mt-2'>Antman</Card.Title>
              <Card.Text className='pb-3'>
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card className="bg-dark text-white text-center listTrending">
              <Image src={avengerImage} alt="Avenger" className='imageTrending' />
              <Card.Title className='mt-2'>Avenger</Card.Title>
              <Card.Text className='pb-3'>
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card className="bg-dark text-white text-center listTrending">
              <Image src={batmanImage} alt="Batman" className='imageTrending' />
              <Card.Title className='mt-2'>Batman</Card.Title>
              <Card.Text className='pb-3'>
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card className="bg-dark text-white text-center listTrending">
              <Image src={robinhoodImage} alt="Robin Hood" className='imageTrending' />
              <Card.Title className='mt-2'>Robin Hood</Card.Title>
              <Card.Text className='pb-3'>
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card className="bg-dark text-white text-center listTrending">
              <Image src={supermanImage} alt="Superman" className='imageTrending' />
              <Card.Title className='mt-2'>Superman</Card.Title>
              <Card.Text className='pb-3'>
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card className="bg-dark text-white text-center listTrending">
              <Image src={spidermanImage} alt="Spiderman" className='imageTrending' />
              <Card.Title className='mt-2'>Spiderman</Card.Title>
              <Card.Text className='pb-3'>
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default Superhero