import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import booksData from '../books.json';

const Shop = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, book) => total + (book.discountedPrice || book.price), 0);
  };

  return (
    <div className="container">
      <h1>Книжный магазин</h1>
      <div className="row">
        <div className="col-md-8">
          <h2>Каталог товаров</h2>
          <div className="row">
            {booksData.map((book) => (
              <div className="col-md-4 mb-4" key={book.id}>
                <div className="card card-equal-height">
                  <img src={book.cover} className="card-img-top" alt={book.title} />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">Автор: {book.author}</p>
                    <p className="card-text">
                      <span className={book.discountedPrice ? 'discounted-price' : ''}>
                        {book.discountedPrice ? <del>{book.price} руб.</del> : book.price + ' руб.'}
                      </span>
                      <br />
                      <span className="discount-price">
                        {book.discountedPrice ? book.discountedPrice + ' руб.' : ''}
                      </span>
                    </p>
                    <button className="btn btn-primary" onClick={() => addToCart(book)}>
                      Добавить в корзину
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <h2>Корзина</h2>
          <ul className="list-group">
            {cart.map((item, index) => (
              <li className="list-group-item" key={index}>
                {item.title} - {item.discountedPrice ? item.discountedPrice : item.price} руб.
              </li>
            ))}
          </ul>
          <div className="mt-3">
            {calculateTotalPrice() == 0? 'В корзине ещё нет товаров': <strong>Итого: {calculateTotalPrice()} руб.</strong>}
            
          </div>
          <button className="btn btn-success mt-3">Оплатить</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
