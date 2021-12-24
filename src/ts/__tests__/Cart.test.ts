import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie'

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add book', () => {
  const cart = new Cart();
  const book =  new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  cart.add(book);
  expect(cart.items).toEqual([book]);
});

test('add movie', () => {
  const cart = new Cart();
  const movie = new Movie(
    1234, 
    'The Avengers', 
    2012, 
    'USA', 
    'Avengers Assemble!', 
    ['fantastyc', 'action', 'fantasy', 'adventure'],
    '137 min',
    399);
  cart.add(movie);
  expect(cart.items).toEqual([movie]);
});

test('get total', () => {
  const cart = new Cart();
  const movie = new Movie(
    1234, 
    'The Avengers', 
    2012, 
    'USA', 
    'Avengers Assemble!', 
    ['fantastyc', 'action', 'fantasy', 'adventure'],
    '137 min',
    399);
  const book =  new Book(1001, 'War and Piece', 'Leo Tolstoy', 1225, 2000);
  cart.add(book);
  cart.add(movie);
  expect(cart.getTotal()).toBe(2399);
});

test('get total with discount', () => {
  const cart = new Cart();
  const movie = new Movie(
    1234, 
    'The Avengers', 
    2012, 
    'USA', 
    'Avengers Assemble!', 
    ['fantastyc', 'action', 'fantasy', 'adventure'],
    '137 min',
    399);
  const book =  new Book(1001, 'War and Piece', 'Leo Tolstoy', 1225, 2000);
  cart.add(book);
  cart.add(movie);
  expect(cart.getTotalWithDiscount(10)).toBe(2159.1);
});

test('delete item', () => {
  const cart = new Cart();
  const movie = new Movie(
    1234, 
    'The Avengers', 
    2012, 
    'USA', 
    'Avengers Assemble!', 
    ['fantastyc', 'action', 'fantasy', 'adventure'],
    '137 min',
    399);
  const book =  new Book(1001, 'War and Piece', 'Leo Tolstoy', 1225, 2000);
  cart.add(book);
  cart.add(movie);
  cart.deleteItem(1001);
  expect(cart.items).toEqual([movie]);
});

