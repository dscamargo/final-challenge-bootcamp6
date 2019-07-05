import React, { Component } from "react";
import { Platform, KeyboardAvoidingView } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as AuthActions } from "../../store/ducks/auth";

import NavigationService from "../../services/navigation";

import {
  Container,
  Background,
  Logo,
  Input,
  Button,
  ButtonText,
  BlackScreen,
  Form,
  ErrorText
} from "./styles";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleForgotPassword = () => {
    NavigationService.navigate("ForgotPassword");
  };
  handleCreateAccount = () => {
    NavigationService.navigate("Signup");
  };
  handleSubmit = async () => {
    const { email, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest(email, password);
  };
  render() {
    const { email, password } = this.state;
    return (
      <KeyboardAvoidingView
        style={{ flexGrow: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      >
        <Container>
          <BlackScreen />
          <Background source={require("../../assets/fundo-mobile.png")} />

          <Form>
            <Logo source={require("../../assets/logo3x.png")} />
            <Input
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              autoFocus
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Seu email"
              onChangeText={email => this.setState({ email })}
              value={email}
              onSubmitEditing={() => this.passwordInput.focus()}
            />
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Senha secreta"
              secureTextEntry
              underlineColorAndroid="transparent"
              returnKeyType="send"
              onChangeText={password => this.setState({ password })}
              value={password}
              ref={el => {
                this.passwordInput = el;
              }}
              onSubmitEditing={() => this.handleSubmit}
            />
            <Button onPress={this.handleSubmit} background="red">
              <ButtonText>Entrar</ButtonText>
            </Button>
            <Button onPress={this.handleCreateAccount} background="transparent">
              <ButtonText>Criar conta gratuita</ButtonText>
            </Button>
            <Button
              onPress={this.handleForgotPassword}
              background="transparent"
            >
              <ButtonText>Esqueceu sua senha ?</ButtonText>
            </Button>
          </Form>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
