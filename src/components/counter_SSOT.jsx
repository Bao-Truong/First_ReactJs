import React, { Component } from "react";

class Counter_SSOT extends Component {
  state = {
    imageUrl: "https://picsum.photos/200",
  };
  style = {
    fontSize: 20,
    fontWeight: "bold",
  };

  renderTag() {}

  render() {
    var BadgeClasses = this.getBadgeClasses();
    // console.log("props: ", this.props); // Prop là các giá trị thuộc tính gọi counter này State của cái trước đó
    return (
      // nếu ko muốn dùng <div>
      <React.Fragment>
        {this.props.children}

        <img src={this.state.imageUrl} alt="Unknown mage"></img>

        <span style={this.style} className={BadgeClasses}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn badge-danger m-2"
        >
          Delete
        </button>

        {/* map giống như vòng lập, với mỗi phần tử trogn this.state.tags ta map nó vào cái <li></li> */}

        {this.renderTag()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    var classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter; // Tương đương với this.state.count
    return count === 0 ? "Zero" : count;
  }
}

export default Counter_SSOT;
