import { ApolloProvider } from "@apollo/client";
import "../public/styles.css";
import client from "../lib/graphql";
import { RecordProvider } from "../store/recordContext";

function MyApp({ Component, pageProps }) {
  return (
    <RecordProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </RecordProvider>
  );
}

export default MyApp;
