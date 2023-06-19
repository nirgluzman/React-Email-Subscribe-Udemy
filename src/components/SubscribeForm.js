import axios from 'axios';
import { useState } from 'react';

const SubscribeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an Axios request to subscribe
      const response = await axios.post(process.env.REACT_APP_SUBSCRIBE_URL, {
        email,
        name,
        message,
      });
      console.log('Subscribe status:', response);
      // Reset form fields
      setEmail('');
      setName('');
      setMessage('');
    } catch (error) {
      console.error('Subscribe error:', error);
      // Handle error logic here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='fromEmail'>Name:</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor='subject'>Subject:</label>
        <input
          type='text'
          id='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default SubscribeForm;
