import { useState } from 'react'
import logo from './assets/logo-fvn.svg'
import heroBg from './assets/hero-bg.png'
import iconService from './assets/icon-service.svg'
const logoFooter = logo
import projectBudget from './assets/call_5tAkgdlKa9mGVwAqpHvZEGNj.png'
import projectMap from './assets/call_dH0qEnjcSNtW2tq18pCF6MkR.png'
import projectMining from './assets/call_k1fXbNxgdQTQgxJmzZRZmSfP.png'
import projectCosts from './assets/call_xgvBVtn3BZLhEBGQdeHUaneT.png'
import logoGovernoEstadual from './assets/governo-estadual.png'
import logoMineracao from './assets/setor-mineracao.png'
import logoPrefeitura1 from './assets/prefeitura-municipal-01.png'
import logoPrefeitura2 from './assets/prefeitura-municipal-02.png'
import sobreImage from './assets/sobre.png'

const WHATSAPP_URL =
  'https://wa.me/5531999180500?text=Ol%C3%A1!%20Gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20trabalho%20realizado%20pela%20FVN.'

const NAV_ITEMS = [
  { href: '#hero', label: 'Início', active: true },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#blog', label: 'Blog' },
  { href: '#contato', label: 'Contato' },
]

const STATS = [
  { icon: '💼', value: '+100', label: 'Projetos realizados' },
  { icon: '👤', value: '+30', label: 'Clientes atendidos' },
  { icon: '$', value: '+R$ 30 milhões', label: 'Em recursos captados' },
  { icon: '⏱', value: '+500', label: 'Horas de capacitação' },
  { icon: '☺', value: '+95%', label: 'Satisfação dos clientes' },
]

const ABOUT_CARDS = [
  {
    title: 'Análises para Redução de Custos e Expansão',
    text: 'Estudos de viabilidade técnica e econômica para redução de custos e expansão de negócios, com decisões bem fundamentadas.',
  },
  {
    title: 'Eventos Educacionais e Planejamento Público',
    text: 'Palestras, cursos de capacitação, planos diretores e políticas públicas.',
  },
  {
    title: 'Captação Eficaz de Recursos Financeiros',
    text: 'Métricas e indicadores que viabilizam a captação de recursos em instituições nacionais e internacionais.',
  },
]

const SERVICES = [
  {
    title: 'Gestão Pública',
    items: [
      'Planejamento Estratégico',
      'Gestão de Políticas Públicas',
      'Pesquisas e Análises',
      'Captação de Recursos',
      'Análise de Viabilidade',
    ],
  },
  {
    title: 'Inteligência de Dados',
    items: [
      'Power BI',
      'Dashboards Interativos',
      'Gráficos Informativos',
      'Relatórios em PDF',
      'Planilhas Excel',
    ],
  },
  {
    title: 'Consultoria Empresarial',
    items: [
      'Consultoria e Assessoria',
      'Redução de Custos',
      'Planejamento Financeiro',
      'Viabilidade Econômica',
      'Marketing e Redes Sociais',
    ],
  },
  {
    title: 'Capacitação',
    items: ['Cursos', 'Palestras', 'Congressos', 'Eventos', 'Treinamentos'],
  },
]

const PROJECTS = [
  {
    tag: 'Órgão Público',
    org: 'Prefeitura Municipal',
    title: 'Dashboard Financeiro',
    text: 'Painel com indicadores orçamentários e financeiros para acompanhamento em tempo real.',
    image: projectBudget,
    logo: logoPrefeitura1,
  },
  {
    tag: 'Órgão Público',
    org: 'Prefeitura Municipal',
    title: 'Planejamento Municipal',
    text: 'Plano diretor e estratégia de captação de recursos.',
    image: projectMap,
    logo: logoPrefeitura2,
  },
  {
    tag: 'Órgão Público',
    org: 'Governo Estadual',
    title: 'Gestão de Custos',
    text: 'Análise e controle de custos com foco em eficiência e resultados.',
    image: projectMining,
    logo: logoGovernoEstadual,
  },
  {
    tag: 'Empresa Privada',
    org: 'Setor de Mineração',
    title: 'Power BI Corporativo',
    text: 'Implantação de dashboards em tempo real para tomada de decisão.',
    image: projectCosts,
    logo: logoMineracao,
  },
]

const STEPS = [
  { n: '01', title: 'Diagnóstico', text: 'Analisamos a realidade e identificamos as oportunidades.' },
  { n: '02', title: 'Planejamento', text: 'Desenvolvemos o plano estratégico e as soluções ideais.' },
  { n: '03', title: 'Desenvolvimento', text: 'Criamos dashboards, relatórios e soluções personalizadas.' },
  { n: '04', title: 'Implantação', text: 'Implementamos as soluções com foco em resultados.' },
  { n: '05', title: 'Acompanhamento', text: 'Monitoramos e aprimoramos sempre os resultados.' },
]

const FAQS = [
  {
    q: 'Como o Power BI é utilizado em suas entregas de consultoria?',
    a: 'Utilizamos o Power BI para entregar gráficos dinâmicos e interativos, permitindo que você ajuste e personalize os dados conforme a necessidade — facilitando a compreensão e a tomada de decisão.',
  },
  {
    q: 'De que maneira os relatórios em PDF complementam as análises do Power BI?',
    a: 'Nossos relatórios em PDF trazem os gráficos do Power BI acompanhados de um parecer técnico, para uma análise mais aprofundada e acessível.',
  },
  {
    q: 'Qual a vantagem de usar planilhas Excel na entrega dos projetos?',
    a: 'As planilhas organizam os dados de forma estruturada, facilitando manipulações e análises adicionais por parte do cliente.',
  },
  {
    q: 'Como os eventos e capacitações beneficiam os clientes?',
    a: 'Palestras, seminários, congressos e cursos aprimoram o conhecimento sobre temas públicos e empresariais, desenvolvendo habilidades para melhores decisões.',
  },
  {
    q: 'Como a FVN auxilia na captação de recursos financeiros?',
    a: 'Estabelecemos métricas e indicadores essenciais para identificar as melhores oportunidades de financiamento junto a instituições nacionais e internacionais.',
  },
]

function Header() {
  return (
    <header
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        padding: '20px 48px',
        background: 'transparent',
      }}
    >
      <a href="#hero" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="FVN Consultores" style={{ height: 72, width: 'auto', display: 'block' }} />
      </a>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
        {NAV_ITEMS.map((n) => (
          <a
            key={n.href}
            href={n.href}
            style={{
              color: n.active ? '#fff' : '#e3e5ef',
              fontWeight: 600,
              fontSize: 14,
              borderBottom: n.active ? '2px solid #4a63ff' : 'none',
              paddingBottom: n.active ? 4 : 0,
            }}
          >
            {n.label}
          </a>
        ))}
      </nav>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary" style={{ borderRadius: 6 }}>
        ACESSAR PORTAL
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', overflow: 'hidden', background: '#0b1130', minHeight: 720 }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundColor: '#0b1130',
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
        }}
      >
        <img
          src={heroBg}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'right center',
            display: 'block',
          }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(90deg,rgba(11,17,48,.85) 0%,rgba(11,17,48,.6) 40%,rgba(11,17,48,.15) 70%,rgba(11,17,48,0) 90%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 64,
          maxWidth: 1280,
          margin: '0 auto',
          padding: '120px 48px 80px',
          flexWrap: 'wrap',
          minHeight: 720,
        }}
      >
        <div style={{ flex: '0 1 620px', maxWidth: 620, marginRight: 'auto', display: 'flex', flexDirection: 'column', gap: 22, minWidth: 320 }}>
          <span style={{ fontWeight: 700, fontSize: 13, letterSpacing: '.12em', color: '#8fa0f5', textTransform: 'uppercase' }}>
            Gestão Inteligente
          </span>
          <h1
            style={{
              margin: 0,
              fontFamily: "'Archivo',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(34px,4.2vw,62px)',
              lineHeight: 1.05,
              color: '#fff',
              letterSpacing: '-.01em',
            }}
          >
            Transformamos dados em decisões que geram <span style={{ color: '#8fa0f5' }}>resultados.</span>
          </h1>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: '#aab3d9', maxWidth: 520 }}>
            Soluções completas em gestão pública e empresarial com inteligência de dados, planejamento estratégico, Power BI e captação de
            recursos.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 12 }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary">
              SOLICITAR PROPOSTA →
            </a>
            <a href="#projetos" className="btn-outline">
              ▷ VER NOSSOS PROJETOS
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  return (
    <section style={{ background: '#0a0f2e', borderTop: '1px solid rgba(74,99,255,.15)', padding: 0 }}>
      <div id="stats-bar" style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap' }}>
        {STATS.map((s, i) => (
          <div
            key={i}
            style={{
              flex: '1 1 180px',
              padding: '28px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 14,
              borderLeft: '1px solid rgba(74,99,255,.15)',
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1.5px solid #4a63ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: 16, color: '#4a63ff' }}>{s.icon}</span>
            </div>
            <div>
              <span style={{ display: 'block', fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 22, color: '#fff' }}>
                {s.value}
              </span>
              <span style={{ display: 'block', fontSize: 12, color: '#aab3d9', marginTop: 2 }}>{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="sobre" style={{ scrollMarginTop: 96, background: '#f5f6fa', padding: '100px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 64, flexWrap: 'wrap', marginBottom: 64 }}>
        <div
          style={{
            flex: '1 1 380px',
            minWidth: 300,
            height: 380,
            borderRadius: 24,
            overflow: 'hidden',
          }}
        >
          <img
            src={sobreImage}
            alt="Equipe da FVN Consultores em reunião"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
        </div>
        <div style={{ flex: '1 1 440px', minWidth: 320, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span className="section-label">Sobre a FVN</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px,3.6vw,40px)' }}>
            Excelência em consultoria e planejamento estratégico
          </h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: '#5b6178' }}>
            Somos uma consultoria especializada em serviços econômicos, orçamentários e financeiros, atendendo instituições públicas e
            empresas com excelência. Nossa abordagem estratégica entrega soluções para expansão sustentável e resultados confiáveis.
          </p>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: 32,
        }}
      >
        {ABOUT_CARDS.map((c, i) => (
          <div
            key={i}
            style={{
              background: '#fff',
              border: '1px solid #e3e5ef',
              borderRadius: 16,
              padding: 32,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: '#e8eaf5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src={iconService} alt="" style={{ width: 22, height: 22 }} />
            </div>
            <h3 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontWeight: 700, fontSize: 19 }}>{c.title}</h3>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#5b6178' }}>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="servicos" style={{ scrollMarginTop: 96, background: '#fff', padding: '100px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <h2
          style={{
            margin: '0 0 56px',
            textAlign: 'center',
            fontFamily: "'Archivo',sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(26px,3.2vw,36px)',
            letterSpacing: '.02em',
          }}
        >
          O QUE FAZEMOS
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 28 }}>
          {SERVICES.map((s, i) => (
            <div
              key={i}
              style={{
                border: '1px solid #e3e5ef',
                borderRadius: 16,
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: '#e8eaf5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src={iconService} alt="" style={{ width: 24, height: 24 }} />
              </div>
              <h3 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontWeight: 700, fontSize: 19 }}>{s.title}</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.items.map((it, j) => (
                  <li key={j} style={{ fontSize: 14, color: '#5b6178', paddingLeft: 14, position: 'relative' }}>
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 8,
                        width: 5,
                        height: 5,
                        background: '#4a63ff',
                        borderRadius: '50%',
                      }}
                    />
                    {it}
                  </li>
                ))}
              </ul>
              <a href="#contato" style={{ marginTop: 'auto', fontWeight: 700, fontSize: 14, color: '#4a63ff' }}>
                Saiba mais →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projetos" style={{ scrollMarginTop: 96, background: '#0b1130', padding: '100px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: 24,
            marginBottom: 40,
            flexWrap: 'wrap',
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: "'Archivo',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(24px,3vw,32px)',
              color: '#fff',
              letterSpacing: '.04em',
            }}
          >
            PROJETOS REALIZADOS
          </h2>
          <a href="#projetos" style={{ fontWeight: 600, fontSize: 14, color: '#8fa0f5' }}>
            Ver todos os projetos →
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              style={{
                background: '#1f2b85',
                border: '1px solid #2a3480',
                borderRadius: 16,
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <img
                  src={p.logo}
                  alt={`Logo ${p.org}`}
                  style={{
                    width: 40,
                    height: 40,
                    padding: 2,
                    objectFit: 'contain',
                    background: '#fff',
                    borderRadius: '50%',
                    flexShrink: 0,
                    display: 'block',
                  }}
                />
                <div>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 10,
                      letterSpacing: '.06em',
                      color: '#8fa0f5',
                      textTransform: 'uppercase',
                      display: 'block',
                    }}
                  >
                    {p.tag}
                  </span>
                  <span style={{ fontWeight: 600, fontSize: 13, color: '#fff' }}>{p.org}</span>
                </div>
              </div>
              <img
                src={p.image}
                alt={p.title}
                style={{ width: '100%', height: 150, objectFit: 'cover', objectPosition: 'center', borderRadius: 10, display: 'block' }}
              />
              <div>
                <h3 style={{ margin: '0 0 6px', fontFamily: "'Archivo',sans-serif", fontWeight: 700, fontSize: 17, color: '#fff' }}>
                  {p.title}
                </h3>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: '#aab3d9' }}>{p.text}</p>
              </div>
              <a href="#contato" style={{ fontWeight: 700, fontSize: 13, color: '#8fa0f5' }}>
                Ver projeto →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="como-funciona" style={{ scrollMarginTop: 96, background: '#fff', padding: '100px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <h2
          style={{
            margin: '0 0 56px',
            textAlign: 'center',
            fontFamily: "'Archivo',sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(26px,3.2vw,36px)',
            letterSpacing: '.02em',
          }}
        >
          COMO FUNCIONA
        </h2>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div
            style={{
              position: 'absolute',
              top: 22,
              left: 60,
              right: 60,
              borderTop: '2px dashed #e3e5ef',
              zIndex: 0,
            }}
          />
          {STEPS.map((s) => (
            <div
              key={s.n}
              style={{
                position: 'relative',
                zIndex: 1,
                flex: '1 1 160px',
                minWidth: 150,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: '#4a63ff',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Archivo',sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                {s.n}
              </div>
              <h3 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontWeight: 700, fontSize: 16 }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: '#5b6178' }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section style={{ background: 'linear-gradient(135deg,#151f6d 0%,#0b1130 100%)', padding: '72px 48px' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 600 }}>
          <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 'clamp(24px,3vw,32px)', color: '#fff' }}>
            VAMOS TRANSFORMAR SUA GESTÃO EM RESULTADOS?
          </h2>
          <p style={{ margin: 0, fontSize: 15, color: '#aab3d9' }}>
            Fale com nossos especialistas e descubra como podemos ajudar sua instituição a alcançar o próximo nível.
          </p>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)
  return (
    <section id="faq" style={{ scrollMarginTop: 96, padding: '100px 48px', maxWidth: 840, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 48, display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
        <span className="section-label">F.A.Q</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(28px,3.6vw,40px)' }}>
          Perguntas frequentes
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {FAQS.map((f, i) => (
          <div key={i} className={`faq-item${openIdx === i ? ' open' : ''}`} onClick={() => setOpenIdx(openIdx === i ? null : i)}>
            <div className="faq-q">
              <span>{f.q}</span>
              <div style={{ position: 'relative', width: 18, height: 18, flexShrink: 0 }}>
                <div style={{ position: 'absolute', top: 8, left: 1, width: 16, height: 2, background: '#151a33', borderRadius: 1 }} />
                <div
                  className="vbar"
                  style={{
                    position: 'absolute',
                    top: 1,
                    left: 8,
                    width: 2,
                    height: 16,
                    background: '#151a33',
                    borderRadius: 1,
                    transition: 'transform .2s ease',
                  }}
                />
              </div>
            </div>
            <p className="faq-a">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const n = name || '(não informado)'
    let t = `Olá! Meu nome é ${n}.`
    if (msg) t += ' ' + msg
    if (phone) t += ' Telefone para retorno: ' + phone + '.'
    window.open('https://wa.me/5531999180500?text=' + encodeURIComponent(t), '_blank')
  }

  return (
    <section id="contato" style={{ scrollMarginTop: 96, background: '#f5f6fa', padding: '100px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 64, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 380px', minWidth: 300, display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span className="section-label">Contato</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px,3.6vw,40px)' }}>
              Vamos conversar sobre o seu projeto
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <span style={{ display: 'block', fontWeight: 700, fontSize: 13, marginBottom: 4 }}>Endereço</span>
              <span style={{ fontSize: 15, color: '#5b6178', lineHeight: 1.5 }}>
                R. Alferes Antônio José de Freitas, nº 29 — Parque Afonso de Matos, Ibirité - MG, CEP 32400-280
              </span>
            </div>
            <div>
              <span style={{ display: 'block', fontWeight: 700, fontSize: 13, marginBottom: 4 }}>E-mail</span>
              <a href="mailto:contato@fvnconsultores.com.br" style={{ fontSize: 15, color: '#4a63ff' }}>
                contato@fvnconsultores.com.br
              </a>
            </div>
            <div>
              <span style={{ display: 'block', fontWeight: 700, fontSize: 13, marginBottom: 4 }}>Telefone</span>
              <a href="https://wa.me/5531999180500" target="_blank" rel="noopener" style={{ fontSize: 15, color: '#4a63ff' }}>
                +55 (31) 99918-0500
              </a>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          style={{
            flex: '1 1 380px',
            minWidth: 300,
            background: '#fff',
            border: '1px solid #e3e5ef',
            borderRadius: 20,
            padding: 40,
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
          }}
        >
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, fontWeight: 600 }}>
            Nome
            <input type="text" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, fontWeight: 600 }}>
            Telefone
            <input type="text" placeholder="(31) 90000-0000" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, fontWeight: 600 }}>
            Mensagem
            <textarea placeholder="Como podemos ajudar?" rows="4" style={{ resize: 'vertical' }} value={msg} onChange={(e) => setMsg(e.target.value)} />
          </label>
          <button
            type="submit"
            style={{
              marginTop: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              background: '#4a63ff',
              color: '#fff',
              fontWeight: 700,
              fontSize: 16,
              padding: '15px 24px',
              borderRadius: 999,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Enviar no WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

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

function Footer() {
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
          <img src={logoFooter} alt="FVN Consultores" style={{ height: 76, width: 'auto', display: 'block', marginLeft: -8 }} />
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
            <a href="#sobre" style={{ fontSize: 14, color: '#aab3d9' }}>Sobre nós</a>
            <a href="#projetos" style={{ fontSize: 14, color: '#aab3d9' }}>Projetos</a>
            <a href="#servicos" style={{ fontSize: 14, color: '#aab3d9' }}>Serviços</a>
            <a href="#blog" style={{ fontSize: 14, color: '#aab3d9' }}>Blog</a>
            <a href="#contato" style={{ fontSize: 14, color: '#aab3d9' }}>Contato</a>
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

function WhatsAppFAB() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        background: '#25D366',
        borderRadius: '50%',
        boxShadow: '0 6px 20px rgba(37,211,102,.4)',
      }}
    >
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#fff">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.01a9.86 9.86 0 01-5.03-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.867 9.867 0 012.16 12.05C2.16 6.594 6.594 2.16 12.05 2.16c2.652 0 5.145 1.034 7.021 2.91a9.86 9.86 0 012.91 7.02c-.004 5.457-4.437 9.89-9.893 9.89h-.004zm0 0M12.044.205C5.504.205.16 5.55.16 12.05c0 2.084.544 4.12 1.58 5.918L.02 24.195l6.38-1.674A11.86 11.86 0 0012.044 24.2c6.54 0 11.893-5.345 11.893-11.893C23.94 5.767 18.585.205 12.044.205z" />
      </svg>
    </a>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Projects />
      <HowItWorks />
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
