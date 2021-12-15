import { Component } from "react";

let data = [{
    "id": "YqYJsEh",
    "type": "Movie",
    "title": "Ricky Velez: Here's Everything",
    "country": "",
    "dateAdded": "October 24, 2021",
    "releaseYear": 2021,
    "rating": "TV-MA",
    "duration": "",
    "listedIn": "Comedy, Stand Up",
    "description": "​Comedian Ricky Velez bares it all with his honest lens and down to earth perspective in his first-ever HBO stand-up special."
},
{
    "id": "iY9zZuf",
    "type": "Movie",
    "title": "Silent Night",
    "country": "",
    "dateAdded": "October 23, 2021",
    "releaseYear": 2020,
    "rating": "",
    "duration": "94 min",
    "listedIn": "Crime, Drama, Thriller",
    "description": "Mark, a low end South London hitman recently released from prison, tries to go straight for his daughter, but gets drawn back in by Alan, his former cellmate, to do one final job."
},
{
    "id": "gKpdYyu",
    "type": "Movie",
    "title": "The Marksman",
    "country": "",
    "dateAdded": "October 23, 2021",
    "releaseYear": 2021,
    "rating": "PG-13",
    "duration": "108 min",
    "listedIn": "Action, Thriller",
    "description": "A hardened Arizona rancher tries to protect an 11-year-old migrant boy fleeing from a ruthless drug cartel."
},
{
    "id": "ujryaBY",
    "type": "Movie",
    "title": "Gaia",
    "country": "",
    "dateAdded": "October 22, 2021",
    "releaseYear": 2021,
    "rating": "R",
    "duration": "97 min",
    "listedIn": "Horror",
    "description": "A forest ranger and two survivalists with a cultish devotion to the forest face the threat of an unrelenting wilderness when a strange being attacks one night."
},
{
    "id": "ZxvfLEd",
    "type": "Movie",
    "title": "Settlers",
    "country": "",
    "dateAdded": "October 22, 2021",
    "releaseYear": 2021,
    "rating": "",
    "duration": "104 min",
    "listedIn": "Science Fiction, Thriller",
    "description": "Mankind's earliest settlers on the Martian frontier do what they must to survive the cosmic elements and each other in this science-fiction thrill ride."
}];


class Home extends Component{
    constructor(){
        super();
        this.state={
            selectedMovie:{},
            userInput:""
        }
    }
    handleUserInput=(e)=>{
        this.setState({
            userInput:e.target.value
        })
    }
    handleSearch=()=>{
        let movie = data.find((item)=>{
            return item.title.includes(this.state.userInput);
        })

        this.setState({
            selectedMovie: movie
        })
    }

    render(){
        return(
            <div>
                <h1>Search for data: </h1>
                <input type="text" value={this.state.userInput} onChange={this.handleUserInput}/>
                <button onClick={this.handleSearch}>Find</button>
                { this.state.selectedMovie &&
                    <div>{ this.state.selectedMovie.title }</div>
                }
                { !this.state.selectedMovie &&
                    <div>Nothing Found</div>
                }
            </div>
        ) 
    }
}
  
export default Home;