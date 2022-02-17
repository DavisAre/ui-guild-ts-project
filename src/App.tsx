import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { getRecommendedResults } from './services/searchApi';
import { Item } from './services/types';
import { ResultFeed } from "./components/ResultFeed";
import { Navigation } from './components/Navbar'

function App() {

  const [items, setItems] = useState<Item[] | []>([])

  const getData = async () => {
    try {
      const res = await getRecommendedResults();
      if (typeof res === 'string') {
        console.log('Variable is a string');
      } else {
        setItems(res.items)
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <>
    <Navigation />
    <main>
      <section>
        <Container>
          <Router>
            <Routes>
              <Route path="/" element={<ResultFeed items={items} />} />
            </Routes>
          </Router>
        </Container>
      </section>
    </main>
    </>
  );
}

export default App;
