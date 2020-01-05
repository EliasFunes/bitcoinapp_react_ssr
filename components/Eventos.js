import Evento from "./Evento";

const Eventos = ({eventos}) => {
    const eventosId = Object.keys(eventos);
    return (
        <div className="list-group">
            {eventosId.map(key => (
                <Evento
                    key={key}
                    info={eventos[key]}
                />
            ))}
        </div>
    );
};

export default Eventos;
