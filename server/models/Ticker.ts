import mongoose from 'mongoose';

const tickerSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  symbol: {
    type: String,
    required: true,
  },
  rank: {
    type: Number,
    required: true,
  },
  circulating_supply: {
    type: Number,
    required: true,
  },
  total_supply: {
    type: Number,
    required: true,
  },
  max_supply: {
    type: Number,
    required: true,
  },
  beta_value: {
    type: Number,
    required: true,
  },
  first_data_at: {
    type: String,
    required: true,
  },
  last_updated: {
    type: String,
    required: true,
  },
  quotes: {
    type: Object,
    required: true,
  },
});

export default mongoose.model('Ticker', tickerSchema);
