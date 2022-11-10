import { Container, Row, Col } from 'react-bootstrap'
import React, { useState } from 'react'
import ContentLeft from './content/ContentLeft'
import ContentMain from './content/ContentMain'
import ContentRight from './content/ContentRight'

const ContentContainer = () => {

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [postTitleName, setPostTitleName] = useState("")
  const [postTitle, setPostTitle] = useState([])
  const [postContentName, setPostContentName] = useState("")
  const [postContent, setPostContent] = useState([])

  const addPost = () => {
    const dataPostTitle = { postTitleName, postContentName }
    setPostTitle([dataPostTitle, ...postTitle])
    setPostTitleName("")
  }
  const handleChangeTitle = (e) => {
    const dataTitle = e.target.value
    setPostTitleName(dataTitle)
  }

  const addPostContent = () => {
    const dataPostContent = { postContentName, postTitleName }
    setPostContent([dataPostContent, ...postContent])
    setPostContentName("")
  }

  const handleChangeContent = (e) => {
    const dataContent = e.target.value
    setPostContentName(dataContent)
  }

  return (
    <Container className='text-center'>
      <Row>
        <Col>
          <ContentLeft />
        </Col>
        <Col xs={6}>
          <ContentMain postTitle={postTitle} />
        </Col>
        <Col>
          <ContentRight handleShow={handleShow} show={show} handleClose={handleClose} handleChangeTitle={handleChangeTitle} handleChangeContent={handleChangeContent} postTitleName={postTitleName} addPost={addPost} postContentName={postContentName} addPostContent={addPostContent} />
        </Col>
      </Row>
    </Container>
  )
}

export default ContentContainer