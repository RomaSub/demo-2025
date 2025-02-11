import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

function App() {
  const navigate = useNavigate();
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await window.api.getPartners();
      setPartners(res);
    })();
  }, []);

  return (
    <Container className="h-100" fluid>
      <Row className="align-items-center">
        <Col></Col>
        <Col className="text-center text-nowrap">
          <h1>Партнеры</h1>
        </Col>
        <Col className="text-end">
          <Link to={"/create"}>
            <Button>{"Создать партнера"}</Button>
          </Link>
        </Col>
      </Row>

      <Row>
        {partners.map((partner) => (
          <Col key={partner.id} xs={12} className="mb-4">
            <Card
              onClick={() => {
                navigate("/update", { state: { partner } });
              }}
              style={{ cursor: "pointer" }}
            >
              <Card.Body>
                <Card.Title>
                  {partner.organization_type} | {partner.name}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {partner.ceo}
                </Card.Subtitle>
                <Card.Text>
                  {partner.phone}
                  <br />
                  Рейтинг: {partner.rating}
                </Card.Text>
                <Card.Text className="text-success">
                  Скидка: {partner.discount}%
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
