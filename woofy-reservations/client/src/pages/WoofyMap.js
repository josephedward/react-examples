import React, { Component } from "react";
import API from "../utils/API";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { Button, Dropdown, List, Grid, Modal, Image, Header } from "semantic-ui-react";
import axios from "axios";


//need to move to env variables
mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9lMDAwIiwiYSI6ImNrNWFxNTl0OTEyeGEza28xM2xjcDhyZncifQ.ZNcYRtapLyYjSF0m2X9G6g";

class WoofyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Pickup and Dropoff Locations
      locs: [],
      coordinatePairs: []
    };
  }

  /*
Pulls all bus stop info from Database
IF I have to I will put the seed here 

*/
  getStops = () => {
    return API.getwbstops()
      .then(res => {
        // console.log(res.data);
        this.setState({
          locs: res.data
        });
      })
      .catch(err => console.log(err));
  };

  /*
Obtains GPS coordinates from Street Address
Needs to be done in backend, not front
*/
  forwardGeocode(addressQuery) {
    console.log(addressQuery);
    return axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressQuery}.json?access_token=pk.eyJ1Ijoiam9lMDAwIiwiYSI6ImNrNWFxNTl0OTEyeGEza28xM2xjcDhyZncifQ.ZNcYRtapLyYjSF0m2X9G6g&cachebuster=1578878248908&autocomplete=true`
        // `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressQuery}.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&cachebuster=1578860823770&autocomplete=true`
      )
      .then(res => {
        // console.log(res);
        let newPairArr = [
          ...this.state.coordinatePairs,
          res.data.features[0].center
        ];
        this.setState({
          coordinatePairs: newPairArr
        });
      })
      .catch(err => console.log(err));
  }

  /*
Set markers on map for points
*/
  setMarker(map, coordinates) {
    var marker = new mapboxgl.Marker()
      .setLngLat({ lng: coordinates[0], lat: coordinates[1] })
      .addTo(map);
    return marker;
  }

  async componentDidMount() {
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [-77.5, 37.6], // starting position [lng, lat]
      zoom: 10 // starting zoom
    });

    var getBus = await this.getStops().then(res => {
      return res;
      // console.log(res)
      // console.log();
    });
    console.log(this.state.locs);

    let coordArr = await this.state.locs.map(elem => {
      console.log(elem.location);
      return this.forwardGeocode(elem.location).then(res => {
        // return res
        // console.log(res)
        console.log(this.state.coordinatePairs);
        let marks = this.state.coordinatePairs.map(elem => {
          console.log(elem);
          return this.setMarker(map, elem);
        });
        return res;
      });
    });

    console.log(coordArr);
    console.log(this.state.coordinatePairs);
  }

  render() {
    return (
      <div>
        <Grid stackable columns={2}>
          <Grid.Column>
            <List style={listStyle}>
              {this.state.locs.map(location => (
                <Modal
                  trigger={
                    <List.Item key={location.id} style={textStyle}>
                      <strong> {location.location}</strong>
                    </List.Item>
                  }
                >
                  <Modal.Header>Pupper Transit</Modal.Header>
                  <Modal.Content image>
                    <Image
                      wrapped
                      size="large"
                      src="./images/woofy_bus.jpg"
                    />
                    <Modal.Description>
                      <Header>Online Pickup Scheduling Coming Soon!</Header>
                      <p>
                        At our pickup location <strong>{location.location}</strong>
                      </p>
                      <p>the following pickup days are available: <strong >
                        <List>
                        {location.active_days.map(day=>(
                          <List.Item key={day}
                          style={dow}
                          >
                            {day}
                          </List.Item>
                        ))}
                         </List>

                        </strong></p>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              ))}
            </List>
          </Grid.Column>
          <Grid.Column>
            <div id="map" style={mapStyle}></div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default WoofyMap;


const dow={
  margin:"5px"
}

const listStyle = {};

const textStyle = {
  backgroundColor: "lightyellow",
  textAlign: "center",
  margin: "15px",
  paddingTop: "10px",
  paddingBottom: "10px",
  outline: "1px solid black"
};

const dropDown = {
  backgroundColor: "lightyellow",
  color: "blue",
  display: "block"
};

const mapStyle = {
  margin: "25px",
  position: "absolute",
  height: "600px",
  width: "600px"
};
