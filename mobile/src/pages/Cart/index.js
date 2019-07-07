import React, { Component } from "react";
import { TouchableOpacity, Text, View, FlatList, Image } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Modal from "react-native-modal";
import PropTypes from "prop-types";

import { ToastActionsCreators } from "react-native-redux-toast";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CartActions } from "../../store/ducks/cart";
import { Creators as ModalActions } from "../../store/ducks/modal";
import { Creators as SizesListActions } from "../../store/ducks/sizes";
import { Creators as TypesListActions } from "../../store/ducks/types";
import NavigationService from "../../services/navigation";

import {
  Container,
  ItemListView,
  ItemList,
  Item,
  ItemImage,
  ItemName,
  ItemSize,
  ItemPrice,
  OptionsView,
  OrderButton,
  OrderButtonInnerView,
  TextOrderButton,
  Header,
  HeaderView,
  HeaderText,
  HeaderImage,
  HeaderPrice,
  ModalContainer,
  ModalInnerContainer,
  ModalButton,
  ModalButtonText
} from "./styles";

class Cart extends Component {
  componentWillUnmount() {
    const { closeModal, clearSizesList, clearTypesList } = this.props;

    clearSizesList();
    clearTypesList();
    closeModal();
  }
  static propTypes = {
    cart: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        type: PropTypes.string,
        size: PropTypes.string,
        price: PropTypes.string
      })
    ).isRequired
  };
  handlePlaceOrder = () => {
    const { cart, displayWarning } = this.props;
    if (!cart.length) {
      displayWarning("Adicione itens para continuar.");
    } else {
      NavigationService.navigate("Order");
    }
  };
  handleModal = () => {
    const { openModal, cart } = this.props;

    if (cart.length) {
      openModal();
    } else {
      NavigationService.navigate("Products");
    }
  };
  handleRemoveItem = id => {
    const { removeItemCart } = this.props;
    removeItemCart(id);
  };
  handleRedirect = () => {
    const { clearCart } = this.props;
    clearCart();
    NavigationService.navigate("Products");
  };
  handleBuyMore = () => {
    NavigationService.navigate("Products");
  };
  static navigationOptions = {
    title: "Products"
  };
  render() {
    const {
      total,
      cart,
      modal: { visible }
    } = this.props;
    console.tron.log(cart);
    return (
      <Container>
        <Header>
          <HeaderImage source={require("../../assets/header-background.png")} />
          <HeaderView>
            <TouchableOpacity onPress={this.handleModal}>
              <FontAwesome5 name={"arrow-left"} color={"white"} size={15} />
            </TouchableOpacity>
            <HeaderText>Carrinho</HeaderText>
          </HeaderView>
          <View>
            <HeaderPrice>R$ {total}</HeaderPrice>
          </View>
        </Header>
        <ItemListView>
          <ItemList>
            <FlatList
              data={cart}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Item>
                  <ItemImage
                    source={{
                      uri: `https://finalchallengerocketseat.s3.us-east-2.amazonaws.com/${
                        item.image
                      }`
                    }}
                  />
                  <View
                    style={{
                      width: 150,
                      flexDirection: "column"
                    }}
                  >
                    {item.product === "Pizza" || item.product === "Lasanha" ? (
                      <ItemName>
                        {item.product} {item.type}
                      </ItemName>
                    ) : (
                      <ItemName>{item.type}</ItemName>
                    )}
                    <ItemSize>Tamanho: {item.size}</ItemSize>
                    <ItemPrice>R$ {item.price}</ItemPrice>
                  </View>
                  <TouchableOpacity
                    onPress={() => this.handleRemoveItem(item.id)}
                  >
                    <FontAwesome5
                      name={"times-circle"}
                      size={20}
                      color={"red"}
                    />
                  </TouchableOpacity>
                </Item>
              )}
            />
          </ItemList>
        </ItemListView>

        <OptionsView>
          <TouchableOpacity
            onPress={this.handleBuyMore}
            style={{ marginLeft: 10 }}
          >
            <FontAwesome5 name={"cart-plus"} size={20} color={"#706e7b"} />
          </TouchableOpacity>

          <OrderButton onPress={this.handlePlaceOrder}>
            <OrderButtonInnerView>
              <TextOrderButton>Realizar Pedido</TextOrderButton>
              <FontAwesome5
                color={"#fff"}
                name={"arrow-right"}
                style={{ marginLeft: 10 }}
              />
            </OrderButtonInnerView>
          </OrderButton>
        </OptionsView>

        <Modal isVisible={visible}>
          <ModalContainer>
            <ModalInnerContainer>
              <View style={{ alignItems: "center", flexDirection: "column" }}>
                <Text>Deseja voltar ao menu principal?</Text>
                <Text>Os itens do carrinho serão perdidos</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "center",
                  padding: 10
                }}
              >
                <ModalButton
                  border="1px solid rgba(0,0,0, 0.2)"
                  background="#fff"
                  style={{ marginRight: 10 }}
                  onPress={() => {
                    this.props.closeModal();
                  }}
                >
                  <ModalButtonText color="#000">CANCELAR</ModalButtonText>
                </ModalButton>
                <ModalButton background="red" onPress={this.handleRedirect}>
                  <ModalButtonText>OK</ModalButtonText>
                </ModalButton>
              </View>
            </ModalInnerContainer>
          </ModalContainer>
        </Modal>
      </Container>
    );
  }
}

orderTotalPrice = items => {
  let soma = 0;

  if (items.length) {
    items.map(item => {
      soma += parseFloat(item.price);
    });
  }

  return parseFloat(soma).toFixed(2);
};

const mapStateToProps = state => ({
  cart: state.cart.data,
  modal: state.modal,
  total: orderTotalPrice(state.cart.data)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...SizesListActions,
      ...TypesListActions,
      ...ToastActionsCreators,
      ...ModalActions,
      ...CartActions
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
