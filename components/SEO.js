import React from 'react'
import Head from 'next/head'

function SEO({title}) {
  return (
    <Head>
    <title>{`${title || ""}  Khalis Foundation – 20+ years of Sharing Sikhi Through Technology`}</title>
  </Head>
  )
}

export default SEO