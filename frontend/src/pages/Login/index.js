import React, { Component } from "react";
import { Form, Input } from "@rocketseat/unform";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as AuthActions } from "../../store/ducks/auth";

import Logo from "../../assets/images/logo@3x.png";
import { Container, Login } from "./styles";

class SignIn extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired
  };
  handleSubmit = async data => {
    const { email, password } = data;
    const { signInRequest } = this.props;

    signInRequest(email, password);
  };
  render() {
    return (
      <Container>
        <Login>
          <Form onSubmit={this.handleSubmit}>
            <div>
              <img src={Logo} alt="Logo" />
            </div>
            <Input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="Senha secreta"
              required
            />
            <button type="submit">Entrar</button>
          </Form>
        </Login>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
