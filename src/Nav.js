import { Link } from 'react-router-dom'

const Nav = ({ search, setSearch }) => {
  return (
    <nav id='nav'>
      <form id='searchForm' onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          placeholder='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul id='navMenu'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/post'>Post</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
