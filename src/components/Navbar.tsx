import { useState, ChangeEvent, MouseEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [input, setInput] = useState<string>("")
  const navigate = useNavigate()

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      setInput(e.target.value)
  }

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    navigate(`/search/${input}`)
    setInput("")
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/1200px-ZDF_logo%21_Logo_2021.svg.png' alt='logo' /></Link>
      <form className='search'>
          <input type='text' placeholder='Type a Movie name' value={input} onChange={handleInput} required={true}/>
          <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  )
}

export default Navbar
