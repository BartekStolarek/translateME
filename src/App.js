import React, { Component } from 'react';
import './App.css';
import Input from "./Components/Input";
import Output from "./Components/Output";
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      translated: '',
      textToTranslate: '',
      language: ''
    };
  }

  componentWillMount() {
    this.setState({
      translated: 'Welcome!'
    });
  }

  translateText(text, language) {
    this.setState({
      language: language,
      textToTranslate: text
    }, function() {
      this.getData();
    });
  }

  getData() {
    axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20171027T204031Z.8a731aa5f1665127.93e01dd089b97a8e9fa0d4106146cbe7dc85231a&text='+this.state.textToTranslate+'&lang='+this.state.language)
      .then((response) => {

     this.setState({
       translated: response.data.text[0]
     });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="center uk-grid">
          <h1 className="uk-heading-primary headingTitle uk-width-1-1">translate<span className="headingColor">me</span></h1>
          <div className="uk-width-1-2 input">
            <Input translateText={this.translateText.bind(this)}/>
          </div>
          <div className="uk-width-1-2 output">
            <Output value={this.state.translated} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
