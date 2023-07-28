import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard({ mov }) {
  return (
    <>
      <Col lg={3} md={4} className="p-4 ">
        <Link to={`/movie/${mov.id}`}>
          <Card
            className="col-card"
            style={{
              borderRadius: "15px",
              height: "375px",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500` + mov.poster_path}
              alt="poster"
              style={{ height: "100%", width: "100%", borderRadius: "15px" }}
            />
            <Card.ImgOverlay className="card-hover">
              <p>Movie Name : {mov.title}</p>
              <p> Release Date : {mov.release_date}</p>
              <p> Vote Count : {mov.vote_count}</p>
              <p>Rate : {mov.vote_average}</p>
            </Card.ImgOverlay>
          </Card>
        </Link>
      </Col>
    </>
  );
}

export default MovieCard;
