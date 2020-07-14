import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import PropTypes from "prop-types";
import GridItem from "./Grid/GridItem.js";
import GridContainer from "./Grid/GridContainer.js";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardBody from "./Card/CardBody.js";
import { forwardRef } from "react";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
// import Edit from '@material-ui/icons/Edit';
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
// import Search from '@material-ui/icons/Search';
import ViewColumn from "@material-ui/icons/ViewColumn";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import Icon from "@material-ui/core/Icon";
import axios from "axios";
import { Add, Save, Cancel, Delete, Edit, Search } from "@material-ui/icons";
// import Save from '@mater'
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#00bfff",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);
export default function TableList() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Student ID", field: "id" },
      { title: "Full Name", field: "name" },
      { title: "Sex", field: "sex" },
      {
        title: "Major",
        field: "major",
        initialEditValue: "Unknown",
      },
    ],
    data: [],
  });
  var BookDatas = [];
  useEffect(() => {
    var userData = JSON.parse(localStorage.getItem("userData"));
    var data = JSON.stringify({ username: userData.username });
    console.log(userData);
    axios.post("api/getAllStudent", { data }).then((res) => {
      //   console.log(res.data);
      //   console.log(res.data.object.length);
      //   BookDatas = res.data.object;
      //   BookDatas.map((data) => {
      //     var BookData = {
      //       _id: data._id,
      //       title: data.title,
      //       author: data.author,
      //       // username: data.username,
      //       status: data.status == "0" ? "not exchange" : "exchanging",
      //       date: Date(data.date),
      //     };
      //     setState((prevState) => {
      //       const data = [...prevState.data];
      //       data.push(BookData);
      //       return { ...prevState, data };
      //     });
      //   });
    });
  }, []);
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>Manage book</h4>
            <p className={classes.cardCategoryWhite}>Book you have</p>
          </CardHeader>
          <CardBody>
            {/* <AddIcon /> */}
            <MaterialTable
              title="Exchange Book"
              columns={state.columns}
              data={state.data}
              icons={tableIcons}
              // actions={[
              // 	{
              // 	  icon: forwardRef((props, ref) => <AddIcon{...props} ref={ref}/>),
              // 	  tooltip: 'Save User',
              // 	  onClick: (event, rowData) => alert("You saved " + rowData.name)
              // 	}
              // ]}
              editable={{
                onRowAdd: (newData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data.push(newData);

                        console.log(newData);
                        var bookdata = JSON.stringify({
                          title: newData.title,
                          author: newData.author,
                          username: JSON.parse(localStorage.getItem("userData"))
                            .username,
                        });
                        console.log(bookdata);
                        axios
                          .post("api/registerBook", { bookdata })
                          .then((res) => {
                            console.log(res.data);
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      if (oldData) {
                        setState((prevState) => {
                          const data = [...prevState.data];
                          data[data.indexOf(oldData)] = newData;
                          axios.post("api/");
                          return { ...prevState, data };
                        });
                      }
                    }, 600);
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data.splice(data.indexOf(oldData), 1);
                        var bookdata = JSON.stringify({ bookUID: oldData._id });
                        console.log(bookdata);
                        axios
                          .post("api/deleteBook", { bookdata })
                          .then((res) => {
                            console.log(res.data);
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
              }}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
