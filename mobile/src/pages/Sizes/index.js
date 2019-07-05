import React, { Component } from "react";
import { TouchableOpacity, ActivityIndicator, Text, View } from "react-native";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SizesListActions } from "../../store/ducks/sizes";
import { Creators as CartActions } from "../../store/ducks/cart";
import { ToastActionsCreators } from "react-native-redux-toast";

import Header from "../../components/Header";
import NavigationService from "../../services/navigation";

import {
  Container,
  Item,
  List,
  ItemText,
  SizeImage,
  Ingredients,
  InnerContainer,
  IngredientsText
} from "./styles";

class Sizes extends Component {
  static propTypes = {
    data: PropTypes.shape({
      sizes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          image: PropTypes.string,
          size: PropTypes.string,
          price: PropTypes.string
        })
      )
    })
  };

  handleCart = ({
    id: product_id,
    name: size,
    price,
    image: sizeImage,
    type: {
      name: type,
      image: typeImage,
      product: { name: ProductName }
    }
  }) => {
    const { addItemCart, displayInfo } = this.props;
    let item;
    if (ProductName === "Pizza" || ProductName === "Lasanha") {
      item = {
        product: ProductName,
        type,
        image: typeImage,
        size,
        price,
        product_id,
        id: parseInt(Math.random() * 1000)
      };
    } else {
      item = {
        product: ProductName,
        type,
        image: sizeImage,
        size,
        price,
        product_id,
        id: parseInt(Math.random() * 1000)
      };
    }

    addItemCart(item);
    displayInfo("Produto adicionado ao carrinho");
    NavigationService.navigate("Cart");
  };

  renderListItem = item => {
    return (
      <Item key={item.id}>
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => this.handleCart(item)}
        >
          <View
            style={{
              width: "100%",
              height: 150,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <SizeImage
              type={item.name}
              source={{
                uri: `https://finalchallengerocketseat.s3.us-east-2.amazonaws.com/${
                  item.image
                }`
              }}
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <ItemText
              style={{
                width: "100%",
                textAlign: "center"
              }}
            >
              {item.name}
            </ItemText>
            <Text>{`R$ ${item.price}`}</Text>
          </View>
        </TouchableOpacity>
      </Item>
    );
  };
  render() {
    const { sizes } = this.props;
    return (
      <Container>
        <Header
          normalScreen
          destination="Types"
          title="Selecionar um tamanho"
        />

        {sizes.loading ? (
          <ActivityIndicator
            style={{ marginTop: 150 }}
            size="large"
            color="#0b2031"
          />
        ) : (
          <InnerContainer>
            {sizes.ingredients && (
              <Ingredients>
                <IngredientsText>{sizes.ingredients}</IngredientsText>
              </Ingredients>
            )}

            <List>
              {sizes.data && sizes.data.map(item => this.renderListItem(item))}
            </List>
          </InnerContainer>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  sizes: state.sizes
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { ...ToastActionsCreators, ...CartActions, ...SizesListActions },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sizes);
