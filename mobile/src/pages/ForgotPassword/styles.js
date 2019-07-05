import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #000;
`;

export const Background = styled.Image`
  position: absolute;
  z-index: -1;
`;

export const Form = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 20px;
`;

export const BlackScreen = styled.View`
  background: #000;
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;

export const Logo = styled.Image`
  width: 72px;
  height: 72px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999"
})`
  width: 100%;
  background: #fff;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
`;

export const Button = styled.TouchableOpacity`
  background: ${props => props.background};
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
