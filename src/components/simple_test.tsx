import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import ProductSelection from './ProductSelection';
import StainExpertAI from './StainExpertAI';
import Footer from './Footer';

test('renders Header', () => {
  render(<Header />);
});

test('renders Hero', () => {
  render(<Hero />);
});

test('renders Features', () => {
  render(<Features />);
});

test('renders HowItWorks', () => {
  render(<HowItWorks />);
});

test('renders ProductSelection', () => {
  render(<ProductSelection />);
});

test('renders StainExpertAI', () => {
  render(<StainExpertAI />);
});

test('renders Footer', () => {
  render(<Footer />);
});
