import ReactDOM from "react-dom";
import Container from "@mui/material/Container";
import AddFormLogin from "../components/form-login/index.jsx";

function PageMyAccount() {
  return (
    <>
      <div id="app"></div>

      <Container maxWidth="lg">
        <AddFormLogin />
      </Container>
    </>
  );
}

export default PageMyAccount;
