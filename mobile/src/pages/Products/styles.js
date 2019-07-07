import styled from "styled-components/native";

export const Container = styled.View`
  background: #e6e6e6;
  flex: 1;
`;
export const Header = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  padding: 30px 10px 30px 10px;
`;

export const Button = styled.TouchableOpacity`
  color: #fff;
`;

export const HeaderImage = styled.Image`
  position: absolute;
  z-index: -1;
`;

export const Item = styled.View`
  flex-direction: row;
  margin: 0 auto;
  padding: 10px;
  width: 85%;
  border-radius: 10px;
  margin-top: 10px;
  background: #fff;
  box-shadow: 10px 10px 10px #000;
  elevation: 1;
`;

export const ImageView = styled.View`
  justify-content: center;
`;

export const ItemImage = styled.Image`
  border-radius: 10px;
  background: black;
  width: 60px;
  height: 60px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;
export const ItemInfo = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;

export const Text = styled.Text`
  color: #fff;
`;

export const Description = styled.Text`
  font-size: 11px;
  text-align: left;
  width: 60%;
  color: #706e7b;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Time = styled.Text`
  font-size: 10px;
`;

export const Name = styled.Text`
  font-size: 12px;
  color: #0b2031;
`;

export const MessageView = styled.View`
  width: 100%;
  align-items: center;
  padding: 10px;
`;

export const SuccessText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
