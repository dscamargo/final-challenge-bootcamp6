import React, { Component } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Picker,
  ScrollView
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SaveOrderActions } from "../../store/ducks/saveOrder";
import { Creators as CartActions } from "../../store/ducks/cart";
import { ToastActionsCreators } from "react-native-redux-toast";

import api from "../../services/api";

import Header from "../../components/Header";

import {
  Container,
  InnerContainer,
  Input,
  ButtonDone,
  TextButtonDone,
  Form,
  PaymentPicker
} from "./styles";

class Order extends Component {
  state = {
    obs: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    payment: "",
    cidade: ""
  };
  handleSubmit = () => {
    const { obs, cep, rua, numero, bairro, payment, cidade } = this.state;
    const { displayWarning, saveOrderRequest, cart } = this.props;

    if (
      obs === "" ||
      cep === "" ||
      rua === "" ||
      numero === "" ||
      bairro === "" ||
      cidade === ""
    ) {
      displayWarning("Preencha todos os campos para continuar.");
    } else if (payment === "" || payment === "escolher") {
      displayWarning("Escolha a forma de pagamento para continuar.");
    } else {
      const item = {
        data: []
      };

      cart.data.map(product => {
        item.data.push({ size_id: product.product_id });
      });

      item.observation = obs;
      item.address = `${rua}, ${numero} - ${bairro} - ${cep} - ${cidade}`;
      item.payment_method = payment;

      saveOrderRequest(item);
    }
  };

  handleSearchAddress = async postalCode => {
    const { displayWarning } = this.props;
    try {
      const response = await api.get(
        `https://viacep.com.br/ws/${postalCode}/json/`
      );
      const { cep, logradouro, bairro, localidade, uf } = response.data;
      this.setState({
        rua: logradouro,
        cep,
        bairro,
        cidade: `${localidade} - ${uf}`
      });
    } catch (error) {
      console.tron.log(error);
      displayWarning("Utilize um CEP válido para continuar.");
    }
  };

  render() {
    const { obs, cep, rua, numero, bairro, payment, cidade } = this.state;
    const { total } = this.props;
    return (
      <KeyboardAvoidingView
        style={{ flexGrow: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      >
        <Container>
          <Header
            normalScreen
            destination="Cart"
            title="Realizar Pedido"
            price={total}
          />
          <ScrollView>
            <InnerContainer>
              <Form>
                <Input
                  underlineColorAndroid="transparent"
                  autoFocus
                  returnKeyType="next"
                  style={{ textAlignVertical: "top" }}
                  multiline={true}
                  numberOfLines={6}
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="Observação"
                  placeholderTextColor="#999"
                  value={obs}
                  onChangeText={obs => this.setState({ obs })}
                />

                <View>
                  <PaymentPicker
                    selectedValue={payment}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ payment: itemValue })
                    }
                  >
                    <Picker.Item label="Forma de pagamento" value="escolher" />
                    <Picker.Item
                      label="Cartão de crédito"
                      value="Cartão de crédito"
                    />
                    <Picker.Item
                      label="Cartão de débito"
                      value="Cartão de débito"
                    />
                    <Picker.Item label="Dinheiro" value="Dinheiro" />
                  </PaymentPicker>
                </View>

                <Input
                  onEndEditing={() => this.handleSearchAddress(cep)}
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="CEP (XXXXX-XXX) ou (XXXXXXXX)"
                  placeholderTextColor={"#999"}
                  onChangeText={cep => this.setState({ cep })}
                  value={cep}
                  onSubmitEditing={() => this.handleSearchAddress(cep)}
                />
                <Input
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Cidade"
                  placeholderTextColor={"#999"}
                  onChangeText={cidade => this.setState({ cidade })}
                  value={cidade}
                  ref={el => {
                    this.cidadeInput = el;
                  }}
                  onSubmitEditing={() => this.ruaInput.focus()}
                />
                <View style={{ flexDirection: "row", width: "100%" }}>
                  <Input
                    returnKeyType="next"
                    style={{ width: "60%", marginEnd: "2%" }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Rua"
                    placeholderTextColor={"#999"}
                    onChangeText={rua => this.setState({ rua })}
                    value={rua}
                    ref={el => {
                      this.ruaInput = el;
                    }}
                    onSubmitEditing={() => this.numeroInput.focus()}
                  />
                  <Input
                    returnKeyType="next"
                    style={{ width: "37%" }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="N°"
                    placeholderTextColor={"#999"}
                    onChangeText={numero => this.setState({ numero })}
                    value={numero}
                    ref={el => {
                      this.numeroInput = el;
                    }}
                    onSubmitEditing={() => this.bairroInput.focus()}
                  />
                </View>
                <Input
                  returnKeyType="send"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Bairro"
                  placeholderTextColor={"#999"}
                  onChangeText={bairro => this.setState({ bairro })}
                  value={bairro}
                  ref={el => {
                    this.bairroInput = el;
                  }}
                  onSubmitEditing={() => this.handleSubmit}
                />
              </Form>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <ButtonDone onPress={this.handleSubmit}>
                  <TextButtonDone>
                    Finalizar {"    "}
                    <FontAwesome5 name={"arrow-right"} />
                  </TextButtonDone>
                  <View />
                </ButtonDone>
              </View>
            </InnerContainer>
          </ScrollView>
        </Container>
      </KeyboardAvoidingView>
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
  cart: state.cart,
  total: orderTotalPrice(state.cart.data)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { ...CartActions, ...ToastActionsCreators, ...SaveOrderActions },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
