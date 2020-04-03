import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import NewPostModal from "./components/NewPostModal";

function App() {
  const testData = {
    userName: "elkFriend",
    postContent: "This is really what I needed to hear right now.",
    songTitle: "Empire Ants",
    recordingTitle: "Plastic Beach",
    likes: 15,
    shares: 4,
    timePosted: Date.now()
  };
  return (
    <div className="App">
      <Header />
      <NewPostModal />
      <Container fluid>
        <Row>
          <Col>Left Sidebar</Col>
          <Col xs={6}>
            Main Content
            <PostCard data={testData} />
          </Col>
          <Col>Right Sidebar</Col>
        </Row>
      </Container>
      <footer></footer>
    </div>
  );
}

export default App;
