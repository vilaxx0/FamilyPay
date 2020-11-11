import React from "react";
import Context from "./context";
export default class GlobalState extends React.Component {
  state = {
    balance: 1500,
    points: 300,
  };

  // addBalance = (balance) => {
  //   const balance = [...this.state.balance, balance];
  //   this.setState({balance: balance});
  // };

  // addPoints = (taskId) => {
  //   this.setState(this.state.tasks.splice(taskId,1));
  // };
  render() {
    return (
      <Context.Provider
        value={{
          balance: this.state.balance,
          points: this.points,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
