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

class Counters_liftUp extends Component {
  render() {
    const { onReset, counter, onDelete, onIncrement } = this.props;

    return (
      <React.Fragment>
        <StyledButton onClick={onReset}>Reset</StyledButton>
        {counter.map((counter) => (
          <Counter_SSOT
            key={counter.id}
            selected={true}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            <h4> Coutner #{counter.id}</h4>
          </Counter_SSOT>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters_liftUp;
