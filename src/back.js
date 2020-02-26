import React from 'react'


const Block = props =>{
    return( props.data.map(el=>( 
        <div className={el.class}>
        {el.map(a =>(
 <div class="caro">
 <img scr={a.scr} srcset={a.srcset}/>
 <h3>{a.txt}</h3>
 <p>{a.text} </p>
</div>
        ))
        }
         
   
  
</div>

        ) )
    

    )
}







 const Back = props=>{
     return(<div class="back">
     <div class="affich">
     <div class="in_affich1">
         <div>
             <h1>The world's
                 biggest healthcare platform
             </h1>
             <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20
                 countries.
             </p>
         </div>
 <img class="logoo" src="https://www.docplanner.com/img/logo.png"/>

     </div>
       <div class="in_affich2">
      <Block data={props.data}/>  
           </div> 
     </div>
 </div>)
 }



export default Back