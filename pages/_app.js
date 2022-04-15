import '../styles/globals.css'
import {ApolloProvider} from '@apollo/client';
import client from '../components/Apollo/ApolloClient';
import 'react-markdown-editor-lite/lib/index.css';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return( 
  <ApolloProvider client={client} >
      <Layout>
         <Component {...pageProps} />
      </Layout>
  </ApolloProvider>
  )
}

export default MyApp
