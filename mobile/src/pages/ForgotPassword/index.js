import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ForgotPasswordActions } from "../../store/ducks/forgotPassword";

import { KeyboardAvoidingView, Platform } from "react-native";

import {
  Logo,
  BlackScreen,
  Container,
  Background,
  Input,
  Form,
  Button,
  ButtonText
} from "./styles";
import NavigationService from "../../services/navigation";
import BackgroundImage from "../../assets/fundo-mobile.png";
import LogoImage from "../../assets/logo3x.png";

class ForgotPassword extends Component {
  state = {
    email: ""
  };
  handleSubmit = () => {
    const { email } = this.state;
    const { getForgotPasswordRequest } = this.props;
    const data = {
      email,
      redirect_url: "http://localhost:3000/forgot_password"
    };

    getForgotPasswordRequest(data);
  };
  render() {
    const { email } = this.state;
    return (
      <KeyboardAvoidingView
        style={{ flexGrow: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      >
        <Container>
          <BlackScreen />
          <Background source={BackgroundImage} />

          <Form>
            <Logo source={LogoImage} />
            <Input
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              autoFocus
              returnKeyType="send"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Seu email"
              onChangeText={email => this.setState({ email })}
              value={email}
              onSubmitEditing={() => this.handleSubmit}
            />
            <Button onPress={this.handleSubmit} background="red">
              <ButtonText>Recuperar</ButtonText>
            </Button>
            <Button
              onPress={() => {
                NavigationService.navigate("Login");
              }}
              background="transparent"
            >
              <ButtonText>Fazer Login</ButtonText>
            </Button>
          </Form>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ForgotPasswordActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(ForgotPassword);
