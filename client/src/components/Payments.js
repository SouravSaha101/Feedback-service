import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends React.Component {
  render() {
    const price = 5;
    const priceForStripe = price * 100;
    const onToken = (token) => {
      console.log(token);
      this.props.handleToken(token);
    };
    return (
      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="Feedback Service"
        description={`$${price} is for 5 Credits`}
        amount={priceForStripe}
        panelLabel="Pay"
        token={onToken}
      >
        <button className="btn">Add credits</button>
      </StripeCheckout>
    );
  }
}
export default connect(null, actions)(Payments);
