import React from 'react'


const Photo = props =>{
    return( props.tab.map(el=>(
<div class="photoclas">
{el.map(a =>(
    <div class="carte">
    <a href={a.lien} class="photo">
        <figure class="office__image">
            <img scr={a.scr} srcset={a.srcset}/>
        </figure>
        <div class="office__desc">
           {a.txt}
            <span class="btn btn--small">See openings</span>
        </div>
    </a>
    </div>
))

}



</div>
    )) 
    

    






    )
}
export default Photo ;