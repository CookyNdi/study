import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import duneImage from '../assets/images/trending/dune.jpg'
import everythingImage from '../assets/images/trending/everything.jpg'
import infiniteImage from '../assets/images/trending/infinite.jpg'
import jokerImage from '../assets/images/trending/joker.jpg'
import morbiusImage from '../assets/images/trending/morbius.jpg'
import lightyearImage from '../assets/images/trending/lightyear.jpg'

const Trending = () => {
  return (
    <div id='trending'>
      <Container>
        <Row className='text-center text-white p-4'>
          <Col>
            <h1>TRENDING</h1>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md={3} className='mb-4'>
            <Card className="bg-dark text-white text-center listTrending">
              <Image src={duneImage} alt="Dune" className='imageTrending' />
              <Card.Title className='mt-2'>Dune</Card.Title>
              <Card.Text className='pb-3'>
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card className="bg-dark text-white text-center listTrending">
              <Image src={everythingImage} alt="Everything" className='imageTrending' />
              <Card.Title className='mt-2'>Everything</Card.Title>
              <Card.Text className='pb-3'>
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card className="bg-dark text-white text-center listTrending">
              <Image src={infiniteImage} alt="Infinite" className='imageTrending' />
              <Card.Title className='mt-2'>Infinite</Card.Title>
              <Card.Text className='pb-3'>
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card className="bg-dark text-white text-center listTrending">
              <Image src={jokerImage} alt="Joker" className='imageTrending' />
              <Card.Title className='mt-2'>Joker</Card.Title>
              <Card.Text className='pb-3'>
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card className="bg-dark text-white text-center listTrending">
              <Image src={morbiusImage} alt="Morbius" className='imageTrending' />
              <Card.Title className='mt-2'>Morbius</Card.Title>
              <Card.Text className='pb-3'>
                This is a wider card with supporting lead-in to additional content.
              </Card.Text>
            </Card>
          </Col>
          <Col md={3} className='mb-4'>
            <Card className="bg-dark text-white text-center listTrending">
              <Image src={lightyearImage} alt="Lightyear" className='imageTrending' />
              <Card.Title className='mt-2'>Lightyear</Card.Title>
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

export default Trending