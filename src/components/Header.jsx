import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo-fvn.svg'

const PORTAL_URL = 'https://portal.evoluti.tec.br/'
const BASE = import.meta.env.BASE_URL
const SCROLL_THRESHOLD = 80

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
  const [scrolled, setScrolled] = useState(isCentralGestor)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (isCentralGestor) {
      setScrolled(true)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isCentralGestor])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const solid = isCentralGestor || scrolled || mobileOpen

  const renderLink = (n, onClick) => {
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
      <Link key={n.href} to={n.href} style={linkStyle} onClick={onClick}>
        {n.label}
      </Link>
    ) : (
      <a key={n.href} href={n.href} style={linkStyle} onClick={onClick}>
        {n.label}
      </a>
    )
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        padding: 'clamp(14px,4vw,20px) clamp(20px,6vw,48px)',
        background: solid ? 'linear-gradient(135deg,#0f1a5c 0%,#0a1445 45%,#050a26 100%)' : 'transparent',
        borderBottom: solid ? '1px solid rgba(74,99,255,.18)' : 'none',
        transition: 'background .2s ease, border-color .2s ease',
        display: 'flex',
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="FVN Consultores" style={{ height: 'clamp(44px,9vw,72px)', width: 'auto', display: 'block' }} />
      </Link>

      <nav className="nav-desktop" style={{ alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
        {NAV_ITEMS.map((n) => renderLink(n))}
      </nav>
      <a href={PORTAL_URL} target="_blank" rel="noopener" className="btn-primary portal-desktop" style={{ borderRadius: 6 }}>
        ACESSAR PORTAL
      </a>

      <button
        type="button"
        className="nav-toggle"
        aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setMobileOpen((v) => !v)}
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 5,
          width: 36,
          height: 36,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        <span style={{ display: 'block', width: 26, height: 2, background: '#fff', borderRadius: 1, transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none', transition: 'transform .2s ease' }} />
        <span style={{ display: 'block', width: 26, height: 2, background: '#fff', borderRadius: 1, opacity: mobileOpen ? 0 : 1, transition: 'opacity .2s ease' }} />
        <span style={{ display: 'block', width: 26, height: 2, background: '#fff', borderRadius: 1, transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none', transition: 'transform .2s ease' }} />
      </button>

      <div
        className={`nav-mobile${mobileOpen ? ' open' : ''}`}
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          flexDirection: 'column',
          gap: 4,
          padding: '12px 20px 24px',
          background: 'linear-gradient(135deg,#0f1a5c 0%,#0a1445 45%,#050a26 100%)',
          borderBottom: '1px solid rgba(74,99,255,.18)',
        }}
      >
        {NAV_ITEMS.map((n) => (
          <div key={n.href} style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
            {renderLink(n, () => setMobileOpen(false))}
          </div>
        ))}
        <a
          href={PORTAL_URL}
          target="_blank"
          rel="noopener"
          className="btn-primary"
          style={{ borderRadius: 6, justifyContent: 'center', marginTop: 16 }}
          onClick={() => setMobileOpen(false)}
        >
          ACESSAR PORTAL
        </a>
      </div>
    </header>
  )
}
