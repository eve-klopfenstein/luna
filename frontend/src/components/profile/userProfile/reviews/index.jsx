import { ReviewsContainer, ReviewCard } from '../../../../styledcomponents/Profile.js';
import StarRatingComponent from "react-rating-stars-component";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const Reviews = (props) => {

    const [reviews, setReviews] = useState([]);

    const id = useSelector(state => state.mixReducers.id);

    useEffect(() => {
            const token = localStorage.getItem('token');
            const url = `https://luna-sagittarius.propulsion-learn.ch/backend/api/reviews/user/${id}/`;
            const method = 'GET';
            const headers = new Headers({
                'Content-Type': 'application/json'
            });
            const config = {
                method: 'GET',
                headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                })
            }
            fetch(url, config).then(res => res.json())
                .then(data => {
                    console.log("reviews", data);
                    setReviews(data.results);
                })
    }, []);

    return (
        <ReviewsContainer className={props.hide ? "hide" : null} >
            <h2>REVIES</h2>
            {reviews.length > 0 ? reviews.map((review, index) => {

                return (
                    <ReviewCard key={index} >
                        <article>
                            <Link id="restaurant-link" to={`/restaurant-page/${review.restaurant.id}/`} >
                                <h3>{ review.restaurant.name }</h3>
                            </Link>
                            <span><Moment format='MMMM Do YYYY, h:mm:ss a' >{ review.created.slice(0, 10) }</Moment></span>
                        </article>
                        <StarRatingComponent
                            count={5}
                            value={review.rating}
                            isHalf={true}
                            size={30}
                            edit={false}
                        />
                        <p>{review.content}</p>
                    </ReviewCard>
                )
            })
            
            

            :
            <ReviewCard >
                <article>
                    <h3>No reviews for you   &#x1F613;</h3>
                </article>
                <StarRatingComponent
                    count={5}
                    value={2.5}
                    isHalf={true}
                    size={30}
                    edit={false}
                />
                <p>Please Log in and start writing reviews, so your voice could impact how others choose
                    where to eat. By not reviewing the restaurants you ate at, you are letting bad restaurants
                    get away, and good restaurants don't get the reward they desrve. 
                </p>
            </ReviewCard>
            }
        </ReviewsContainer>
    )
}

export default Reviews;