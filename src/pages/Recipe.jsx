import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import { Preloader } from "../components/Preloader";

function Recipe() {
    const [recipe, setRecipe] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <>
            <div className="back">
                <i
                    className="large material-icons toBack"
                    onClick={() => navigate(-1)}
                >
                    chevron_left
                </i>
            </div>
            {!recipe?.idMeal ? (
                <Preloader />
            ) : (
                <div className="recipe">
                    <div className="recipe__info">
                        <img
                            className="recipe__img"
                            src={recipe.strMealThumb}
                            alt={recipe.strMeal}
                        />
                        <div className="info">
                            <h3 style={{ margin: 0 }}>{recipe.strMeal}</h3>
                            <h4>Category: {recipe.strCategory}</h4>
                            {recipe.strArea ? (
                                <h5>Area: {recipe.strArea}</h5>
                            ) : null}
                        </div>
                    </div>
                    <p>{recipe.strInstructions}</p>

                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if (key.includes("Ingredient") && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>
                                                {
                                                    recipe[
                                                        `strMeasure${key.slice(
                                                            13
                                                        )}`
                                                    ]
                                                }
                                            </td>
                                        </tr>
                                    );
                                }
                            })}
                        </tbody>
                    </table>

                    {recipe.strYoutube ? (
                        <div className="row">
                            <h4>Video Recipe</h4>
                            <iframe
                                title={id}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                    -11
                                )}`}
                            />
                        </div>
                    ) : null}
                </div>
            )}
        </>
    );
}

export { Recipe };
