import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Counters from "./components/countes";
import Counters_liftUp from "./components/counters_Lift_Up";
import { Button } from "@material-ui/core";
import axios from "axios";
import TableList from "./components/TableList";
class App extends Component {
  state = {
    numCounter: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 6 },
      { id: 4, value: 0 },
    ],
  };
  constructor(props) {
    super(props);
    console.log("App - constructed");
  }
  componentDidMount = () => {
    console.log("App - mounted");
  };
  componentWillUnmount() {
    console.log("App - unmounted");
  }

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
  handleGetweather = () => {
    axios.get("/getWeather").then((res) => {
      console.log(res);
    });
  };
  handleGetallStudent = () => {
    axios.post("api/getAllStudent").then((res) => {
      console.log(res.data);
    });
  };
  handleDescribestudent = () => {
    axios.post("api/describestudent").then((res) => {
      console.log(res.data);
    });
  };
  render() {
    console.log("App - rendedred");
    return (
      <React.Fragment>
        <Navbar
          totalItems={this.state.numCounter.filter((c) => c.value > 0).length}
        />
        <main className="container">
          {/* <Counters_liftUp
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            counter={this.state.numCounter}
          /> */}
          <TableList></TableList>

          <Button onClick={this.handleGetweather}>Get Weather</Button>
          <Button onClick={this.handleGetallStudent}>Get Student</Button>
          <Button onClick={this.handleDescribestudent}>Describe Student</Button>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
// function App() {

//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <React.Fragment>
//       <Navbar />
//       <main className="container">
//         <Counters_liftUp
//           onIncrement={this.handleIncrement}
//           onDelete={this.onDelete}
//           onReset={this.handleReset}
//         />
//       </main>
//     </React.Fragment>
//   );
// }

// export default App;
