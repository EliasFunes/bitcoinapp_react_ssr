import Head from "next/head";

import Navegacion from "./Navegacion";

const MasterPage = (props) => (
    <div>
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <title>Bitcoin App</title>

            <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css"/>
        </Head>

        <Navegacion/>

        <div className="container mt-4">
            {props.children}
        </div>

    </div>
);

export default MasterPage;