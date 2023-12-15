import React, { useState } from 'react';
import preprLogo from "../../assets/preprLogo.png"

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    confirmPassword: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className='registrationContainer'>
      <div className='logoContainer'>
        <img src={preprLogo} alt="prepr logo" />
      </div>


      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName" className="sr-only">First name:</label>
          <i class="bi bi-person-rolodex"></i>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder='First name'
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="sr-only">Last name:</label>
          <i class="bi bi-person-rolodex"></i>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder='Last name'
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="username" className="sr-only">Username:</label>
          <i class="bi bi-person"></i>
          <input
            type="text"
            id="username"
            name="username"
            placeholder='Username'
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password:</label>
          <i class="bi bi-lock-fill"></i>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="sr-only">Confirm Password:</label>
          <i class="bi bi-check2-all"></i>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>

        </div>
        <div>
          <label htmlFor="password" className="sr-only">Email:</label>
          <i class="bi bi-envelope"></i>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className='registerButton'>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
