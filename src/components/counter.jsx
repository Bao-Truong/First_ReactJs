import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",
    tags: [],
  };
  style = {
    fontSize: 20,
    fontWeight: "bold",
  };

  renderTag() {
    if (this.state.tags.length !== 0) return <p>'There are no tags!'</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   console.log("Constructor: ", this);
  // }

  // handleIncrement() {
  //   console.log("Increment Clicked", this);
  // }

  handleIncrement_arrow = (event) => {
    console.log("Increment Clicked", this);
    console.log("event data: ", event);
    try {
      this.props.value = 5; // Ko cho phep thay đổi giá trị trong Props, read-only
    } catch (error) {
      console.log("error read-only: ", error);
    }
    this.setState({ value: this.state.value + 1 }); // Phải dùng Setstate để update UI, nó ko tự hỉu sự thay đổi này
  };

  // doHandleIncrement = () => {
  //   this.handleIncrement_arrow({ id: 1 });
  // };
  handleDelete = (event) => {
    console.log("Delete counter #", event);
  };
  render() {
    var BadgeClasses = this.getBadgeClasses();
    console.log("props: ", this.props); // Prop là các giá trị thuộc tính gọi counter này State của cái trước đó
    return (
      // nếu ko muốn dùng <div>
      <React.Fragment>
        {this.props.children}

        <img src={this.state.imageUrl} alt="Unknown mage"></img>

        <span style={this.style} className={BadgeClasses}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.handleIncrement_arrow({ id: 1 })}
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

        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTag()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    var classes = "badge m-2 ";
    classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state; // Tương đương với this.state.count
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
