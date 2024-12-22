import Head from 'next/head'
import { useState } from 'react'

import { Box, Button, Typography } from '@mui/material'

import * as Styled from './home.styled'

function Home() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
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
        <Button onClick={handleClick}>Counter: {count}</Button>
      </Box>
    </Styled.Root>
  )
}

export default Home
