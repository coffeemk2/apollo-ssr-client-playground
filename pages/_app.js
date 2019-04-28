import React from "react";
import { Container } from "next/app";
import withApolloClient from "../lib/with-apollo-client";
import { ApolloProvider } from "react-apollo-hooks";

const App = props => {
  const { Component, apolloClient, pageProps } = props;
  return (
    <Container>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Container>
  );
};
export default withApolloClient(App);
