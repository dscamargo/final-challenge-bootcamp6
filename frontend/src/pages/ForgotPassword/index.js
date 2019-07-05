import React, { Component, Fragment } from "react";
import { Form, Input } from "@rocketseat/unform";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ForgotPasswordActions } from "../../store/ducks/forgotPassword";

import Header from "../../components/Header";
import { Container, Login } from "./styles";
import Logo from "../../assets/images/logo.svg";

class ForgotPassword extends Component {
  handleSubmit = (data, { resetForm }) => {
    const { password, password_confirmation } = data;
    const { location, getNewPasswordRequest } = this.props;
    const [, token] = location.search.split("=");

    getNewPasswordRequest({ token, password, password_confirmation });
    resetForm();
  };
  render() {
    return (
      <Fragment>
        <div style={{ position: "absolute", zIndex: 0, width: "100%" }}>
          <Header title="Recuperação de senha" />
        </div>
        <Container>
          <Login>
            <Form onSubmit={this.handleSubmit}>
              <div>
                <img src={Logo} alt="Logo" />
              </div>
              <Input name="password" type="password" placeholder="Sua senha" />
              <Input
                name="password_confirmation"
                type="password"
                placeholder="Senha senha novamente"
              />
              <button type="submit">Recuperar</button>
            </Form>
          </Login>
        </Container>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ForgotPasswordActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(ForgotPassword);
