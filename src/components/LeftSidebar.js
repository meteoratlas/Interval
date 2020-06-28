import React from "react";
import { Nav } from "react-bootstrap";

const LeftSidebar = () => {
    return (
        <>
            <Nav
                style={{
                    backgroundColor: "#ddd",
                    minHeight: "100vh",
                }}
                variant="pills"
                // defaultActiveKey="/home"
                className="flex-column"
            >
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link eventKey="explore">Explore</Nav.Link>
                <Nav.Link eventKey="profile">Profile</Nav.Link>
                <Nav.Link eventKey="favourites">Favourites</Nav.Link>
            </Nav>
        </>
    );
};

export default LeftSidebar;
