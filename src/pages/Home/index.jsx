import { useState } from 'react'
import heroBg from '../../assets/hero-bg.png'
import iconService from '../../assets/icon-service.svg'
import projectBudget from '../../assets/call_5tAkgdlKa9mGVwAqpHvZEGNj.png'
import projectMap from '../../assets/call_dH0qEnjcSNtW2tq18pCF6MkR.png'
import projectMining from '../../assets/call_k1fXbNxgdQTQgxJmzZRZmSfP.png'
import projectCosts from '../../assets/call_xgvBVtn3BZLhEBGQdeHUaneT.png'
import logoGovernoEstadual from '../../assets/governo-estadual.png'
import logoMineracao from '../../assets/setor-mineracao.png'
import logoPrefeitura1 from '../../assets/prefeitura-municipal-01.png'
import logoPrefeitura2 from '../../assets/prefeitura-municipal-02.png'
import sobreImage from '../../assets/sobre.png'

const WHATSAPP_URL =
  'https://wa.me/5531999180500?text=Ol%C3%A1!%20Gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20trabalho%20realizado%20pela%20FVN.'

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
    items: ['Planejamento Estratégico', 'Gestão de Políticas Públicas', 'Pesquisas e Análises', 'Captação de Recursos', 'Análise de Viabilidade'],
  },
  {
    title: 'Inteligência de Dados',
    items: ['Power BI', 'Dashboards Interativos', 'Gráficos Informativos', 'Relatórios em PDF', 'Planilhas Excel'],
  },
  {
    title: 'Consultoria Empresarial',
    items: ['Consultoria e Assessoria', 'Redução de Custos', 'Planejamento Financeiro', 'Viabilidade Econômica', 'Marketing e Redes Sociais'],
  },
  {
    title: 'Capacitação',
    items: ['Cursos', 'Palestras', 'Congressos', 'Eventos', 'Treinamentos'],
  },
]

const PROJECTS = [
  { tag: 'Órgão Público', org: 'Prefeitura Municipal', title: 'Dashboard Financeiro', text: 'Painel com indicadores orçamentários e financeiros para acompanhamento em tempo real.', image: projectBudget, logo: logoPrefeitura1 },
  { tag: 'Órgão Público', org: 'Prefeitura Municipal', title: 'Planejamento Municipal', text: 'Plano diretor e estratégia de captação de recursos.', image: projectMap, logo: logoPrefeitura2 },
  { tag: 'Órgão Público', org: 'Governo Estadual', title: 'Gestão de Custos', text: 'Análise e controle de custos com foco em eficiência e resultados.', image: projectMining, logo: logoGovernoEstadual },
  { tag: 'Empresa Privada', org: 'Setor de Mineração', title: 'Power BI Corporativo', text: 'Implantação de dashboards em tempo real para tomada de decisão.', image: projectCosts, logo: logoMineracao },
]

const STEPS = [
  { n: '01', title: 'Diagnóstico', text: 'Analisamos a realidade e identificamos as oportunidades.' },
  { n: '02', title: 'Planejamento', text: 'Desenvolvemos o plano estratégico e as soluções ideais.' },
  { n: '03', title: 'Desenvolvimento', text: 'Criamos dashboards, relatórios e soluções personalizadas.' },
  { n: '04', title: 'Implantação', text: 'Implementamos as soluções com foco em resultados.' },
  { n: '05', title: 'Acompanhamento', text: 'Monitoramos e aprimoramos sempre os resultados.' },
]

const FAQS = [
  { q: 'Como o Power BI é utilizado em suas entregas de consultoria?', a: 'Utilizamos o Power BI para entregar gráficos dinâmicos e interativos, permitindo que você ajuste e personalize os dados conforme a necessidade — facilitando a compreensão e a tomada de decisão.' },
  { q: 'De que maneira os relatórios em PDF complementam as análises do Power BI?', a: 'Nossos relatórios em PDF trazem os gráficos do Power BI acompanhados de um parecer técnico, para uma análise mais aprofundada e acessível.' },
  { q: 'Qual a vantagem de usar planilhas Excel na entrega dos projetos?', a: 'As planilhas organizam os dados de forma estruturada, facilitando manipulações e análises adicionais por parte do cliente.' },
  { q: 'Como os eventos e capacitações beneficiam os clientes?', a: 'Palestras, seminários, congressos e cursos aprimoram o conhecimento sobre temas públicos e empresariais, desenvolvendo habilidades para melhores decisões.' },
  { q: 'Como a FVN auxilia na captação de recursos financeiros?', a: 'Estabelecemos métricas e indicadores essenciais para identificar as melhores oportunidades de financiamento junto a instituições nacionais e internacionais.' },
]

function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', overflow: 'hidden', background: '#0b1130', minHeight: 600 }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundColor: '#0b1130', backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'right center' }}>
        <img src={heroBg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'right center', display: 'block' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(90deg,rgba(11,17,48,.85) 0%,rgba(11,17,48,.6) 40%,rgba(11,17,48,.15) 70%,rgba(11,17,48,0) 90%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: 64, maxWidth: 1280, margin: '0 auto', padding: '80px 48px', flexWrap: 'wrap', minHeight: 600 }}>
        <div style={{ flex: '0 1 620px', maxWidth: 620, marginRight: 'auto', display: 'flex', flexDirection: 'column', gap: 22, minWidth: 320 }}>
          <span style={{ fontWeight: 700, fontSize: 13, letterSpacing: '.12em', color: '#8fa0f5', textTransform: 'uppercase' }}>Gestão Inteligente</span>
          <h1 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 'clamp(34px,4.2vw,62px)', lineHeight: 1.05, color: '#fff', letterSpacing: '-.01em' }}>
            Transformamos dados em decisões que geram <span style={{ color: '#8fa0f5' }}>resultados.</span>
          </h1>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: '#aab3d9', maxWidth: 520 }}>
            Soluções completas em gestão pública e empresarial com inteligência de dados, planejamento estratégico, Power BI e captação de recursos.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 12 }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary">SOLICITAR PROPOSTA →</a>
            <a href="#projetos" className="btn-outline">▷ VER NOSSOS PROJETOS</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsBar() {
  return (
    <section style={{ background: '#0a0f2e', borderTop: '1px solid rgba(74,99,255,.15)', padding: 0 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap' }}>
        {STATS.map((s, i) => (
          <div key={i} style={{ flex: '1 1 180px', padding: '28px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, borderLeft: '1px solid rgba(74,99,255,.15)' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', border: '1.5px solid #4a63ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: 16, color: '#4a63ff' }}>{s.icon}</span>
            </div>
            <div>
              <span style={{ display: 'block', fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 22, color: '#fff' }}>{s.value}</span>
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
        <div style={{ flex: '1 1 380px', minWidth: 300, height: 380, borderRadius: 24, overflow: 'hidden' }}>
          <img src={sobreImage} alt="Equipe da FVN Consultores em reunião" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
        </div>
        <div style={{ flex: '1 1 440px', minWidth: 320, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span className="section-label">Sobre a FVN</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px,3.6vw,40px)' }}>Excelência em consultoria e planejamento estratégico</h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: '#5b6178' }}>
            Somos uma consultoria especializada em serviços econômicos, orçamentários e financeiros, atendendo instituições públicas e empresas com excelência. Nossa abordagem estratégica entrega soluções para expansão sustentável e resultados confiáveis.
          </p>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 32 }}>
        {ABOUT_CARDS.map((c, i) => (
          <div key={i} style={{ background: '#fff', border: '1px solid #e3e5ef', borderRadius: 16, padding: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: '#e8eaf5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
        <h2 style={{ margin: '0 0 56px', textAlign: 'center', fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,3.2vw,36px)', letterSpacing: '.02em' }}>O QUE FAZEMOS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 28 }}>
          {SERVICES.map((s, i) => (
            <div key={i} style={{ border: '1px solid #e3e5ef', borderRadius: 16, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: '#e8eaf5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={iconService} alt="" style={{ width: 24, height: 24 }} />
              </div>
              <h3 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontWeight: 700, fontSize: 19 }}>{s.title}</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.items.map((it, j) => (
                  <li key={j} style={{ fontSize: 14, color: '#5b6178', paddingLeft: 14, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: 8, width: 5, height: 5, background: '#4a63ff', borderRadius: '50%' }} />
                    {it}
                  </li>
                ))}
              </ul>
              <a href="#contato" style={{ marginTop: 'auto', fontWeight: 700, fontSize: 14, color: '#4a63ff' }}>Saiba mais →</a>
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
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24, marginBottom: 40, flexWrap: 'wrap' }}>
          <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 'clamp(24px,3vw,32px)', color: '#fff', letterSpacing: '.04em' }}>PROJETOS REALIZADOS</h2>
          <a href="#projetos" style={{ fontWeight: 600, fontSize: 14, color: '#8fa0f5' }}>Ver todos os projetos →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
          {PROJECTS.map((p, i) => (
            <div key={i} style={{ background: '#1f2b85', border: '1px solid #2a3480', borderRadius: 16, padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <img src={p.logo} alt={`Logo ${p.org}`} style={{ width: 40, height: 40, padding: 2, objectFit: 'contain', background: '#fff', borderRadius: '50%', flexShrink: 0, display: 'block' }} />
                <div>
                  <span style={{ fontWeight: 700, fontSize: 10, letterSpacing: '.06em', color: '#8fa0f5', textTransform: 'uppercase', display: 'block' }}>{p.tag}</span>
                  <span style={{ fontWeight: 600, fontSize: 13, color: '#fff' }}>{p.org}</span>
                </div>
              </div>
              <img src={p.image} alt={p.title} style={{ width: '100%', height: 150, objectFit: 'cover', objectPosition: 'center', borderRadius: 10, display: 'block' }} />
              <div>
                <h3 style={{ margin: '0 0 6px', fontFamily: "'Archivo',sans-serif", fontWeight: 700, fontSize: 17, color: '#fff' }}>{p.title}</h3>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: '#aab3d9' }}>{p.text}</p>
              </div>
              <a href="#contato" style={{ fontWeight: 700, fontSize: 13, color: '#8fa0f5' }}>Ver projeto →</a>
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
        <h2 style={{ margin: '0 0 56px', textAlign: 'center', fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 'clamp(26px,3.2vw,36px)', letterSpacing: '.02em' }}>COMO FUNCIONA</h2>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ position: 'absolute', top: 22, left: 60, right: 60, borderTop: '2px dashed #e3e5ef', zIndex: 0 }} />
          {STEPS.map((s) => (
            <div key={s.n} style={{ position: 'relative', zIndex: 1, flex: '1 1 160px', minWidth: 150, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#4a63ff', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Archivo',sans-serif", fontWeight: 700, fontSize: 15 }}>{s.n}</div>
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
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 600 }}>
          <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 'clamp(24px,3vw,32px)', color: '#fff' }}>VAMOS TRANSFORMAR SUA GESTÃO EM RESULTADOS?</h2>
          <p style={{ margin: 0, fontSize: 15, color: '#aab3d9' }}>Fale com nossos especialistas e descubra como podemos ajudar sua instituição a alcançar o próximo nível.</p>
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
        <h2 className="section-title" style={{ fontSize: 'clamp(28px,3.6vw,40px)' }}>Perguntas frequentes</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {FAQS.map((f, i) => (
          <div key={i} className={`faq-item${openIdx === i ? ' open' : ''}`} onClick={() => setOpenIdx(openIdx === i ? null : i)}>
            <div className="faq-q">
              <span>{f.q}</span>
              <div style={{ position: 'relative', width: 18, height: 18, flexShrink: 0 }}>
                <div style={{ position: 'absolute', top: 8, left: 1, width: 16, height: 2, background: '#151a33', borderRadius: 1 }} />
                <div className="vbar" style={{ position: 'absolute', top: 1, left: 8, width: 2, height: 16, background: '#151a33', borderRadius: 1, transition: 'transform .2s ease' }} />
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
            <h2 className="section-title" style={{ fontSize: 'clamp(28px,3.6vw,40px)' }}>Vamos conversar sobre o seu projeto</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <span style={{ display: 'block', fontWeight: 700, fontSize: 13, marginBottom: 4 }}>Endereço</span>
              <span style={{ fontSize: 15, color: '#5b6178', lineHeight: 1.5 }}>R. Alferes Antônio José de Freitas, nº 29 — Parque Afonso de Matos, Ibirité - MG, CEP 32400-280</span>
            </div>
            <div>
              <span style={{ display: 'block', fontWeight: 700, fontSize: 13, marginBottom: 4 }}>E-mail</span>
              <a href="mailto:contato@fvnconsultores.com.br" style={{ fontSize: 15, color: '#4a63ff' }}>contato@fvnconsultores.com.br</a>
            </div>
            <div>
              <span style={{ display: 'block', fontWeight: 700, fontSize: 13, marginBottom: 4 }}>Telefone</span>
              <a href="https://wa.me/5531999180500" target="_blank" rel="noopener" style={{ fontSize: 15, color: '#4a63ff' }}>+55 (31) 99918-0500</a>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} style={{ flex: '1 1 380px', minWidth: 300, background: '#fff', border: '1px solid #e3e5ef', borderRadius: 20, padding: 40, display: 'flex', flexDirection: 'column', gap: 18 }}>
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
          <button type="submit" style={{ marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#4a63ff', color: '#fff', fontWeight: 700, fontSize: 16, padding: '15px 24px', borderRadius: 999, border: 'none', cursor: 'pointer' }}>
            Enviar no WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Projects />
      <HowItWorks />
      <CTA />
      <FAQ />
      <Contact />
    </>
  )
}
