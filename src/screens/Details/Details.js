import './Details.css';
import React, {Component} from 'react';
import Header from './../../common/Header/Header.js';
import ReactDOM from 'react-dom';
import Home from './../Home/Home.js';

import moviesData from './../../common/movieData.js';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Youtube from 'react-youtube';
import Button from '@material-ui/core/Button';

class Details extends Component {

    constructor() {
        super();
        this.state = {
            movie: {},
            starIcons: [{
                id: 1,
                stateId: "star1",
                color: "black"
            },
            {
                id: 2,
                stateId: "star2",
                color: "black"
            },
            {
                id: 3,
                stateId: "star3",
                color: "black"
            },
            {
                id: 4,
                stateId: "star4",
                color: "black"
            },
            {
                id: 5,
                stateId: "star5",
                color: "black"
            }]
        }
    }

    // Functionalities
    componentWillMount() {
        let currentState = this.state;
        currentState.movie = moviesData.filter((mov) => {
            return mov.id === this.props.movieId
        })[0];
        this.setState({ currentState });
    }
    backToHomeHandler = () => {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }
    artistClickHandler = (url) => {
        window.location = url;
    }

    render () {

        let currentMovie = this.state.movie;
        const trailerSize = {height: '300', width: '700'};

        return(
            <div className="details">
                <Header children={<Button style={{position:"absolute" , right:80, top:8}} variant="contained" color="primary">BOOK NOW</Button>} />
                <div className="details-container">
                    <div onClick={this.backToHomeHandler} style={{cursor: "pointer"}}>
                            &#60; Back to Home
                    </div>

                    <div className="flexContainer">
                        <div className="leftContent">
                            <img src={currentMovie.poster_url} alt={currentMovie.title} />
                        </div>
                        <div className="middleContent">
                            <h2>{currentMovie.title}</h2>
                            <strong>Genres: </strong> <span>{currentMovie.genres.join(', ')}</span><br />
                            <strong>Duration: </strong> <span>{currentMovie.duration}</span><br />
                            <strong>Release Date: </strong> <span>{new Date(currentMovie.release_date).toDateString()}</span><br />
                            <strong>Ratings: </strong> <span>{currentMovie.critics_rating}</span><br /><br />
                            <strong>Plot: </strong> <span>{currentMovie.storyline}</span> <a href={currentMovie.wiki_url}>.. Read on</a> <br /><br />
                            <strong>Trailer: </strong><br /><br />
                            <Youtube opts = {trailerSize} videoId= {currentMovie.trailer_url.split("?v=")[1]} />
                        </div>
                        <div className="rightContent">
                            Rate this Movie:<br />
                            <StarIcon style= {{color: "gold"}} /><StarIcon style= {{color: "gold"}} /><StarIcon style= {{color: "gold"}} /><StarIcon style= {{color: "gold"}} /><StarBorderOutlinedIcon />
                            
                            <br /><br /><strong className="artist-margin">Artists: </strong><br /><br />
                            <GridList cellHeight={240} cols={2}>
                                {currentMovie.artists != null && currentMovie.artists.map((currentArtist) => (
                                    <GridListTile
                                        onClick={() => this.artistClickHandler(currentArtist.wiki_url)}
                                        key={currentArtist.id}>
                                        <img src={currentArtist.profile_url} alt={currentArtist.first_name + " " + currentArtist.last_name} />
                                        <GridListTileBar
                                            title={currentArtist.first_name + " " + currentArtist.last_name}
                                        />
                                    </GridListTile>
                                ))}
                            </GridList>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;