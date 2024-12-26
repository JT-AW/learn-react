export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    /**
     * Review Challenge:
     * Map over the list of ingredients and render them as list items
     * 
     * Note: We're doing things a weird way here. Don't worry,
     * we're building up to learning the right way 🙂
     */

    const ingredientItems = ingredients.map((ingredient) =>
        <li key={ingredient}>{ingredient}</li>
    )

    function handleSubmission(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const ingredient = formData.get("ingredient")
        ingredients.push(ingredient)
        console.log(ingredients)
    }
    
    return (
        <main>
            <form className="add-ingredient-form"
                onSubmit={handleSubmission}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientItems}
            </ul>
        </main>
    )
}