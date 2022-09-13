import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import {
  // Col, Row,
  Container
} from "../components/Grid";
import { List, ListItem } from "../components/List";
import {
  Input
  // TextArea, FormBtn
} from "../components/Form";
import {
  DateInput,
  TimeInput
  // DateTimeInput,
  // DatesRangeInput
} from "semantic-ui-calendar-react";
import moment from "moment";
import {
  Grid,
  Button,
  Responsive,
  Segment
  // Image
} from "semantic-ui-react";

class reservations extends Component {
  state = {
    reservations: [],
    dogname: "",
    owner_name: "",
    entry_date: "",
    entry_time: "",
    appointment_date_time: ""
  };

  componentDidMount() {
    this.loadreservations();
    document.addEventListener("touchmove", this.preventDefault, {
      passive: false
    });
  }

  loadreservations = () => {
    API.getreservations()
      .then(res =>
        this.setState({
          reservations: res.data,
          dogname: "",
          owner_name: "",
          appointment_date_time: ""
        })
      )
      .catch(err => console.log(err));
  };

  deletereservation = id => {
    API.deletereservation(id)
      .then(res => this.loadreservations())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  setDateTime = () => {
    let tempDT = new Date(this.state.entry_date + " " + this.state.entry_time);
    this.setState({ appointment_date_time: tempDT });
  };

  handleFormSubmit = event => {
    let formatDate = new Date(
      this.state.entry_date + " " + this.state.entry_time
    );
    event.preventDefault();
    if (this.state.dogname && this.state.owner_name && formatDate) {
      API.savereservation({
        dogname: this.state.dogname,
        owner_name: this.state.owner_name,
        appointment_date_time: formatDate
      })
        .then(res => this.loadreservations())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <br />
        <Grid>
          <Grid.Column style={{ ...center }}>
            <Responsive as={Segment} {...Responsive.onlyMobile}>
              <div
                style={{
                  ...img,
                  ...img1,
                  backgroundSize: "cover"
                }}
              />
            </Responsive>
            <Responsive
              style={{ ...segmentStyle }}
              as={Segment}
              {...Responsive.onlyComputer}
            >
              <div
                style={{ ...img, backgroundImage: "url('./images/spa_dog.jpeg')" }}
              />
            </Responsive>
            <br />
            <h3
              style={{
                ...h3S,
                borderBottom: "0",
                width: "75%",
                textAlign: "center",
                margin: "0 auto"
              }}
            >
              Make a Reservation
            </h3>

            <form style={{ ...form1, ...yB }}>
              <h4>Dog's Name: </h4>
              <Input
                value={this.state.dogname}
                onChange={this.handleInputChange}
                name="dogname"
                placeholder="Dog's Name (required)"
              />
              <h4>Owner's Name: </h4>
              <Input
                value={this.state.owner_name}
                onChange={this.handleInputChange}
                name="owner_name"
                placeholder="Owner's Full Name (required)"
              />
              <h4>Appointment Day: </h4>
              <DateInput
                fluid
                name="entry_date"
                dateFormat="YYYY-MM-DD"
                value={this.state.entry_date}
                onChange={this.handleChange}
              />
              <h4>Appointment Time: </h4>
              <TimeInput
                fluid
                name="entry_time"
                value={this.state.entry_time}
                onChange={this.handleChange}
              />
              <br />
              <Button
                fluid
                style={btn1}
                disabled={!(this.state.owner_name && this.state.dogname)}
                onClick={this.handleFormSubmit}
                onTouchStart={this.handleFormSubmit}
              >
                Submit Reservation
              </Button>
            </form>
            <br />
            <Responsive as={Segment} {...Responsive.onlyMobile}>
              <div
                style={{
                  ...img,
                  backgroundImage: "url('./images/fat_dog.jpeg')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }}
              />
            </Responsive>

            <Responsive
              style={{ ...segmentStyle }}
              as={Segment}
              {...Responsive.onlyComputer}
            >
              <div style={{ ...img, ...img2 }} />
            </Responsive>
            <br />
            {this.state.reservations.length ? (
              <div>
                <List style={{ ...yB, width: "75%", margin: "0 auto" }}>
                  <h3
                    style={{
                      ...h3S,
                      borderTop: "0",
                      borderLeft: "0",
                      borderRight: "0"
                    }}
                  >
                    Reservation List
                  </h3>
                  {this.state.reservations.map(reservation => (
                    <ListItem
                      style={{
                        width: "75%",
                        margin: "0 auto"
                      }}
                      key={reservation._id}
                    >
                      <Link to={"/reservations/" + reservation._id}>
                        <div style={{ textAlign: "left" }}>
                          Canine:
                          <strong> {reservation.dogname}</strong>
                        </div>
                        <div style={{ textAlign: "left" }}>
                          Owner:
                          <strong> {reservation.owner_name} </strong>
                        </div>
                        <div style={{ textAlign: "left" }}>
                          Appointment Date:{" "}
                          <strong>
                            {moment(reservation.appointment_date_time)
                              .locale("en")
                              .format("LLLL")}
                          </strong>
                        </div>
                      </Link>
                      <DeleteBtn
                        onClick={() => this.deletereservation(reservation._id)}
                      />
                    </ListItem>
                  ))}
                </List>
              </div>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default reservations;

const btn1 = {
  border: "5px solid black",
  backgroundColor: "#2fc0cd"
};

const img1 = {
  backgroundImage: "url(./images/bread_dog.jpeg)"
};

const img2 = {
  backgroundImage: "url(./images/dog_dog.jpeg)"
};

const form1 = {
  backgroundColor: "white",
  padding: "5px",
  border: "2px solid black",
  width: "75%",
  margin: "0 auto"
};
const img = {
  height: 300,
  clear: "both",
  color: "white",
  fontHeight: "30px",
  paddingTop: 120,
  textAlign: "center",
  "-webkit-background-size": "contain",
  "-moz-background-size": "contain",
  "-o-background-size": "contain",
  objectFit: "cover",
  "background-size": "cover",
  margin: "10px",
  border: "2px solid black"
};

const center = {
  margin: "0 auto",
  textAlign: "center"
};

const segmentStyle = {
  border: "2px solid black",
  backgroundColor: "lightyellow",
  padding: "50px",
  width: "75%",
  margin: "0 auto"
};

const yB = {
  backgroundColor: "lightyellow"
};

const h3S = {
  backgroundColor: "white",
  marginBottom: "0",
  border: "2px solid black",
  padding: "5px"
};
