import { Link } from 'react-router-dom'
import logo from '../assets/logo-fvn.svg'

const BASE = import.meta.env.BASE_URL

const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8fa0f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.93.37 1.85.72 2.72a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.36-1.36a2 2 0 0 1 2.11-.45c.87.35 1.79.59 2.72.72A2 2 0 0 1 22 16.92z" />
  </svg>
)
const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8fa0f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)
const IconLinkedIn = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)
const IconFacebook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(135deg,#0f1a5c 0%,#0a1445 45%,#050a26 100%)',
        color: '#aab3d9',
        padding: '56px 48px 40px',
        borderTop: '1px solid rgba(74,99,255,.18)',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.6fr 1px 1.4fr 1px 1.4fr 1px auto',
          gap: 32,
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <img src={logo} alt="FVN Consultores" style={{ height: 76, width: 'auto', display: 'block', marginLeft: -8 }} />
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: '#aab3d9', maxWidth: 220 }}>
            Inteligência, estratégia e resultados para prefeituras e empresas.
          </p>
        </div>

        <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(255,255,255,.14)' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <span style={{ fontWeight: 700, fontSize: 13, color: '#fff', textTransform: 'uppercase', letterSpacing: '.14em' }}>
            Links Rápidos
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 28px' }}>
            <a href={`${BASE}#sobre`} style={{ fontSize: 14, color: '#aab3d9' }}>Sobre nós</a>
            <a href={`${BASE}#projetos`} style={{ fontSize: 14, color: '#aab3d9' }}>Projetos</a>
            <a href={`${BASE}#servicos`} style={{ fontSize: 14, color: '#aab3d9' }}>Serviços</a>
            <Link to="/central-gestor" style={{ fontSize: 14, color: '#aab3d9' }}>Central do Gestor</Link>
            <a href={`${BASE}#contato`} style={{ fontSize: 14, color: '#aab3d9' }}>Contato</a>
            <a href="#" style={{ fontSize: 14, color: '#aab3d9' }}>Política de Privacidade</a>
          </div>
        </div>

        <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(255,255,255,.14)' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <span style={{ fontWeight: 700, fontSize: 13, color: '#fff', textTransform: 'uppercase', letterSpacing: '.14em' }}>
            Contato
          </span>
          <a href="https://wa.me/5531999180500" target="_blank" rel="noopener" style={{ fontSize: 14, color: '#aab3d9', display: 'flex', alignItems: 'center', gap: 10 }}>
            <IconPhone />
            (31) 99918-0500
          </a>
          <a href="mailto:contato@fvnconsultores.com.br" target="_blank" rel="noopener" style={{ fontSize: 14, color: '#aab3d9', display: 'flex', alignItems: 'center', gap: 10 }}>
            <IconMail />
            contato@fvnconsultores.com.br
          </a>
        </div>

        <div style={{ width: 1, alignSelf: 'stretch', background: 'rgba(255,255,255,.14)' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <a href="https://www.linkedin.com/company/fvn-consultores-associados/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <IconLinkedIn />
          </a>
          <a href="https://www.instagram.com/fvnconsultores/" target="_blank" rel="noopener" aria-label="Instagram">
            <IconInstagram />
          </a>
          <a href="#" aria-label="Facebook">
            <IconFacebook />
          </a>
        </div>
      </div>
    </footer>
  )
}
