import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

export default function UpdatePartner() {
  const location = useLocation();
  const [partner, setPartner] = useState(location.state.partner);

  async function submitHandler(e) {
    e.preventDefault();
    const updPartner = {
      id: partner.id,
      type: e.target.type.value,
      name: e.target.name.value,
      ceo: e.target.ceo.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      rating: e.target.rating.value
    };
    await window.api.updatePartner(updPartner);
    setPartner(updPartner);
    document.querySelector('form').reset();
  }

  return (
    <Container className="h-100 mt-2" fluid>
      <Row className="align-items-center">
        <Col>
          <Link to={"/"}>
            <Button variant="secondary">{"<-- Назад"}</Button>
          </Link>
        </Col>
        <Col className="text-center text-nowrap">
          <h1>Обновить партнера</h1>
        </Col>
        <Col></Col>
      </Row>

      <Row className="justify-content-center mb-3">
        <Col>
          <Form
            onSubmit={submitHandler}
            className="border rounded p-3">
            <Form.Group className="mb-3" controlId="name" >
              <Form.Label>Наименование:</Form.Label>
              <Form.Control type="text" required defaultValue={partner.name}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="type">
              <Form.Label>Тип партнера:</Form.Label>
              <Form.Select required defaultValue={partner.type}>
                <option value="ЗАО">ЗАО</option>
                <option value="ООО">ООО</option>
                <option value="ОАО">ОАО</option>
                <option value="ПАО">ПАО</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="rating">
              <Form.Label>Рейтинг:</Form.Label>
              <Form.Control type="number" step="1" min="0" max="100" required defaultValue={partner.rating} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address" defaultValue={partner.address} >
              <Form.Label>Адрес:</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ceo">
              <Form.Label>ФИО директора:</Form.Label>
              <Form.Control type="text" required defaultValue={partner.ceo} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Телефон:</Form.Label>
              <Form.Control type="tel" required defaultValue={partner.phone} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email компании:</Form.Label>
              <Form.Control type="email" required defaultValue={partner.email}/>
            </Form.Group>

            <Button type="submit">Обновить партнера</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
