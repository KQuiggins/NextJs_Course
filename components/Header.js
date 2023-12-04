const Header = () => {
  return (
    <header>
      <ul className="flex justify-center gap-2">
        <li>
            <a href="/">
                Home
            </a>
        </li>
        <li>
            <a href="/dashboard">
                Dashboard
            </a>
        </li>
        <li>
            <a href="/blog">
                Blog
            </a>
        </li>
        <li>
            <a href="/dashboard/settings">
                Settings
            </a>
        </li>
      </ul>
    </header>
  )
}

export default Header