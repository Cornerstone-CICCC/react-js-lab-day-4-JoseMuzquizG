import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>Blog Poster</h1>
      <h2>Welcome to our blog page</h2>
      <Link to="/blog">Go to Blogs</Link>
    </div>
  )
}

export default Home