import { useParams, useNavigate } from "react-router-dom";
import { Preloader } from "../components/Preloader";
import { getFilteredCategory } from "../api";
import { useEffect, useState } from "react";
import { MealList } from "../components/MealList";

function Category() {
    const { name } = useParams([]);
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

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
            {!meals?.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
}

export { Category };
