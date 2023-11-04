import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import {Paper} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from 'react-router-dom';
import Reviews from "../reviews/Reviews";
import {Button} from "react-bootstrap";

const Hero = ({movies}) => {

  const navigate = useNavigate();

  function reviews(movieId) {
      navigate(`/Reviews/${movieId}`);
  }

  return (
    <div>
        <Carousel>
          {
            movies?.map((movie) => {
              return(
                  <Paper key={movie.id}>
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

                                <div className="movie-review-button-container">
                                   <Button variant="info" onClick={() => reviews(movie.id)}>Reviews</Button>
                                </div>

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
