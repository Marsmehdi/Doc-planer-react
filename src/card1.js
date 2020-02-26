import React from "react";


const Card = props =>{
    return( <section className="section2">
{props.crd.map(card =>(<div className={card.css}>
<h2>{card.titre} </h2>
<h1>{card.text}</h1>
{card.checkbox && (
    <div className="style-select">
        <select data-id="domain-switcher">
            {card.checkbox.map(el =>( 
            <option value={el.value} >{el.tt}</option>
            ))}
        </select>
    </div>
)}
 <figure className="image">
 <img src={card.img}/>
 </figure>

</div>

)

)

}


</section>)
}
export default Card ;