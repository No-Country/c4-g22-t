import ReactDOM from "react-dom";
import Container from "@mui/material/Container";
import AddFormLogin from "../components/form-login/index.jsx";
import AddWhereIAm from "../components/whereIAm/index.js";


function PageLogin() {
  return (
    <>
      <div id="app"></div>
      <AddWhereIAm whereIAm="My Account" />
      <Container maxWidth="lg">
        <AddFormLogin />
      </Container>
    </>
  );
}

export default PageLogin;
