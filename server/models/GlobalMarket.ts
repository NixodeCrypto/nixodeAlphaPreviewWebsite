import mongoose from 'mongoose';

const globalMarketSchema = new mongoose.Schema({
  market_cap_usd: {
    type: Number,
    required: true,
  },
  volume_24h_usd: {
    type: Number,
    required: true,
  },
  bitcoin_dominance_percentage: {
    type: Number,
    required: true,
  },
  cryptocurrencies_number: {
    type: Number,
    required: true,
  },
  market_cap_ath_value: {
    type: Number,
    required: true,
  },
  market_cap_ath_date: {
    type: String,
    required: true,
  },
  volume_24h_ath_value: {
    type: Number,
    required: true,
  },
  volume_24h_ath_date: {
    type: String,
    required: true,
  },
  market_cap_change_24h: {
    type: Number,
    required: true,
  },
  volume_24h_change_24h: {
    type: Number,
    required: true,
  },
  last_updated: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('GlobalMarket', globalMarketSchema);
