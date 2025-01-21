import { useNavigate } from 'react-router'

const LandingRoute = () => {
  const navigate = useNavigate()
  const openNotes = () => {
    navigate('/notes')
  }

  return (
    <div id="landing" className="h-full text-body">
      <div id="landing-content" className="flex justify-between size-full p-10">
        <div id="landing-left" className="flex flex-col justify-center w-1/2 h-full">
          <h1 className="font-black text-5xl">game-notes.zip</h1>
        </div>
        <div
          id="landing-right"
          className="flex flex-col justify-center w-1/2 bg-primary h-1/2 my-auto"
        >
          <form id="landing-form" className="flex flex-col p-10">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input id="email" type="email" className="p-2 my-2" placeholder="Email" />
            <label htmlFor="password" className="text-white">
              Password
            </label>
            <input id="password" type="password" className="p-2 my-2" placeholder="Password" />
            <button
              id="login-button"
              type="submit"
              onClick={openNotes}
              className="bg-primary-dark text-white p-2 my-2"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LandingRoute
