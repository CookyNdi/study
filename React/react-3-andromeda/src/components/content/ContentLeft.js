import { Nav } from 'react-bootstrap'

const ContentLeft = () => {
  return (
    <div>
      <Nav className="flex-column">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/">Explore</Nav.Link>
        <Nav.Link href="/">Topics</Nav.Link>
        <Nav.Link href="/">Answer</Nav.Link>
      </Nav>
    </div>
  )
}

export default ContentLeft