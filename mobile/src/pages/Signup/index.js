import React, { Component } from "react";
import { Platform, KeyboardAvoidingView } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SignupActions } from "../../store/ducks/signup";

import {
  Container,
  Background,
  Logo,
  Input,
  Button,
  ButtonText,
  BlackScreen,
  Form,
  ErrorText,
  ErrorView
} from "./styles";
import api from "../../services/api";

// import { Container } from './styles';

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
  };
  handleSignup = () => {
    const { username, email, password, password_confirmation } = this.state;
    const { createAccountRequest } = this.props;

    createAccountRequest({ username, email, password, password_confirmation });
  };
  render() {
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
              underlineColorAndroid="transparent"
              autoFocus
              onSubmitEditing={() => this.emailInput.focus()}
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nome completo"
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
            <Input
              underlineColorAndroid="transparent"
              keyboardType="email-address"
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Seu email"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
              ref={el => {
                this.emailInput = el;
              }}
              onSubmitEditing={() => this.passwordInput.focus()}
            />
            <Input
              underlineColorAndroid="transparent"
              returnKeyType="next"
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Sua senha"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              ref={el => {
                this.passwordInput = el;
              }}
              onSubmitEditing={() => this.passwordConfirmationInput.focus()}
            />
            <Input
              underlineColorAndroid="transparent"
              returnKeyType="send"
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Sua senha novamente"
              onChangeText={password_confirmation =>
                this.setState({ password_confirmation })
              }
              value={this.state.password_confirmation}
              ref={el => {
                this.passwordConfirmationInput = el;
              }}
              onSubmitEditing={() => this.handleSignup}
            />
            <Button onPress={this.handleSignup} background="red">
              <ButtonText>Criar conta</ButtonText>
            </Button>
            <Button
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
              background="transparent"
            >
              <ButtonText>Já tenho login</ButtonText>
            </Button>
          </Form>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => (console.tron.log(state), {});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SignupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
