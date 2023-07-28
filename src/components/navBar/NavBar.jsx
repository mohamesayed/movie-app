import { Container, Navbar, Form } from "react-bootstrap";
import logo from "../../assets/logo.png";
function NavBar({ search }) {
  const onSearch = (word) => {
    search(word);
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#bc6132" }}>
      <Container>
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="logo"
            style={{ width: "70px", height: "100%" }}
          />
        </Navbar.Brand>

        <Form className=" col-lg-10 col-md-9 col-sm-8">
          <Form.Control
            type="search"
            placeholder="search"
            style={{ height: "100%" }}
            className="ms-2"
            onChange={(e) => {
              onSearch(e.target.value);
            }}
          />
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;
