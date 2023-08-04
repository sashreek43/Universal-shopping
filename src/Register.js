import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    password: ''
  });

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { phone, email, password } = formData
    if (email === "") {
      alert("Email field is required")
    }
    else if (!email.includes("@")) {
      alert("Enter a valid email")
    }
    else if (phone.length !== 10) {
      alert("Enter a valid phone no")
    }
    else if (password.length < 5) {
      alert("Password should contain atleast 5 characters")
    }
    else {
      localStorage.setItem('user', JSON.stringify([...data, formData]))
      navigate('/Login')
    }


  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='registerBtn'>Register</button>
        <p className='alr_registered'>Already have an account?<Link to='/Login'>Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
