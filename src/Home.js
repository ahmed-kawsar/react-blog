import Feed from './Feed'

const Home = ({ posts }) => {
  return (
    <main className='home'>
      {posts.length ? <Feed posts={posts} /> : <p>No More Post</p>}
    </main>
  )
}

export default Home
