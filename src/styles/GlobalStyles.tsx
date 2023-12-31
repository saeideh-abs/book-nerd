'use client'

import React from 'react'
import { Global } from '@emotion/react'
import tw, { css, theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css({
  html: { ...tw`h-full` },
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`h-full`,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
