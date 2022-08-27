import { useParams, Link } from 'react-router-dom'

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams()
  const post = posts.find((post) => post.id.toString() === id)
  return (
    <main className='postPage'>
      <article className='post'>
        {post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <button
              className='btn delete-btn'
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </button>
          </>
        )}
      </article>
    </main>
  )
}

export default PostPage
