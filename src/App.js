import React from "react";
import moment from "moment";
import { Container, CardDeck, Row, Col } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import LeftSidebar from "./components/LeftSidebar";
import NewPostModal from "./components/NewPostModal";

function App() {
    const testData = {
        userName: "elkFriend",
        postContent: "This is really what I needed to hear right now.",
        songTitle: "Empire Ants",
        recordingTitle: "Plastic Beach",
        likes: 15,
        shares: 4,
        timePosted: moment().format("MMMM Do YYYY, h:mm:ss a"),
    };
    return (
        <div className="App">
            <Header />
            {/* <NewPostModal /> */}
            <Container fluid>
                <Row>
                    <Col>
                        <LeftSidebar />
                    </Col>
                    <Col xs={6}>
                        Main Content
                        <CardDeck>
                            <PostCard data={testData} />
                            <PostCard data={testData} />
                            <PostCard data={testData} />
                        </CardDeck>
                    </Col>
                    <Col>Right Sidebar</Col>
                </Row>
            </Container>
            <footer></footer>
        </div>
    );
}

export default App;
