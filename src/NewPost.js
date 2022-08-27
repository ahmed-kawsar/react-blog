const NewPost = ({
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
  handleSubmit,
}) => {
  return (
    <main className='newPost' onSubmit={handleSubmit}>
      <h2>New Post</h2>
      <form className='newPostForm'>
        <input
          className='postTitle'
          type='text'
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <textarea
          className='postBody'
          type='text'
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button className='btn submit-btn' type='submit'>
          Add Post
        </button>
      </form>
    </main>
  )
}

export default NewPost
