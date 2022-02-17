import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row } from 'react-bootstrap';
import { getRecommendedResults } from './services/searchApi';
import { ApiResponse } from './services/types';

function App() {

  const handleClick = async () => {
    const res:ApiResponse = await getRecommendedResults();
    console.log(res)
  }

  return (
    <main>

      <section>
        <Container>
          <Row>
            <h1>Museum Search</h1>
            <Button onClick={handleClick}>Get data</Button>
          </Row>
        </Container>
      </section>
      <Router>
        <Routes>
        </Routes>
      </Router>,
    </main>
  );
}

export default App;
