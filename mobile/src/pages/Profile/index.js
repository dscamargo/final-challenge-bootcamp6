import React, { Component } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Moment from "react-moment";
import "moment/locale/pt-br";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as OrdersListActions } from "../../store/ducks/orders";
import { Creators as OrderDetailsActions } from "../../store/ducks/orderDetails";
import { Creators as AuthActions } from "../../store/ducks/auth";

import Header from "../../components/Header";
import NavigationService from "../../services/navigation";

import {
  Container,
  InnerContainer,
  OrderList,
  Order,
  OrderTitle,
  OrderDate,
  OrderPrice
} from "./styles";

class Profile extends Component {
  componentDidMount() {
    const { getOrdersListRequest } = this.props;
    getOrdersListRequest();
  }

  handleOrderDetail = id => {
    const { getOrderDetailsRequest } = this.props;
    getOrderDetailsRequest(id);
    NavigationService.navigate("OrderDetails");
  };
  render() {
    const { orders } = this.props;
    return (
      <Container>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Header
            logoutbutton
            normalScreen
            destination="Products"
            title="Meus pedidos"
          />
        </View>
        <InnerContainer>
          <OrderList>
            <FlatList
              removeClippedSubviews={false}
              data={orders.data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      this.handleOrderDetail(item.id);
                    }}
                  >
                    <Order>
                      <View
                        style={{
                          flexDirection: "column"
                        }}
                      >
                        <OrderTitle>Pedido #{item.id}</OrderTitle>

                        <OrderDate>
                          <Moment add={{ hours: 3 }} fromNow element={Text}>
                            {item.created_at}
                          </Moment>
                        </OrderDate>

                        <OrderPrice>R$ {item.total}</OrderPrice>
                      </View>
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <FontAwesome5
                          size={30}
                          name={"angle-right"}
                          color={"black"}
                        />
                      </View>
                    </Order>
                  </TouchableOpacity>
                </View>
              )}
            />
          </OrderList>
        </InnerContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { ...AuthActions, ...OrderDetailsActions, ...OrdersListActions },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
