import React, { useState } from 'react';
import './makeOrder.css';

const MakeOrder = () => {
  const [formData, setFormData] = useState({ phone: '', email: '', message: '' });
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any additional actions like sending the data to a server here

    // Clear the form inputs
    setFormData({ phone: '', email: '', message: '' });

    // Set the submission message
    setSubmissionMessage('Заявката ви е изпратена и ще се свържем с вас в срок от 3 дни');
  };

  return (
    <div className="gpt3__cta" id="order">
      <div className="gpt3__cta-content">
        <h3>Ако желаете да направите заявка за някой от нашите артисти</h3>
        <p>Попълнете полетата и кликнете "Заяви"</p>
        
        <form className="gpt3__cta-form" onSubmit={handleSubmit}>
          <div className="gpt3__cta-input-group">
            <label htmlFor="phone">Телефон:</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              placeholder="Въведете телефон" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="gpt3__cta-input-group">
            <label htmlFor="email">Имейл:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Въведете имейл адрес" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="gpt3__cta-input-group">
            <label htmlFor="message">Опишете заявката си:</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              placeholder='Кого, кога, къде и по какъв повод' 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="gpt3__cta-btn">
            <button type="submit">Заяви</button>
          </div>
        </form>
        {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
      </div>
    </div>
  );
};

export default MakeOrder;
