import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import Head from "next/head";
import CookieModal from "../components/CookieModal";
import "../styles/globals.css";

TimeAgo.addLocale(en);

// prettier-ignore
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous" />
        {/* <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js'/> */}
        <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <script src="/scripts.js" /> */}

      </Head>
      <Component {...pageProps} />
      <CookieModal />
      <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt=""/></noscript>
    </>
  );
}

export default MyApp;
