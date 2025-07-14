import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import './RegStyle.css'

function RegForm() {
  return (
    <div className='container'>
        <div className='LoginForm'>
            <div className='h1Form'>
                <h1>CREATE AN ACCOUNT</h1>
            </div>
            <div className='row'>
            <FloatingLabel
                className="mb-3">
                <Form.Control  className='inputs'type="email" placeholder="Name" />
            </FloatingLabel>
             <FloatingLabel
                className="mb-3">
                <Form.Control  className='inputs'type="email" placeholder="Email" />
            </FloatingLabel>
            </div>
            <div className="row">
                <FloatingLabel>
                    <Form.Control  className='inputs' type="password" placeholder="Password" />
                </FloatingLabel>
                 <FloatingLabel>
                    <Form.Control  className='inputs' type="password" placeholder="Repeat password" />
                </FloatingLabel>
            </div>
            <div className='bottomRow'>
                <div className='socialIcons'>
                    <img src="./public/fb.png" alt="" />
                    <img src="./public/gog.png" alt="" />
                    <img src="./public/twit.png" alt="" />
                    <img src="./public/apple.png" alt="" />
                </div>
                <Button className='signinButton' type="submit">Log In</Button>
            </div>
            <NavLink to="/" className="createAccountLink">Welcome to Atlatis</NavLink>

        </div>
        <div className='LoginFormImages'>
            <img src="./public/1.jpg" alt="" />
            <img src="./public/2.jpg" alt="" />
            <img src="./public/3.jpg" alt="" />
            <img src="./public/4.jpg" alt="" />
            <img src="./public/5.jpg" alt="" />
            <img src="./public/6.jpg" alt="" />
            <img src="./public/7.jpg" alt="" />
            <img src="./public/8.jpg" alt="" />
        </div>
      </div>
  );
}

export default RegForm;