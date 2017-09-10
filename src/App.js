import React, { Component } from 'react';
import './App.css';

const emotions = ['happy', 'sad'];
const genres = ['edm', 'rap'];
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          selectedEmotion: emotions[0],
          selectedGenre: genres[0]
       };
    }

    handleSubmit = () => {
        console.log(this.state.selectedEmotion, this.state.selectedGenre);
    };

    handleEmotion = (event) => {
      this.setState({selectedEmotion: event.target.value});
  
        };

    handleGenre = (event) => {
      this.setState({selectedGenre: event.target.value});
    };

    render() {
        const emotionItems = emotions.map(emotion => (
            <option value={emotion} key={emotion}>
                {emotion}
            </option>
        ));
        const genreItems = genres.map(genre => (
            <option value={genre} key={genre}>
                {genre}
            </option>
        ));

        return (
            <div className="App">
                <select onChange={this.handleEmotion} name="emotions" id="">
                    {emotionItems}
                </select>
                <select onChange={this.handleGenre} name="genres" id="">
                    {genreItems}
                </select>
                <button onClick={this.handleSubmit} name="button">
                    render
                </button>
            </div>
        );
    }
}

export default App;
