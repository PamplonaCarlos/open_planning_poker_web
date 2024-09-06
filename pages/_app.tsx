import { useEffect } from "react";

import "../app/globals.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);

    return <Component {...pageProps} />;
}