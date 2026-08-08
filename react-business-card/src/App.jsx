import photo from './assets/photo.png'

export function Header() {
    return (
        <header>
            <img src={photo} alt='Portrait of Nguyen Xuan Dat' />
        </header>
    )
}

export function Intro() {
    return (
        <main>
            <h1>Nguyen Xuan Dat</h1>
            <h2>Software Engineer</h2>
            <span>ngxuandat.github.io</span>
        </main>
    )
}

export function Bio() {
    return (
        <div>
            <h3>About</h3>
            <p>
                I'm a software engineer. Recently, I'm taking on software architect role as well, which is actually requiring more skills than I currently have. <br />
                I'm getting a little nervous sometimes but super psych to take on the challenge. Things are getting exciting!
            </p>
            <h4>Interests</h4>
            <p>
                I like quite a lot of things. Whatever I can learn something new from will generally pique my interest. <br />
                To name a few, reading technical books, watch educational YouTubes, etc.
                I also really enjoy going to the Hot Spings as well, especially after a good workout. It's such a god-sent experience.
            </p>
        </div>
    )
}

function XLogo() {
    return (
        <svg className='logo' viewBox='0 0 24 24' aria-hidden='true'>
            <path
                fill='currentColor'
                d='M18.9 3H22l-6.9 7.87L23.2 21h-6.9l-5.4-7.11L4.6 21H1.5l7.4-8.4L.8 3h7l4.92 6.47L18.9 3Zm-1.2 16.2h1.72L7.9 4.8H6.05l11.65 14.4Z'
            />
        </svg>
    )
}

function FacebookLogo() {
    return (
        <svg className='logo' viewBox='0 0 24 24' aria-hidden='true'>
            <path
                fill='currentColor'
                d='M14.67 8.33V6.41c0-.92.61-1.13 1.04-1.13H18V1.91h-3.2c-3.55 0-4.36 2.67-4.36 4.37v2.05H8.07v3.57h2.37V22h4.23v-10.1h2.86l.42-3.57h-3.28Z'
            />
        </svg>
    )
}

function InstagramLogo() {
    return (
        <svg className='logo' viewBox='0 0 24 24' aria-hidden='true'>
            <path
                fill='currentColor'
                d='M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 6.7A5.3 5.3 0 1 1 6.7 12 5.31 5.31 0 0 1 12 6.7Zm0 2A3.3 3.3 0 1 0 15.3 12 3.3 3.3 0 0 0 12 8.7ZM18.1 5.2a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2Z'
            />
        </svg>
    )
}

function GitHubLogo() {
    return (
        <svg className='logo' viewBox='0 0 24 24' aria-hidden='true'>
            <path
                fill='currentColor'
                d='M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.72c-2.78.6-3.37-1.17-3.37-1.17a2.66 2.66 0 0 0-1.12-1.47c-.92-.63.07-.62.07-.62a2.12 2.12 0 0 1 1.55 1.04 2.16 2.16 0 0 0 2.95.84 2.16 2.16 0 0 1 .65-1.36c-2.21-.25-4.54-1.1-4.54-4.9a3.83 3.83 0 0 1 1-2.66 3.56 3.56 0 0 1 .1-2.62s.84-.27 2.75 1a9.5 9.5 0 0 1 5 0c1.9-1.31 2.74-1 2.74-1a3.56 3.56 0 0 1 .1 2.62 3.83 3.83 0 0 1 1 2.66c0 3.81-2.34 4.64-4.57 4.89a2.42 2.42 0 0 1 .69 1.88v2.79c0 .27.18.58.69.48A10 10 0 0 0 12 2Z'
            />
        </svg>
    )
}

export function Footer() {
    return (
        <footer>
            <XLogo />
            <FacebookLogo />
            <InstagramLogo />
            <GitHubLogo />
        </footer>
    )
}
