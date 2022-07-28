import React from 'react'
import {Container} from 'react-bootstrap'

const LOGIN_URL = 'https://accounts.spotify.com/authorize?client_id=4b37dc474d8d49f49cbb4c2579ecb285&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

export default function Login() {
  return (
    <Container 
        className="d-flex justify-content-center align-items-center"
        style={{minHeight: "100vh"}}>
      <a className="btn btn-success btn-lg" href={LOGIN_URL}>
          <h1>LOGIN</h1>
          </a>
    </Container>
  )
}
