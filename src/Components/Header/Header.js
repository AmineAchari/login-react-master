import "./Header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {

  
  return (
    <>
      <Navbar id="high" bg="success" variant="success">
        <Container>
          <Navbar.Brand href="#home">
            <img src="" alt="" />
          </Navbar.Brand>
          <div>
            {true ? <div>
              Achari Amine 
              <button className="btn btn-danger btn-sm m-3">Deconnecter</button>
            </div> : 'Autentifier votre compte'} 
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
