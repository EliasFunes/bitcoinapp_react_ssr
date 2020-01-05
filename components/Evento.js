import React from 'react';

const Evento = ({info}) => {

    const {name, url, description} = info;

    let titulo = (name.text.length > 150) ? name.text.substr(0, 150) + '...' : name.text;
    let descripcion = (description.text) ? description.text.substr(0, 250) + '...' : '';

    return (
        <a href={url} target="_blank"
           rel="noreferrer noopener"
           className="list-group-item active text-light mb-1">
            <h3 className="mb-3">{titulo}</h3>
            <p className="mb-1">{descripcion}</p>
        </a>
    );

};

export default Evento;
