import "./App.css";
import Recipe from "./components/Recipe";
import {useSelector } from "react-redux";

import Nav from './Styles/Nav';
import GlobalStyle from './Styles/Global';
import Form from './components/Form';
import Column from './Styles/Grid/Column';
import Container from './Styles/Grid/Container';
import Row from './Styles/Grid/Row';
import { Route, Routes } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  const{ count, message} = useSelector(state => state)

  return (
    <Container>
      <GlobalStyle />
      <Row>
        <Column number={1}>
          <Nav>
            Number of Recipe(s) : { count }
          </Nav>
        </Column>
      </Row>
      
      <Row>
        <Column number={1}>
        <Routes>
          <Route path="/" element={<Recipe />} />
          <Route path="/recipes/:recipeIndex" element={<RecipeDetail />} />
        </Routes>
        </Column>
      </Row>
        
      <Row>
        <Column number={1}>
          <Nav>
            Add a Recipe
          </Nav>
        </Column>
      </Row>

      <Row>
        <Column number={1}>
          <Form />
        </Column>
      </Row>
      {/* <div className="App">
      
    </div> */}
    </Container>
    
  );
}

export default App;
