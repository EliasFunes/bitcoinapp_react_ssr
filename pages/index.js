import MasterPage from "../components/Master";
import fetch from 'isomorphic-unfetch';
import Precio from "../components/Precio";
import Noticias from "../components/Noticias";
import Eventos from "../components/Eventos";

const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del Bitcoin</h2>
                <Precio
                    precio={props.precioBitcoin}
                />
            </div>

            <div className="col-md-8">
                <h2 className="my-4">Noticias sobre Bitcoin</h2>
                <Noticias
                    noticias={props.noticias}
                />
            </div>
            <div className="col-md-4">
                <h2 className="my-4">Próximos Eventos Bitcoin</h2>
                <Eventos
                    eventos={props.eventos}
                />
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () => {
    const precio = await fetch(`https://api.coinmarketcap.com/v2/ticker/1/`);

    const noticiasKey = "55b8f275e9fa475694a734fa5d455cc9";
    const noticias = await  fetch(`https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${noticiasKey}&language=es`);

    const eventosToken = "UMJSL7AKRYAOK2OM5M5G";

    /**TODO: deprecated endpoint*/
    const eventos = await fetch(`https://www.eventbriteapi.com/v3/events/search/?token=${eventosToken}&q=Bitcoin&sort_by=date&locale=es_ES`);


    const resPrecio = await precio.json();
    const resNoticia = await noticias.json();
    // const resEventos = await eventos.json();

    return {
        precioBitcoin: resPrecio.data.quotes.USD,
        noticias: resNoticia.articles,
        eventos: [
            {
                name:{
                    text:"Deprecated endpoint"
                },
                url:"https://github.com",
                description:{
                    text:"La api ya no funciona visteee"
                }
            },
            {
                name:{
                    text:"Deprecated endpoint 2"
                },
                url:"https://github.com/EliasFunes",
                description:{
                    text:"La api ya no funciona visteeeee 2"
                }
            }
        ]
    }
}

export default Index;
