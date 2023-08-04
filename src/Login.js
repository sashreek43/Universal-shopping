import './Login.css'
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function Login(props) {
    const { setUser } = useContext(UserContext);

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        emailphone: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const {emailphone, password} = formData
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const phoneRegex = /^\d{10}$/;
        const isValidEmail = emailRegex.test(emailphone);
        const isValidPhoneNumber = phoneRegex.test(emailphone);

        if (isValidEmail || isValidPhoneNumber) {
            const getuserArr = localStorage.getItem('user');

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr)
                const userLogin = userdata.filter((el, index) => {
                    return ((el.email === formData.emailphone && el.password === formData.password) ||
                        (el.phone === formData.emailphone && el.password === formData.password))
                })

                if (userLogin.length === 0) {
                    alert("Invalid details")
                }
                else {
                    setUser(formData)
                    navigate('/Shop')
                }
            }
        }
        else {
            alert("Enter a valid email or phone no")
        }
    }

    return (
        <div className="login-container">
            <h2 className='loginHeading'>Login</h2>
            <form className='loginForm' onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email or Phone</label>
                    <input
                        type="text"
                        id="emailphone"
                        name="emailphone"
                        value={formData.emailphone}
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
                <button type="submit" className='loginBtn'>Login</button>
            </form>
        </div>
    )
}