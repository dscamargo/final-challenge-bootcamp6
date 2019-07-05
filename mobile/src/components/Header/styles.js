import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  padding: 20px;
  width: 100%;
  justify-content: space-between;
`;
export const InnerContainer = styled.View`
  width: 95%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  /* background: red;
  z-index: 3; */
`;
export const HeaderImage = styled.Image`
  position: absolute;
  z-index: -1;
`;

export const HeaderText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-left: ${props => props.margin || 0};
`;

export const HeaderPrice = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 3px;
`;

export const LogoutButton = styled.TouchableOpacity`
  width: 30%;
  padding: 5px;
  background: red;
  border-radius: 10px;
  align-items: center;
`;

export const LogoutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;

export const ModalContainer = styled.View`
  background: #fff;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const MainModalText = styled.Text`
  font-size: 14px;
  color: #000;
  font-weight: bold;
`;

export const ModalText = styled.Text`
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
`;

export const ModalButton = styled.TouchableOpacity`
  background: red;
  margin-left: 10px;
  width: 100px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ModalButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
