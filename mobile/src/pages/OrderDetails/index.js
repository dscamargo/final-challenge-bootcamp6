import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  RefreshControl
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as OrderDetailsActions } from "../../store/ducks/orderDetails";
import { Creators as CartActions } from "../../store/ducks/cart";
import NavigationService from "../../services/navigation";

import {
  Container,
  ItemList,
  Item,
  ItemContainerLeft,
  ItemContainerRight,
  ItemImage,
  ItemName,
  ItemSize,
  ItemPrice,
  HeaderContainer,
  HeaderInnerView,
  HeaderImage,
  HeaderText,
  HeaderPrice,
  OrderInfo,
  OrderInfoFirstContainer,
  Informations,
  Address,
  Obs,
  RepeatOrderButton,
  RepeatOrderText
} from "./styles";

class OrderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      id: null
    };
  }
  componentDidMount() {
    this.setState({ id: this.props.details.data.id });
  }
  handleBack = () => {
    NavigationService.navigate("Profile");
  };

  handleRepeatOrder = () => {
    const items = [];

    this.props.details.data.items.map(item => {
      items.push({
        type: item.size.type.name,
        image: item.size.image,
        size: item.size.name,
        price: item.size.price,
        product_id: item.size.id,
        id: parseInt(Math.random() * 1000)
      });
    });

    this.props.clearCart();

    items.map(item => {
      this.props.addItemCart(item);
    });

    NavigationService.navigate("Order");
  };

  render() {
    const {
      id,
      address,
      total,
      observation,
      outToDelivery
    } = this.props.details.data;
    console.tron.log(this.props.details.data);
    return (
      <Container>
        <HeaderContainer>
          <HeaderImage source={require("../../assets/header-background.png")} />
          <HeaderInnerView>
            <TouchableOpacity onPress={this.handleBack}>
              <FontAwesome5
                style={{ marginRight: 10 }}
                name={"arrow-left"}
                color={"white"}
                size={15}
              />
            </TouchableOpacity>
            <HeaderText>Pedido #{id}</HeaderText>
          </HeaderInnerView>

          <HeaderPrice>R$ {total}</HeaderPrice>
        </HeaderContainer>

        <OrderInfo>
          <OrderInfoFirstContainer>
            <View style={{ flexDirection: "column" }}>
              <Text>Observação</Text>
              <Obs>{observation}</Obs>
            </View>
            <View>
              {outToDelivery && (
                <View style={{ marginRight: 10 }}>
                  <FontAwesome5 size={25} color={"green"} name={"check"} />
                </View>
              )}
            </View>
          </OrderInfoFirstContainer>
          <Informations>
            <Text>Endereço</Text>
            <Address>{address}</Address>
          </Informations>
          <View />
          <RepeatOrderButton onPress={this.handleRepeatOrder}>
            <RepeatOrderText>REFAZER PEDIDO</RepeatOrderText>
          </RepeatOrderButton>
        </OrderInfo>
        <View style={{ flex: 1 }}>
          <ItemList>
            <FlatList
              data={this.props.details.data.items}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Item>
                  <ItemContainerLeft>
                    {item.size.type.product.name === "Pizza" ||
                    item.size.type.product.name === "Lasanha" ? (
                      <ItemImage
                        source={{
                          uri: `https://finalchallengerocketseat.s3.us-east-2.amazonaws.com/${
                            item.size.type.image
                          }`
                        }}
                      />
                    ) : (
                      <ItemImage
                        source={{
                          uri: `https://finalchallengerocketseat.s3.us-east-2.amazonaws.com/${
                            item.size.image
                          }`
                        }}
                      />
                    )}
                  </ItemContainerLeft>
                  <ItemContainerRight>
                    {item.size.type.product.name === "Pizza" ||
                    item.size.type.product.name === "Lasanha" ? (
                      <ItemName>
                        {item.size.type.product.name} {item.size.type.name}
                      </ItemName>
                    ) : (
                      <ItemName>{item.size.type.name}</ItemName>
                    )}

                    <ItemSize>Tamanho: {item.size.name}</ItemSize>
                    <ItemPrice>R$ {item.size.price}</ItemPrice>
                  </ItemContainerRight>

                  <View />
                </Item>
              )}
            />
          </ItemList>
        </View>
      </Container>
    );
  }
}

handleCalculateTotal = items => {
  let soma = 0;

  if (items.length) {
    items.map(item => {
      soma += parseFloat(item.preco);
    });
  }
  return parseFloat(soma).toFixed(2);
};

const mapStateToProps = state => ({
  details: state.orderDetails
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...CartActions, ...OrderDetailsActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetails);
