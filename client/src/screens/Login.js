
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class LoginPage extends React.Component {
    state = {
      username: '',
      password: ''
    }
  
    setValue(e) {
      this.setState({[e.target.name]: e.target.value})
    }
  
    login(e) {
      e.preventDefault();
      axios.post('/users/login', this.state).then((results) => {
        localStorage.setItem('token', results.data.token)
        window.location.pathname = "/home";
      })
  
    }
  
    render() {
      return(
        <div>
          <form onSubmit={e => this.login(e)}>
            <Container>
              <Row>
                <Col>
                  <h3>Login</h3>
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
                  <Button color="info" type='submit'>Submit</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Haven't registered? Click <a href="/register">here</a></p>
                </Col>
              </Row>
            </Container>
          </form>
        </div>
      )
    }
  }
  export default LoginPage;