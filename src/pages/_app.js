import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../../public/css/style.scss";

import Layout from "../components/layout";

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

