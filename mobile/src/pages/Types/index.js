import React, { Component } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TypesListActions } from "../../store/ducks/types";
import { Creators as SizesListActions } from "../../store/ducks/sizes";

import Header from "../../components/Header";
import NavigationService from "../../services/navigation";

import {
  Container,
  List,
  ItemButton,
  Item,
  ItemImage,
  ItemText
} from "./styles";

class Types extends Component {
  static propTypes = {
    data: PropTypes.shape({
      types: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          type: PropTypes.string,
          file: PropTypes.string
        })
      )
    })
  };
  handleSize = ({ id, ingredients }) => {
    const { getSizesListRequest } = this.props;
    getSizesListRequest(id, ingredients);
    NavigationService.navigate("Sizes");
  };

  render() {
    const { types } = this.props;

    return (
      <Container>
        <Header
          normalScreen
          destination="Products"
          title="Selecionar um tipo"
        />
        <ScrollView>
          {types.loading ? (
            <ActivityIndicator
              style={{ marginTop: 150 }}
              size="large"
              color="#0b2031"
            />
          ) : (
            <List>
              {types.data &&
                types.data.map(type => (
                  <ItemButton
                    key={type.id}
                    onPress={() => this.handleSize(type)}
                  >
                    <Item>
                      <ItemImage
                        source={{
                          uri: `https://finalchallengerocketseat.s3.us-east-2.amazonaws.com/${
                            type.image
                          }`
                        }}
                      />
                      <ItemText>{type.name}</ItemText>
                    </Item>
                  </ItemButton>
                ))}
            </List>
          )}
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  types: state.types,
  sizes: state.sizes
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...SizesListActions, ...TypesListActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Types);
