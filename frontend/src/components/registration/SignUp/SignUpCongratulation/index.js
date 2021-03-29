import { connect } from 'react-redux';
import { MiddleSection, H1 , OrangeDiv, TopDiv, BottomDiv}from "../../../../styledcomponents/forAll/layout.js";
import { Input, InputDiv, }from "../../../../styledcomponents/forAll/inputs.js";
import SignUpRegistration from "../SignUpRegistration";
import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";



class SignUpCongratulation extends Component {
    Form = styled.form`
    display: flex;
    flex-direction: column;
  `


    render(){
        return(
        <MiddleSection>
          <H1>REGISTRATION</H1>
          <OrangeDiv/>
          {/* <Form onSubmit={ register }> */}
            <InputDiv>
              <p>Thanks for your registration. 
Our hard working monkeys are preparing a digital message called E-Mail that will be sent to you soon. Since monkeys arent good in writing the message could end up in you junk folder. Our apologies for any inconvienience.thank for </p>
            </InputDiv>
            <SignUpRegistration />
          {/* </Form> */}
       </MiddleSection>
    )
}
} 
const mapStateToProps = () => {
    return {
    };
}

const connection = connect(mapStateToProps);
const ConnectedApp = connection(SignUpCongratulation);
export default withRouter(ConnectedApp);
