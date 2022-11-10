import { Card, Nav } from 'react-bootstrap'

const ContentMain = ({ postTitle }) => {

  return (
    postTitle.map((value, index) => {
      return (
        <div key={index.toString()}>
          <Card className='mt-3'>
            <Card.Body className=''>
              <Nav className="flex-column text-start">
                <h1>{value.postTitleName}</h1>
                <p>{value.postContentName}</p>
                <hr />
                <div className='d-flex justify-content-between pe-3 ps-3'>
                  <p>Posted By.CookyNdi</p>
                  <p>Komentar</p>
                </div>
              </Nav>
            </Card.Body>
          </Card>
        </div >
      )
    })
  )
}

export default ContentMain