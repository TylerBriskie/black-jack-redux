import { createSelector } from 'reselect';

export const getPlayers = state => state.players;
export const getDealer = state => state.dealer;
export const getDeck = state => state.deck;