import {useEffect, useRef} from "react";
import api from "../../api/axiosConfig";
import {useParams} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";
import './Reviews.css';

const Reviews = ({getMovieData, movie, reviews, setReviews}) => {

    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId);
        console.log(movie)
    }, []);

    const addReview = async (e) => {
        e.preventDefault();
        const rev = revText.current;
        try {
            //const response = await api.post(`api/v1/reviews`, {reviewBody:rev.value, imdbId:movieId});
            const updatedReviews = [...reviews, rev.value];
            rev.value = "";
            setReviews(updatedReviews);
        }catch (e) {
            console.error(e)
        }
    };

    return (
        <div>
            <Row>
                <Col>
                    <h3>Reviews</h3>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <div className="movie-poster-reviews">
                        <img src={"https://image.tmdb.org/t/p/original" + movie?.poster_path} alt="" />
                    </div>
                </Col>
                <Col>
                    {
                        <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                        </>
                    }
                    {
                        reviews?.map((r) => {
                          return(
                              <>
                                <Row>
                                    <Col>
                                        <p>{r}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>
                              </>
                          )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </div>
    )
}

export default Reviews
