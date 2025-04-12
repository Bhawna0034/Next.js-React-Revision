import Link from 'next/link';
import React, { use } from 'react'

const Article = ({params, searchParams}) => {
    const {articleID} = (params);
    const lang = searchParams?.lang || "en" || fr;
  return (
    <div>
      <h2 className='text-3xl font-bold'>News Article</h2>
       <p>Reading in a language</p>
       <div>
        <Link href={`/articles/${articleID}?lang=en`}>English</Link>
        <Link href={`/articles/${articleID}?lang=fr`}>French</Link>
       </div>
    </div>
  )
}

export default Article
