interface iNavBar {
  urls: Array<{ url: string; label: string }>
}

export const NavBar = ({ urls }: iNavBar) => {
  return (
    <nav className='w-full'>
      <h1 className='text-3xl p-5'>
        <a href='/'>Pol Penaloza</a>
      </h1>
      {urls.map(({ url, label }) => {
        return (
          <div key={`nav-${url}`} className='text-xl font-bold underline'>
            <a href={url}>{label}</a>
          </div>
        )
      })}
    </nav>
  )
}
