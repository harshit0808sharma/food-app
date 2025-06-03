import React, { Suspense } from 'react'
import ProductPageClient from './ProductPageClient'


const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <ProductPageClient/>
    </Suspense>
  )
}

export default page


