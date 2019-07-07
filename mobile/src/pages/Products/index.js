import React, { Component } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as ProductsActions } from "../../store/ducks/products";
import { Creators as TypesListActions } from "../../store/ducks/types";
import { Creators as CartActions } from "../../store/ducks/cart";
import NavigationService from "../../services/navigation";

import Header from "../../components/Header";

import {
  Container,
  Item,
  Name,
  Description,
  Time,
  ItemInfo,
  ImageView,
  ItemImage
} from "./styles";
class Products extends Component {
  static propTypes = {
    products: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          product: PropTypes.string,
          image: PropTypes.string,
          description: PropTypes.string,
          timeToReady: PropTypes.string
        })
      )
    })
  };

  async componentDidMount() {
    const { getProductsListRequest } = this.props;
    getProductsListRequest();
  }
  handleOption = product => {
    const { getTypesListRequest } = this.props;
    getTypesListRequest(product);
    NavigationService.navigate("Types");
  };

  render() {
    const { products } = this.props;
    return (
      <Container>
        <Header
          productScreen
          profile="Profile"
          cart="Cart"
          title="Pizzaria Don Juan"
        />
        {products.loading ? (
          <ActivityIndicator
            style={{ marginTop: 150 }}
            size="large"
            color="#0b2031"
          />
        ) : (
          <FlatList
            data={products.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => this.handleOption(item.id)}>
                <Item>
                  <ImageView>
                    <ItemImage
                      source={{
                        uri: `https://finalchallengerocketseat.s3.us-east-2.amazonaws.com/${
                          item.image
                        }`
                      }}
                    />
                  </ImageView>
                  <ItemInfo>
                    {item.name === "Pizza" || item.name === "Lasanha" ? (
                      <Name>{`${item.name}s`}</Name>
                    ) : (
                      <Name>{item.name}</Name>
                    )}
                    <Description>{item.description}</Description>

                    <Time>
                      <FontAwesome5
                        size={10}
                        style={{ marginRight: 10 }}
                        color={"#999"}
                        name={"clock"}
                      />{" "}
                      {item.timeToReady}
                    </Time>
                  </ItemInfo>
                </Item>
              </TouchableOpacity>
            )}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { ...CartActions, ...TypesListActions, ...ProductsActions },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
