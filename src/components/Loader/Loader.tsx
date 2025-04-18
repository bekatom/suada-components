import React, { ReactElement } from 'react'

import { LoaderCircle } from './styled-components'
import CircularProgress from '@mui/material/CircularProgress'
import { ILoaderProps } from './loader.interface'

export const Loader = ({
  width = '40px',
  height = '40px',
  withBackground = false,
}: ILoaderProps): ReactElement => {
  return (
    <>
      <LoaderCircle>
        <CircularProgress style={{ width, height }} />
      </LoaderCircle>
    </>
  )
}
