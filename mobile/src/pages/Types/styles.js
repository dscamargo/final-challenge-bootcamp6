import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #e6e6e6;
`;

export const List = styled.View`
  margin: 0 auto;
  width: 90%;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ItemButton = styled.TouchableOpacity`
  width: 48%;
`;

export const ItemImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Item = styled.View`
  width: 100%;
  height: 200px;
  background: #fff;
  box-shadow: 10px 10px 10px #000;
  elevation: 1;
  align-items: center;
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const ItemText = styled.Text`
  margin-top: 20px;
  color: #0b2031;
  font-size: 12px;
  font-weight: bold;
  width: 100%;
  text-align: center;
`;
