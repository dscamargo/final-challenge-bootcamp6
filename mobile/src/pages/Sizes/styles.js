import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #e6e6e6;
`;

export const InnerContainer = styled.View`
  width: 90%;
  margin: 0 auto;
`;

export const List = styled.View`
  width: 100%;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Item = styled.View`
  width: 48%;
  height: 200px;
  background: #fff;
  box-shadow: 10px 10px 10px #000;
  elevation: 1;
  border-radius: 10px;
  margin-bottom: 4%;
`;

export const ItemButton = styled.TouchableOpacity`
  width: 100%;
`;

export const ItemText = styled.Text`
  font-size: 14px;
  color: #0b2031;
  font-weight: bold;
`;

export const SizeImage = styled.Image`
  width: ${props =>
    props.type === "25 cm"
      ? "45"
      : props.type === "30 cm"
      ? "55"
      : props.type === "35 cm"
      ? "65"
      : "75"};
  height: ${props =>
    props.type === "25 cm"
      ? "45"
      : props.type === "30 cm"
      ? "55"
      : props.type === "35 cm"
      ? "65"
      : "75"};
`;

export const ItemSuperiorView = styled.View`
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
`;

export const ItemInferiorView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Ingredients = styled.View`
  width: 100%;
  height: 50px;
  background: #fff;
  border-radius: 10px;
  justify-content: center;
  padding: 20px;
`;

export const IngredientsText = styled.Text`
  color: #0b2031;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
`;
