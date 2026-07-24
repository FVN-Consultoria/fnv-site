import { useLocation } from 'react-router-dom'
import logo from '../assets/logo-fvn.svg'

const PORTAL_URL = 'https://portal.evoluti.tec.br/'

const NAV_ITEMS = [
  { href: '/#hero', label: 'Início' },
  { href: '/#sobre', label: 'Sobre Nós' },
  { href: '/#servicos', label: 'Serviços' },
  { href: '/#projetos', label: 'Projetos' },
  { href: '/central-gestor', label: 'Central do Gestor', isPage: true },
  { href: '/#contato', label: 'Contato' },
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
      <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="FVN Consultores" style={{ height: 72, width: 'auto', display: 'block' }} />
      </a>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
        {NAV_ITEMS.map((n) => {
          const active = n.isPage
            ? location.pathname === '/central-gestor'
            : !isCentralGestor && n.href === '/#hero'
          return (
            <a
              key={n.href}
              href={n.href}
              style={{
                color: active ? '#fff' : '#e3e5ef',
                fontWeight: 600,
                fontSize: 14,
                borderBottom: active ? '2px solid #4a63ff' : 'none',
                paddingBottom: active ? 4 : 0,
              }}
            >
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
