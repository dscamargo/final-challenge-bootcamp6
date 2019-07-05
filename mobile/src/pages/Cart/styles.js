import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #e6e6e6;
`;

export const ItemList = styled.View`
  width: 90%;
  margin: 0 auto;
  flex-direction: column;
`;

export const Item = styled.View`
  width: 100%;
  padding: 15px;
  background: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #000;
  elevation: 1;
  margin-bottom: 10px;
`;

export const ItemImage = styled.Image``;

export const ItemName = styled.Text`
  font-size: 12px;
  color: #0b2031;
  text-align: left;
`;

export const ItemSize = styled.Text`
  font-size: 11px;
  color: #706e7b;
  text-align: left;
`;

export const ItemPrice = styled.Text`
  font-size: 16px;
  color: #0b2031;
  font-weight: bold;
  text-align: left;
`;

export const OrderButton = styled.TouchableOpacity`
  background: red;
  border-radius: 20px;
  padding: 10px 30px;
  align-items: center;
  margin-right: 5px;
`;

export const TextOrderButton = styled.Text`
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Header = styled.View`
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderImage = styled.Image`
  position: absolute;
  z-index: -1;
`;

export const HeaderText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  margin-left: 10px;
`;

export const HeaderPrice = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ModalContainer = styled.View`
  justify-content: center;
  flex: 1;
`;

export const ModalInnerContainer = styled.View`
  width: 80%;
  height: 150px;
  background: #fff;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

export const ModalButton = styled.TouchableOpacity`
  padding: 10px;
  width: 100px;
  align-items: center;
  background: ${props => props.background};
  border-radius: 10px;
  border: ${props => (props.border ? props.border : "0")};
`;

export const ModalButtonText = styled.Text`
  color: ${props => props.color || "white"};
  font-weight: bold;
`;
