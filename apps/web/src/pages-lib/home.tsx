import Head from 'next/head'
import { useState } from 'react'

import { Box, Button, Stack, Typography } from '@mui/material'

import { LogCountDocument, useCreateLogMutation } from '@/__generated__/graphql'

import * as Styled from './home.styled'

interface HomeProps {
  logCount: number | undefined
}

function Home({ logCount }: HomeProps) {
  const [count, setCount] = useState(0)
  const [createLog] = useCreateLogMutation({
    refetchQueries: [LogCountDocument],
  })

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const handleCreateLog = async () => {
    await createLog()
  }

  return (
    <Styled.Root>
      <Head>
        <title>Turborepo Fullstack Starter</title>
      </Head>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography
          variant="h5"
          sx={{ mb: 2 }}
        >
          Turborepo Fullstack Starter
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 2 }}
        >
          Log Count: {logCount}
        </Typography>
        <Stack
          direction="row"
          spacing={1}
        >
          <Button onClick={handleClick}>Counter: {count}</Button>
          <Button onClick={handleCreateLog}>Create Log</Button>
        </Stack>
      </Box>
    </Styled.Root>
  )
}

export default Home
