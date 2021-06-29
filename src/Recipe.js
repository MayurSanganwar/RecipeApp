import React from 'react'
import style from './recipe.module.css'

const Recipe = (props) => {
    const {title,calories,image,ingredients} = props;
    return (
        <div >
            <h1 className={style.recipe}>{title}</h1>
            <p>{calories}</p>
            <img className={style.img} src={image} alt="receipeImage"></img>
            <ol className={style.ingredient}>
            {ingredients.map(ingredient=>{
                return(
                    <li>{ingredient}</li>
                )
            })}
            </ol>
        </div>
    )
}

export default Recipe
