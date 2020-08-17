import React from "react";
import { Card, CardDeck } from "react-bootstrap";

const RightSidebar = () => {
    return (
        <div id="right-sidebar">
            <h3>Popular Users</h3>
            <CardDeck style={{ flexDirection: "column" }}>
                <Card>
                    <Card.Body>
                        <div className="recommended-users">
                            <h4>Username</h4>
                            <p>user description should go here</p>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <div className="recommended-users">
                            <h4>Username</h4>
                            <p>user description should go here</p>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <div className="recommended-users">
                            <h4>Username</h4>
                            <p>user description should go here</p>
                        </div>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
};

export default RightSidebar;
