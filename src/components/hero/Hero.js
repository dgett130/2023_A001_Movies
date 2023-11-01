import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import {Paper} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Hero = ({movies}) => {
  return (
    <div>
        <Carousel>
          {
            movies?.map((movie) => {
              return(
                  <Paper>
                    <div className='movie-card-container'>
                      <div className='movie-card'
                      style={{
                          "--img": `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
                      }}>
                        <div className="movie-detail">
                          <div className="movie-poster">
                            <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt=""/>
                          </div>
                          <div className="movie-title">
                              <h4>{movie.original_title}</h4>
                          </div>
                            <div className="movie-buttons-container">
                                <Link to={`/Trailer/${movie.id}`}>
                                    <div className="play-button-icon-container">
                                        <FontAwesomeIcon className="play-button-icon"
                                                         icon={faCirclePlay}
                                        />
                                    </div>
                                </Link>
                            </div>
                        </div>
                      </div>
                    </div>
                  </Paper>
              )
            })
          }
        </Carousel>
    </div>
  );
}

export default Hero;
