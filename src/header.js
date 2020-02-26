import React from "react";

const Drop = props => {

    return  ( <ul className="headlink">
    {props.data.map(drop => (
      <>
        <li className='drop'>
          <a href={drop.link}>
            {drop.txt}
          </a>
          {drop.dropdawn && (
          <ul className="dropdown">
            {drop.dropdawn.map(el => (
              <li>
                <a href={el.link}>
                  {el.txt}
                </a>
              </li>
            ))}
          </ul>
        )}
        </li>
      
      </>
    ))}
  </ul>);
};

const Head = props => {
  return (
    <header className="head">
      <div class="headbar">
        <img
          class="logo"
          src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
          alt="Docplanner Group"
        />
        <div class="head_link">
          <Drop data={props.data} />
        </div>
      </div>
    </header>
  );
};
export default Head;
