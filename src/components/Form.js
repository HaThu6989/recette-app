import { useDispatch, useSelector } from "react-redux";
import { addRecipe, setRecipe } from "../actions/actions-types";
import Button from "../Styles/Button"
import Input from "../Styles/Input"


const Form = () => {
    const {recipe} = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleChange = e => {
        const{name, value} = e.target;
        dispatch(setRecipe({name, value}));
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addRecipe());
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name (recipe) :
            <Input onChange={handleChange} value={recipe} name="recipe" />
            </label>
            <Button size={1}>
                Add
            </Button>
        </form>
    )

}

export default Form;