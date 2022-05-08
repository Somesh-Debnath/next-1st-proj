import Meta from '../components/Meta'
import {server} from '../config'
import ArticleList from '../components/ArticleList'
export default function Home({articles}) {

  return (
    <div >
      <Meta/>
      <h1>Welcome to my Website
      </h1>
      <ArticleList articles={articles} />
     </div>
  )
}
export async function getStaticProps() {
  const res=await fetch(`${server}/api/articles`)
  const articles=await res.json()
  return {
    props:
    {
       articles
    },
  }
}
// export async function getStaticProps() {
//   const res=await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
//   const articles=await res.json()
//   return {
//     props:
//     {
//        articles
//     },
//   }
// }
