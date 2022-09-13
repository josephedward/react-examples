import React, { Component } from "react";
import axios from "axios";
import cheerio from "cheerio";
import {
  List
  // Icon, Popup
} from "semantic-ui-react";

class Libmad extends Component {
  state = {
    sentences: ""
  };

  componentDidMount() {
    this.getSentence();
  }

  async getSentence() {
    console.log("getting sentence");
    axios({
      method: "GET",
      url: "https://hargrimm-wikihow-v1.p.rapidapi.com/steps",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "hargrimm-wikihow-v1.p.rapidapi.com",
        "x-rapidapi-key": "b1ca2090c8mshbe1c0739a807645p1f2242jsn5f4cb0ed4eb5"
      },
      params: {
        count: "12"
      }
    })
      .then(response => {
        //   console.log(response)
        // console.log(response.data);
        //   this.setState({sentences:response.data.map((sen,i)=>{
        //         return sen.i
        //   })})

        let tempArr = this.createArr(response.data);
        this.setState({ sentences: tempArr });
        console.log(this.state.sentences);
      })
      .catch(error => {
        console.log(error);
      });
  }

  createArr(sentences) {
    let myArr = [];
    for (const i in sentences) {
      myArr.push(sentences[i]);
    }

    console.log(myArr);
    return myArr;
  }

  render() {
    console.log("render");
    // sen = this.state.sentences;
    return (
      <div style={testStyle}>
        <h3>Sentences: </h3>
        <List>
        {this.state.sentences &&
        this.state.sentences.map(
            (sentence) =>(
                <List.Item>
                    {sentence}
                </List.Item>
            )
        )}

        </List>
      </div>
    );
  }
}

// var tokenizer = new natural.WordTokenizer();
// console.log(tokenizer.tokenize("your dog has fleas."));
// [ 'your', 'dog', 'has', 'fleas' ]

// const wordnet = require('en-wordnet')
// const Dictionary = require('./index')
 
// const start = async () => {
//   const dictionary = new Dictionary(wordnet['3.0'])
//   await dictionary.init()
 
//   const result = dictionary.searchFor('test')
// }
// start()

export default Libmad;


const testStyle={
    background:"white",
    border:"3px solid red"
}


/*
    /* <p>{JSON.parse(this.state.sentence)}</p> */

//     let temp= await Axios.get("https://randomwordgenerator.com/sentence.php")
//     .then((res)=>{
//         let $ = cheerio.load(res.data);

//         console.log($);
//         // console.log(JSON.stringify(res.data))
//         // this.setState({sentence:res.data})
//         return $;
//     })
// return temp;


