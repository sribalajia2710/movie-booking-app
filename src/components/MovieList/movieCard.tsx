import React from "react";
import "./movieCard.css";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string;
  releaseDate: string;
  runningTime: string;
}

const MovieCard: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  releaseDate,
  runningTime,
}) => {
  console.log(title);
  return (
    <div className="card">
      <div className="card-header">
        <img className="card-image" src={imageUrl} alt={title} />
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
        <p className="card-text">{tags}</p>
        <p className="card-text">{runningTime}</p>
        <p className="card-text">{releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
