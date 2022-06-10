import './Home.css';
import React, {Component} from 'react';
import Header from'../../common/Header/Header.js';

import moviesData from "../../common/movieData.js";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

class Home extends Component {

    constructor() {
        super();
        this.state = {
            movieName: "",
            upcomingMovies: [],
            releasedMovies: [],
            releaseDateStart: "",
            releaseDateEnd: ""
        }
    }

    render() {
        return(
            <div>
                <Header />
    
                <div className="upcomingHead">Upcoming Movies</div>
                <GridList cols={5}>
                    {moviesData.map((card) => (
                    <GridListTile key={card.id}>
                        <img src={card.poster_url} alt={card.title} />
                        <GridListTileBar title={card.title} />
                    </GridListTile>
                    ))}
                </GridList><br /> <br />
    
                <div className="flex-container">
                    <div className="left">
                    <GridList cellHeight={350} cols={4}>
                    {moviesData.map((movie) => (
                        <GridListTile className="released-movie-grid-item"
                        key={"grid" + movie.id}
                        >
                        <img
                            src={movie.poster_url}
                            className="movie-poster2"
                            alt={movie.title}
                        />
                        <GridListTileBar
                            title={movie.title}
                            subtitle={
                            <span>
                                Release Date:
                                {new Date(movie.release_date).toDateString()}
                            </span>
                            }
                        />
                        </GridListTile>
                    ))}
                    </GridList>
                    </div>
                    <div className="right">
                            
                    </div>
    
                </div>
            </div>
        );
    }
}

export default Home;