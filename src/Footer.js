const Footer = ({ posts }) => {
  return (
    <footer id='footer'>
      <p>
        {posts.length} Blog Post{posts.length <= 1 ? '' : 's'}
      </p>
    </footer>
  )
}

export default Footer
