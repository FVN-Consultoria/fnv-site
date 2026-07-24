import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo-fvn.svg'

const PORTAL_URL = 'https://portal.evoluti.tec.br/'
const BASE = import.meta.env.BASE_URL

const NAV_ITEMS = [
  { href: `${BASE}#hero`, label: 'Início' },
  { href: `${BASE}#sobre`, label: 'Sobre Nós' },
  { href: `${BASE}#servicos`, label: 'Serviços' },
  { href: `${BASE}#projetos`, label: 'Projetos' },
  { href: '/central-gestor', label: 'Central do Gestor', isPage: true },
  { href: `${BASE}#contato`, label: 'Contato' },
]

export default function Header() {
  const location = useLocation()
  const isCentralGestor = location.pathname === '/central-gestor'

  return (
    <header
      style={{
        position: isCentralGestor ? 'sticky' : 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        padding: '20px 48px',
        background: isCentralGestor ? '#0b1130' : 'transparent',
        borderBottom: isCentralGestor ? '1px solid rgba(74,99,255,.18)' : 'none',
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="FVN Consultores" style={{ height: 72, width: 'auto', display: 'block' }} />
      </Link>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
        {NAV_ITEMS.map((n) => {
          const active = n.isPage
            ? location.pathname === '/central-gestor'
            : !isCentralGestor && n.href === `${BASE}#hero`
          const linkStyle = {
            color: active ? '#fff' : '#e3e5ef',
            fontWeight: 600,
            fontSize: 14,
            borderBottom: active ? '2px solid #4a63ff' : 'none',
            paddingBottom: active ? 4 : 0,
          }
          return n.isPage ? (
            <Link key={n.href} to={n.href} style={linkStyle}>
              {n.label}
            </Link>
          ) : (
            <a key={n.href} href={n.href} style={linkStyle}>
              {n.label}
            </a>
          )
        })}
      </nav>
      <a href={PORTAL_URL} target="_blank" rel="noopener" className="btn-primary" style={{ borderRadius: 6 }}>
        ACESSAR PORTAL
      </a>
    </header>
  )
}
