import React from "react";
import { Button, Form, FormGroup, Input, Label, Row,Col} from "reactstrap";

export default function NovaPrijava()
{
    return(
     <>
     <h1>Nova prijava</h1>
     <Row>
        <Col md="3"></Col>
        <Col md="6">
        <Form>
            <FormGroup>
                <Label>Ime i prezime</Label>

                <Input type="text" name="imeprezime"></Input>

            </FormGroup>
            <FormGroup>
                <Label>Email:</Label>
                <Input type="email" name="email"></Input>
            </FormGroup>
            <FormGroup>
                <Label>Opis prijave:</Label>
                <Input type="textarea" name="opisprijava"></Input>
            </FormGroup>
            <div className="text-center">
                <Button color="success" size="lg">Potvrdi</Button>
            </div>
        </Form>
        </Col>
     </Row>
     </>
    )
}


























