import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  /**
   * Challenge: grab the employment status from the form and log it
   * to the console. (Remember to select one of the radios before submitting)
   * 
   * Note: This won't work the way you might expect quite yet!
   */

  function signUp(formData) {
    const data = Object.fromEntries(formData)
    const dietaryData = formData.getAll("dietaryRestrictions")
    data.dietaryRestrictions = dietaryData
    console.log(data)
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Dietary Restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="Vegetarian" />
            Vegetarian
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="Vegan" />
            Vegan
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="Gluten-Free" defaultChecked={true}/>
            Gluten-Free
          </label>
        </fieldset>

        <label htmlFor="favoriteColor">Favorite Color:</label>
        <select id="favoriteColor" name="favoriteColor">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
        </select>

        <button>Submit</button>

      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);