import React, { Component } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import * as moment from "moment";
import "moment/locale/pt-br";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ws from "@adonisjs/websocket-client";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as AuthActions } from "../../store/ducks/auth";
import { Creators as DeliveryActions } from "../../store/ducks/delivery";
import { Creators as OrdersListActions } from "../../store/ducks/orders";
import { Creators as UserActions } from "../../store/ducks/user";

import {
  Container,
  InnerContainer,
  OrderList,
  OrderInfo,
  ItemList,
  OrderContainer,
  OrderTime,
  Title,
  OrderTitle,
  OrderPrice,
  Item,
  ItemLeftContainer,
  ItemRightContainer,
  Information,
  NewOrderContainer,
  NewOrderNotification,
  OrderInfoContainer,
  OrderDeliveryText
} from "./styles";

class Order extends Component {
  componentWillMount() {
    const { loadUserRequest } = this.props;

    loadUserRequest();
  }
  state = {
    show: true,
    newOrder: false
  };
  registerToSocket = () => {
    const { getOrdersListRequest } = this.props;
    const socket = ws(process.env.REACT_APP_WS_URL);

    socket.connect();

    const orders = socket.subscribe("orders");

    orders.on("new:order", () => {
      getOrdersListRequest();
      this.setState({ newOrder: true });
    });
  };
  async componentDidMount() {
    const { getOrdersListRequest } = this.props;
    this.registerToSocket();

    getOrdersListRequest();
  }

  getOutToDelivery = async id => {
    this.setState({ newOrder: false });
    const { getDeliveryRequest } = this.props;
    getDeliveryRequest(id);
  };

  render() {
    const {
      user,
      orders,
      orders: { loading }
    } = this.props;
    const { newOrder } = this.state;
    return (
      <Container>
        <Header title={user.data.username} logoutbutton />
        <InnerContainer>
          {newOrder && (
            <NewOrderContainer>
              <NewOrderNotification>Novo Pedido</NewOrderNotification>
            </NewOrderContainer>
          )}

          <Title>Últimos pedidos {loading && <Loading />}</Title>

          <OrderList>
            {orders.data &&
              orders.data.map(order => (
                <OrderContainer key={order.id}>
                  <OrderInfo>
                    <OrderInfoContainer>
                      <OrderTitle>
                        Pedido <span>#{order.id}</span> - {order.user.username}
                      </OrderTitle>
                      <OrderTime>
                        {moment(order.created_at).fromNow()}
                      </OrderTime>
                      <OrderPrice>R$ {order.total}</OrderPrice>
                    </OrderInfoContainer>

                    {order.outToDelivery ? (
                      <OrderDeliveryText>
                        <FontAwesomeIcon icon={faCheck} /> Pedido entregue
                      </OrderDeliveryText>
                    ) : (
                      <button onClick={() => this.getOutToDelivery(order.id)}>
                        Saiu para entrega
                      </button>
                    )}
                  </OrderInfo>
                  <ItemList>
                    {order.items &&
                      order.items.map(item => (
                        <Item key={item.id}>
                          <ItemLeftContainer>
                            {item.size.type.product.name === "Pizza" ||
                            item.size.type.product.name === "Lasanha" ? (
                              <img
                                src={`https://finalchallengerocketseat.s3.us-east-2.amazonaws.com/${
                                  item.size.type.image
                                }`}
                                alt="Imagem"
                              />
                            ) : (
                              <img
                                src={`https://finalchallengerocketseat.s3.us-east-2.amazonaws.com/${
                                  item.size.image
                                }`}
                                alt="Imagem"
                              />
                            )}
                          </ItemLeftContainer>
                          <ItemRightContainer>
                            {item.size.type.product.name === "Pizza" ||
                            item.size.type.product.name === "Lasanha" ? (
                              <h2>
                                {`${item.size.type.product.name} 
                                ${item.size.type.name}`}
                              </h2>
                            ) : (
                              <h2>{item.size.type.name}</h2>
                            )}
                            <h3>{`Tamanho: ${item.size.name}`}</h3>
                          </ItemRightContainer>
                        </Item>
                      ))}
                  </ItemList>

                  <Information>
                    Endereço: <span>{order.address}</span>
                  </Information>

                  <Information>
                    Método de pagamento: <span>{order.payment_method}</span>
                  </Information>

                  <Information>
                    Observações: <span>{order.observation}</span>
                  </Information>
                </OrderContainer>
              ))}
          </OrderList>
        </InnerContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  orders: state.orders
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...UserActions,
      ...OrdersListActions,
      ...DeliveryActions,
      ...AuthActions
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
