import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import Footer from './Footer'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'

const App = () => {
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem('blog')) || []
  )
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('blog', JSON.stringify(posts))
  }, [posts])

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    )
    setSearchResult(filteredResults.reverse())
  }, [posts, search])

  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id !== id)
    setPosts(postList)
    navigate('/')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = { id, datetime, title: postTitle, body: postBody }
    setPosts([...posts, newPost])
    setPostTitle('')
    setPostBody('')
    navigate('/')
  }

  return (
    <div className='App'>
      <Header />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route index element={<Home posts={searchResult} />} />
        <Route path='/about' element={<About />} />
        <Route
          path='/post'
          element={
            <NewPost
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path='/post/:id'
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer posts={posts} />
    </div>
  )
}

export default App
