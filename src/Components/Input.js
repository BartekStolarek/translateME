import React, { Component } from 'react';

class Input extends Component {
    constructor() {
        super();
        this.state = {
            textToTranslate: '',
            language: ''
        }
    }


  handleSubmit(e) {
    e.preventDefault();
    if (this.refs.text.value === '') {
        //alert('Title is required');
    } else {
        this.setState({
            textToTranslate: this.refs.text.value,
            language: this.refs.language.value
        }, function() {
            this.props.translateText(this.state.textToTranslate, this.state.language);
        });
    }
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <div className="textInput uk-grid">
                    <div className="uk-margin uk-width-1-1">
                        <input className="uk-input uk-form-width-medium uk-form-large dark" ref="text" type="text" placeholder="Type text..." />
                    </div>
                    <div className="uk-width-1-2">
                        <select className="uk-select dark" ref="language">
                            <option value="ru">Russian</option>
                            <option value="en">English</option>
                            <option value="pl">Polish</option>
                            <option value="no">Norwegian</option>
                            <option value="it">Italian</option>
                            <option value="fr">French</option>
                            <option value="es">Spanish</option>
                            <option value="ja">Japanese</option>
                            <option value="zh">Chinese</option>
                            <option value="de">German</option>
                            <option value="tr">Turkish</option>
                        </select>
                    </div>
                    <div className="uk-width-1-2 inputButtonGrid">
                        <button type="submit" className="uk-button uk-button-secondary inputButton">Translate</button>
                    </div>
                </div>
            </div>
        </form>
      </div>
    );
  }
}

export default Input;
