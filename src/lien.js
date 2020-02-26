import React from 'react'


const Lien = props=>{
    return(
        <div class="lien">
            <h1>
                We are a global company
                <br/>with local culture
            </h1>
            <ul class="logos">
              { props.data.map(el=>(
                  <li>
                    <a href ={el.lien}>
                    <svg xmlns={el.svg} width="200" height="32" fill="#747474" viewBox="0 0 200 32">
                            <path
                                d={el.d}>
                            </path>
                        </svg>
                    </a>

                  </li>
              ))}
                
            </ul>
            </div>
    )
}
export default Lien ;