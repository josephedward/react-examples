import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { Card, Image } from "semantic-ui-react";
import { useAuth0 } from "../react-auth0-spa.js";



function userProfileDetail() {
  const { isAuthenticated, loginWithRedirect, logout, user, loading } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid style={center1}>
    {/* {isAuthenticated ? ( */}
      <Card style={center2}>
        <Image
          // style={{ backgroundColor: "black" }}
          src= {user.picture}
          // "images/dog.png"
          wrapped
          ui={false}
        />
        Canine Name:
        {/* <h4 style={noMT}>{this.state.userProfile.dogname}</h4> */}
        Owner Name:
        <h4 style={noMT}>{user.name}</h4>
        Scheduled Appointment:
      </Card>
    {/* ):(
      loginWithRedirect()
    )} */}
      <Link style={{ ...bR }} to="/">
        ← Home
      </Link>
    </Container>
  );
}

export default userProfileDetail;

const center1 = {
  position: "relative"
};

const center2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "lightyellow",
  border: "2px solid black",
  padding: "5px"
};
const bR = {
  backgroundColor: "lightyellow",
  color: "black",
  fontSize: "20px",
  position: "absolute",
  bottom: "15%",
  right: "15%",
  border: "2px solid black",
  padding: "5px"
};

const noMT = {
  marginTop: "0px"
};

{
  /* <h4 style={noMT}>
            {moment(this.state.userProfile.appointment_date_time).format(
              "MMMM Do YYYY"
            )}
            </h4>
            Time:
            <h4 style={noMT}>
            {moment(this.state.userProfile.appointment_date_time).format(
              "hh:mm A"
            )}
          </h4> */
}
