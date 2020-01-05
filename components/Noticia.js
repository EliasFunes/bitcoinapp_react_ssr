const Noticia = ({noticia}) => {

    const {urlToImage, url, title, description, source } = noticia;

    let imagen = (urlToImage)
        ? <img src={urlToImage} alt={title} className="card-img-top"/>
        : <p className="text-center my-5">Imágen no disponible</p>;


    return (
        <div className="col-md-6 col-12 mb-4">
            <div className="card">
                <div className="card-image">
                    {imagen}
                </div>
                <div className="card-body">
                    <h3 className="card-title">
                        {title}
                    </h3>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{source.name}</p>
                    <a href={url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="btn btn-primary d-block">
                        Leer Noticia
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Noticia;
