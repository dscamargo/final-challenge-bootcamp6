import React, { Component } from "react";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as AuthActions } from "../../store/ducks/auth";
import { Creators as ModalActions } from "../../store/ducks/modal";
import { Creators as CartActions } from "../../store/ducks/cart";

import { View, TouchableOpacity, Text } from "react-native";

import {
  Container,
  InnerContainer,
  HeaderImage,
  HeaderText,
  HeaderPrice
} from "./styles";
import NavigationService from "../../services/navigation";

class Header extends Component {
  handleFunction = destination => {
    if (this.props.showModal) {
      NavigationService.navigate("Modal");
    } else {
      NavigationService.navigate(destination);
    }
  };
  handleCart = () => {
    NavigationService.navigate("Cart");
  };
  handleRedirect = () => {
    this.props.closeModal();
    this.props.clearCart();
    NavigationService.navigate("Products");
  };
  handleLogout = () => {
    const { logout } = this.props;

    logout();
  };
  render() {
    const {
      normalScreen,
      productScreen,
      profile,
      cart,
      title,
      destination,
      logoutbutton,
      price
    } = this.props;
    return (
      <Container>
        <HeaderImage source={require("../../assets/header-background.png")} />
        {productScreen && (
          <InnerContainer>
            <TouchableOpacity onPress={() => this.handleFunction(profile)}>
              <FontAwesome5
                style={{ marginRight: 10 }}
                name={"history"}
                color={"white"}
                size={15}
              />
            </TouchableOpacity>
            <HeaderText>{title}</HeaderText>

            <TouchableOpacity onPress={this.handleCart}>
              {cart.data.length ? (
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ fontSize: 12, color: "white" }}>
                    {cart.data.length}
                  </Text>
                </View>
              ) : (
                <FontAwesome5
                  style={{ marginRight: 10 }}
                  name={"shopping-cart"}
                  color={"white"}
                  size={15}
                />
              )}
            </TouchableOpacity>
          </InnerContainer>
        )}
        {normalScreen && (
          <InnerContainer>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => this.handleFunction(destination)}
              >
                <FontAwesome5 name={"arrow-left"} color={"white"} size={15} />
              </TouchableOpacity>
              <HeaderText margin={20}>{title}</HeaderText>
            </View>
            {logoutbutton && (
              <TouchableOpacity onPress={this.handleLogout}>
                <MaterialCommunityIcons
                  size={20}
                  style={{ color: "#fff" }}
                  name={"logout"}
                />
              </TouchableOpacity>
            )}
            {price && <HeaderPrice>{`R$ ${price}`}</HeaderPrice>}
          </InnerContainer>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  cart: state.cart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { ...CartActions, ...ModalActions, ...AuthActions },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
