import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

function NavBar() {
    return (
        <div>
        <Navbar style={{
            backgroundColor: "#424242",
        }}>
            <Navbar.Brand href="#home">Estuary</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="base-navbar" className="d-flex justify-content-end">
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#documentation">Doc</Nav.Link>
                    <Nav.Link href="#demos">Demos</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="ml-auto"/>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default NavBar;