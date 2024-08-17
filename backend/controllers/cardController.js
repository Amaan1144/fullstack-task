const Card = require('../models/Card');

//route for creating the cards data

exports.createCard = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newCard = new Card({ title, description });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create card', error: error.message });
  }
};

// route for fetching all data

exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards.reverse());
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve cards', error: error.message });
  }
};

//route for fetching single card on the basis of title

exports.getCardByTitle = async (req, res) => {

  try {
    const regex = new RegExp(req.params.title, 'i');
    const cards = await Card.find({ title: regex });
    if (!cards || cards.length === 0) {
      return res.status(404).json({ message: 'Card not found' });
    }
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve card', error: error.message });
  }
};
