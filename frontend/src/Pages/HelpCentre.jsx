import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import Modal from '../components/Modal/Modal';

const HelpCenter = () => {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      const response = await axios.get('http://localhost:4040/api/cards');
      setCards(response.data);
    };
    fetchCards();
  }, []);

  const handleCardSubmit = async (newCard) => {
    const response = await axios.post('http://localhost:4040/api/cards', newCard);

    if (response.status === 201) {
      setCards([response.data, ...cards]);
    } else {
      console.error('Failed to create card');
    }
  };

  return (
    <div className="App">
      <Header onRequestClick={() => setIsModalOpen(true)} />
      <SearchBar setCards={setCards}/>
      <div className="card-container">
        {cards.length > 0 ? (
          cards.map((card) => (
            <Card key={card._id} title={card.title} description={card.description} />
          ))
        ) : (
          <span className="no-record">No records available</span>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCardSubmit}
      />
      <div className="footer-container">
        <Footer/>
      </div>
    </div>
  );
};

export default HelpCenter;
