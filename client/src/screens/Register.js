
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class RegisterPage extends React.Component {
  state = {
    username: '',
    password: '',
    confirmPassword: ''
  }
  

  setValue(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  signup(e) {
    e.preventDefault();
    if(this.state.username === '' || this.state.password === '' || this.state.confirmPassword ==='') {
      alert('please enter info in all fields.')
    }
    else if(this.state.password !== this.state.confirmPassword) {
      alert('make sure your password matches.')
    } else {
      axios.post('/users/register', this.state).then(() => {
        alert('success!')
      })
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.signup(e)}>
          <Container>
            <Row>
              <Col>
                <h3>Register</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  placeholder="username"
                  name="username"
                  onChange={e => this.setValue(e)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  placeholder="password"
                  name="password"
                  onChange={e => this.setValue(e)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  placeholder="confirm password"
                  name="confirmPassword"
                  onChange={e => this.setValue(e)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button color="info" type='submit'>Submit</Button>
              </Col>
            </Row>

          </Container>
        </form>
      </div>
    )
  }
}

export default RegisterPage;
