import React, { Component } from "react";
import { Link } from "react-router-dom";
import { 
   Container } from "../components/Grid";
import API from "../utils/API";
import moment from "moment";

import { Card, 
  // Icon, 
  Image 
} from "semantic-ui-react";

class ReservationDetail extends Component {
  state = {
    reservation: {}
  };

// grab the reservation with the _id of this.props.match.params.id
// e.g. localhost:3000/reservations/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getreservation(this.props.match.params.id)
      .then(res => this.setState({ reservation: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid style={center1}>
        <Card style={center2}>
        <Image 
        style={{backgroundColor:"black"}}
        src='images/dog.png' wrapped ui={false} />
          Canine Name:
          <h4 style={noMT}>{this.state.reservation.dogname}</h4>
          Owner Name:
          <h4 style={noMT}>{this.state.reservation.owner_name}</h4>
          Scheduled Appointment:
          <h4 style={noMT}>
            {/* <p> */}
            {moment(this.state.reservation.appointment_date_time).format(
              "MMMM Do YYYY"
            )}
            </h4>
            Time:
            <h4 style={noMT}>
            {moment(this.state.reservation.appointment_date_time).format(
              "hh:mm A"
            )}
          </h4>
        </Card>

            <Link style={{...bR}}  to="/">← Back to Schedule</Link>
      </Container>
    );
  }
}

export default ReservationDetail;

const center1 = {
  position: "relative"
};

const center2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor:"lightyellow", 
  border:"2px solid black",
  padding:"5px"
};
const bR={
  backgroundColor:"lightyellow",
  color:"black",
  fontSize:"20px",
  position:"absolute",
  bottom:"15%",
  right:"15%",
  border:"2px solid black",
  padding:"5px"
}


const noMT={
  marginTop:"0px"
}