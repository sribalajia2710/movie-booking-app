import React, {useState} from "react";
import "./movieCard.css";
import Modal from "react-modal";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string;
  releaseDate: string;
  runningTime: string;
  theatres: any;
}

const MovieCard: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  releaseDate,
  runningTime,
  theatres,
}) => {
  console.log(title);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<object | null>(null);
  const movieDetails = {
    title,
    description,
    imageUrl,
    tags,
    releaseDate,
    runningTime,
    theatres,
  }

  const handleBooking = (movie: any) => {
    setModalIsOpen(true);
    setSelectedMovie(movie);
  }

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
        <button className="booking-button" onClick={() => handleBooking(movieDetails)}>
          Book Now
        </button>
        <Modal isOpen={modalIsOpen}>
          <h2>Theatres and Booking Options</h2>
          
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </Modal>
      </div>
    </div>
  );
};

export default MovieCard;
