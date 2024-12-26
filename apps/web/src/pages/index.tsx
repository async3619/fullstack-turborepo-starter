import { LogCountDocument, useLogCountQuery } from '@/__generated__/graphql'

import { addApolloState, initializeApollo } from '@/lib/apollo'

import Home from '@/pages-lib/home'

export default function Index() {
  const { data } = useLogCountQuery()

  return <Home logCount={data?.logCount} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: LogCountDocument,
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}
