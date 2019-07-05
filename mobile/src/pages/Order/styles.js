import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #e6e6e6;
`;

export const InnerContainer = styled.View`
  width: 90%;
  margin: 0 auto;
`;

export const Form = styled.View`
  margin: 0 auto;
`;

export const Input = styled.TextInput`
  background: #fff;
  box-shadow: 10px 10px 10px #000;
  elevation: 1;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 10px;
`;

export const ButtonDone = styled.TouchableOpacity`
  background: red;
  padding: 15px;
  border-radius: 30px;
  width: 50%;
  align-items: center;
`;

export const TextButtonDone = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
`;

export const PaymentPicker = styled.Picker`
  width: 100%;
`;
