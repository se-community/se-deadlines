import Head from "next/head";
import {Container} from "react-bootstrap";

import Package from "../../package.json";

function Layout({ children }) {

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />

                <title>SE-Deadlines</title>

                <meta name="author" content={Package.author + "oi"} />
                <meta name="description" content={Package.description} />
                <meta name="keywords" content={Package.keywords} />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#021a29" />

                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                <meta name="apple-mobile-web-app-title" content="Thiago Ferreira" />

                <link rel="apple-touch-icon" sizes="180x180" href="/images/profile.jpg" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/images/favicons/site.webmanifest"></link>

                <meta property="og:title" content={Package.author} />
                <meta property="og:url" content={Package.homepage} />
                <meta property="og:description" content={Package.description} />
                <meta property="og:image" content="/images/profile.jpg" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="pt_BR" />
            </Head>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">SE-Deadlines</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <main>
                <Container>
                    {children}
                </Container>
            </main>
        </div>
    );
}

export default Layout;
