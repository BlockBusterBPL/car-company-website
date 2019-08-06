import React from "react";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    ListGroupItem,
    ListGroup,
    Container,
    Row,
    Col,
    CardImg,
    CardText
  } from "reactstrap";

  class CarsList extends React.Component {
    render() {
        return (
            <>
                <ExamplesNavbar />
                <div className="wrapper">
                <section className="section section-lg">
                <section className="section">
                <Container className="">
                    <Row>
                        <Col className="col-sm">
                            <Card>
                            <CardImg />
                                <CardBody className="text-center">
                                    <CardTitle className="mb-1"><h2>J37-X</h2></CardTitle>
                                    <CardText>
                                        The brand-new jet turbine powered supercar offers unparalleled
                                        performance and blah blah blah...
                                        </CardText>
                                    <Button>Build and Price</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="col-sm">
                        <Card>
                            <CardImg />
                                <CardBody className="text-center">
                                    <CardTitle className="mb-1"><h2>J37-X</h2></CardTitle>
                                    <CardText>
                                        The brand-new jet turbine powered supercar offers unparalleled
                                        performance and blah blah blah...
                                        </CardText>
                                    <Button>Build and Price</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="col-sm">
                        <Card>
                            <CardImg />
                                <CardBody className="text-center">
                                    <CardTitle className="mb-1"><h2>J37-X</h2></CardTitle>
                                    <CardText>
                                        The brand-new jet turbine powered supercar offers unparalleled
                                        performance and blah blah blah...
                                        </CardText>
                                    <Button>Build and Price</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                </section>
                </section>
                </div>
            </>
        );
    }
  }
  export default CarsList;