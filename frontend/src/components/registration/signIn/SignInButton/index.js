import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { BigButton } from "../../../../styledcomponents/forAll/buttons";

const SignInButton = () => {
    return (
        <div>
          <BigButton type="submit">Login</BigButton>
        </div>
    )
}

const mapStateToProps = state => {
    return {
    }
};

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignInButton);
export default ConnectedApp;
