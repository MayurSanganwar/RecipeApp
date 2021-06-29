import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Recipe from './Recipe';

function App() {

  const APP_ID = "11f75602";
  const APP_KEY = "6304e81f1de45921a64b5759382bd5f1";
  
  const[recipes,newRecipes] = useState([]);
  const[search,setSearch] = useState("");
  const[query,setQuery] = useState('chicken')

  useEffect(()=>{
    getrecipe();
    
  },[query])


  const getrecipe = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    newRecipes(data.hits)
    console.log(data.hits);
  }

  const updateSearch = (event) =>{
    setSearch(event.target.value);
    console.log(search);
  }

  const getSearch = event =>{
    event.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
          <input className="search-input" type="text" value={search} onChange={updateSearch} placeholder="Search recipe"></input>
          <button className="search-button"> Search </button>
      </form>
      <div className="show-recipe">
      {recipes.map(recipe =>{
       return <Recipe
       key={recipe.recipe.label} 
       title={recipe.recipe.label} 
       calories={recipe.recipe.calories}  
       image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredientLines}/>
      })}
      </div>
    </div>
  );
}

export default App;
