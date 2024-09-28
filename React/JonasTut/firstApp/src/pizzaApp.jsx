import './App.css'
import { useEffect, useState } from 'react'

function App() {

  return (
    <>  
      <Pizza name={"Pepperoni"} recipe={["pepperoni", "cheese"]} hero={"https://images5.alphacoders.com/357/thumb-1920-357914.jpg"}/>
      <Pizza name={"Hawaiian"} recipe={["bacon", "cheese", "pineapple"]} hero={"https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-ux-2880-1000,f_auto,q_auto:best/newscms/2017_23/2033771/170611-hawaiian-pizza-se-1035p.jpg"}/>
      <Pizza name={"Rib"} recipe={["short rib", "cheese", "pepper", "onion"]} hero={"https://thecuriousplate.com/wp-content/uploads/2017/08/Slow-Cooker-Sriracha-Beef-Short-Rib-Kimchi-White-Pizza-www.climbinggriermountain.com-4.jpg"}/>
    </>
  )

  function Pizza(props) {
    const recipe = props.recipe.join(", ")
    return (
    <div>
      <h2>{props.name}</h2>
      <p>{recipe}</p>
        <img
          style={{ aspectRatio: 1/1, width: "20%"}}
          src={props.hero}
        />
    </div>
    )
  }
}

export default App