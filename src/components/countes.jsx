import React, { Component } from "react";
import Counter from "./counter";
import Counter_SSOT from "./counter_SSOT";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
    fontWeight: "bold",
  },
})(Button);

class Counters extends Component {
  state = {
    numCounter: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 6 },
      { id: 4, value: 0 },
    ],
  };
  handleReset = (event) => {
    const counter = this.state.numCounter.map((x) => {
      x.value = 0;
      return x;
    });
    this.setState({ numCounter: counter });
    console.log("checks:", this.state.numCounter);
  };
  handleDelete = (counterID) => {
    const counters = this.state.numCounter.filter((c) => c.id !== counterID);

    this.setState({ numCounter: counters });
  };
  handleIncrement = (Ncounter) => {
    const counter = [...this.state.numCounter]; //Clone by reference sẽ thay đổi cả source
    const index = counter.indexOf(Ncounter);
    counter[index] = { ...Ncounter };
    counter[index].value++;

    this.setState({ numCounter: counter });
  };

  render() {
    return (
      <React.Fragment>
        <StyledButton onClick={this.handleReset}>Reset</StyledButton>
        {this.state.numCounter.map((counter) => (
          <Counter_SSOT
            key={counter.id}
            selected={true}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
            // value={counter.value}
          >
            <h4> Coutner #{counter.id}</h4>
          </Counter_SSOT>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
