import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as AuthActions } from "../../store/ducks/auth";

import { Container, InnerContainer, RightSide, LeftSide } from "./styles";
import Logo from "../../assets/images/logo.png";

class Header extends Component {
  logout = () => {
    this.props.logout();
  };
  render() {
    const { title, logoutbutton } = this.props;
    return (
      <Container>
        <InnerContainer>
          <LeftSide>
            <img src={Logo} alt="Logo" />
            <span>Pizzaria Don Juan</span>
          </LeftSide>
          <RightSide>
            {title && <span>{title}</span>}
            {logoutbutton && <button onClick={this.logout}>Sair do App</button>}
          </RightSide>
        </InnerContainer>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Header);
