import Link from 'next/link'

const linkStyle = {
    marginRight:15
}

const Header = ()=>(
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <Link href="/hoc">
            <a style={linkStyle}>By Hoc</a>
        </Link>
        <Link href="/style">
            <a style={linkStyle}>Css in JS</a>
        </Link>
    </div>
)

export default Header