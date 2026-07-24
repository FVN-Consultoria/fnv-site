import { useState } from 'react'

const WHATSAPP_BASE = 'https://wa.me/5531999180500?text='

const MES_ATUAL = 'Julho de 2026'

const PRAZOS = [
  { dia: 25, label: 'Envio Módulo AM — TCE-MG', urgente: true },
  { dia: 28, label: 'Envio Módulo BLCT — TCE-MG', urgente: true },
  { dia: 31, label: 'Folha de Pagamento (FLPGO)', urgente: false },
  { dia: 31, label: 'Módulo de Licitações e Obras', urgente: false },
]

const CATEGORIAS = [
  { key: 'saude', label: 'Saúde', cor: '#16a34a', bg: '#dcfce7' },
  { key: 'educacao', label: 'Educação', cor: '#2563eb', bg: '#dbeafe' },
  { key: 'tributacao', label: 'Tributação', cor: '#d97706', bg: '#fef3c7' },
  { key: 'mineracao', label: 'Mineração', cor: '#7c3aed', bg: '#ede9fe' },
  { key: 'gestao', label: 'Gestão Pública Geral', cor: '#0b1130', bg: '#e3e5ef' },
]

const LEIS = {
  saude: [
    { nome: 'Lei nº 8.080/1990', resumo: 'Lei Orgânica da Saúde — organização e funcionamento do SUS.', link: 'https://www.planalto.gov.br/ccivil_03/leis/l8080.htm', novo: false },
    { nome: 'Lei nº 8.142/1990', resumo: 'Dispõe sobre a participação da comunidade na gestão do SUS e transferências intergovernamentais.', link: 'https://www.planalto.gov.br/ccivil_03/leis/l8142.htm', novo: false },
    { nome: 'Portaria GM/MS nº 1.068/2023', resumo: 'Piso da Enfermagem — regras de custeio para municípios.', link: 'https://bvsms.saude.gov.br/bvs/saudelegis/gm/2023/prt1068_25_07_2023.html', novo: true },
  ],
  educacao: [
    { nome: 'Lei nº 9.394/1996 (LDB)', resumo: 'Lei de Diretrizes e Bases da Educação Nacional.', link: 'https://www.planalto.gov.br/ccivil_03/leis/l9394.htm', novo: false },
    { nome: 'Lei nº 14.113/2020 (Fundeb)', resumo: 'Regulamenta o Fundeb e define regras de distribuição de recursos para educação básica.', link: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l14113.htm', novo: false },
    { nome: 'Resolução CNE/CP nº 2/2017', resumo: 'Base Nacional Comum Curricular (BNCC) — educação infantil e ensino fundamental.', link: 'http://portal.mec.gov.br/index.php?option=com_docman&view=download&alias=79601-anexo-texto-bncc-reexportado-pdf-2&category_slug=dezembro-2017-pdf&Itemid=30192', novo: false },
  ],
  tributacao: [
    { nome: 'Lei Complementar nº 101/2000 (LRF)', resumo: 'Lei de Responsabilidade Fiscal — limites e transparência nas finanças públicas.', link: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp101.htm', novo: false },
    { nome: 'Lei nº 5.172/1966 (CTN)', resumo: 'Código Tributário Nacional — normas gerais de direito tributário.', link: 'https://www.planalto.gov.br/ccivil_03/leis/l5172compilado.htm', novo: false },
    { nome: 'Lei Complementar nº 116/2003', resumo: 'Dispõe sobre o Imposto Sobre Serviços de Qualquer Natureza (ISS/ISSQN).', link: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp116.htm', novo: false },
  ],
  mineracao: [
    { nome: 'Lei nº 7.990/1989 (CFEM)', resumo: 'Institui royalties sobre exploração mineral — Compensação Financeira pela Exploração de Recursos Minerais.', link: 'https://www.planalto.gov.br/ccivil_03/leis/l7990.htm', novo: false },
    { nome: 'Decreto nº 9.406/2018', resumo: 'Regulamenta o Código de Mineração — concessões, licenciamentos e obrigações ambientais.', link: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/decreto/d9406.htm', novo: false },
    { nome: 'Resolução ANM nº 68/2021', resumo: 'Regulamenta barragens de mineração e gestão de riscos para municípios em área de influência.', link: 'https://www.gov.br/anm/pt-br/assuntos/barragens/resolucao-anm-no-68-2021', novo: true },
  ],
  gestao: [
    { nome: 'Lei nº 8.666/1993', resumo: 'Lei de Licitações e Contratos Administrativos (vigente para contratos em andamento).', link: 'https://www.planalto.gov.br/ccivil_03/leis/l8666cons.htm', novo: false },
    { nome: 'Lei nº 14.133/2021 (Nova Lei de Licitações)', resumo: 'Nova Lei de Licitações e Contratos — substitui progressivamente a Lei 8.666/93.', link: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm', novo: true },
    { nome: 'Lei Complementar nº 173/2020', resumo: 'Programa Federativo de Enfrentamento ao COVID — vedações e benefícios fiscais a estados e municípios.', link: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp173.htm', novo: false },
  ],
}

const MATERIAIS = [
  { titulo: 'Guia de Captação de Recursos Federais', desc: 'Passo a passo para acesso a emendas parlamentares e transferências voluntárias.', icone: '📋' },
  { titulo: 'Checklist de Prestação de Contas TCE-MG', desc: 'Lista completa de documentos e prazos exigidos pelo Tribunal de Contas de MG.', icone: '✅' },
  { titulo: 'Modelo de Plano de Ação para Convênios', desc: 'Template editável para elaboração de planos de trabalho e metas em convênios.', icone: '📝' },
]

function whatsappLink(contexto) {
  return WHATSAPP_BASE + encodeURIComponent(`Olá! Gostaria de falar com um especialista sobre: ${contexto}`)
}

const hoje = new Date()

function diasRestantes(dia) {
  const prazo = new Date(hoje.getFullYear(), hoje.getMonth(), dia)
  const diff = Math.ceil((prazo - hoje) / (1000 * 60 * 60 * 24))
  return diff
}

export default function CentralGestor() {
  const [tabAtiva, setTabAtiva] = useState('saude')

  const catAtiva = CATEGORIAS.find((c) => c.key === tabAtiva)
  const leisAtivas = LEIS[tabAtiva] || []

  return (
    <div style={{ background: '#fbfbfe' }}>

      {/* Banner */}
      <section style={{ background: 'linear-gradient(135deg,#0b1130 0%,#151f6d 100%)', padding: '72px 48px 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <span style={{ fontWeight: 700, fontSize: 13, letterSpacing: '.12em', color: '#8fa0f5', textTransform: 'uppercase' }}>
            Exclusivo para gestores públicos
          </span>
          <h1 style={{ margin: '12px 0 16px', fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 'clamp(32px,4vw,56px)', lineHeight: 1.05, color: '#fff' }}>
            Central do Gestor
          </h1>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: '#aab3d9', maxWidth: 600 }}>
            Legislação, prazos e orientação técnica centralizados para gestores públicos municipais e estaduais.
          </p>
        </div>
      </section>

      {/* Prazos do Mês */}
      <section style={{ background: '#fff', borderBottom: '1px solid #e3e5ef', padding: '56px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
            <span style={{ fontSize: 24 }}>📅</span>
            <div>
              <span className="section-label">Agenda</span>
              <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 26, color: '#151a33' }}>
                Prazos de {MES_ATUAL}
              </h2>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
            {PRAZOS.map((p, i) => {
              const restam = diasRestantes(p.dia)
              const vencido = restam < 0
              const critico = restam >= 0 && restam <= 5
              return (
                <div
                  key={i}
                  style={{
                    border: `1.5px solid ${vencido ? '#fca5a5' : critico ? '#fde68a' : '#e3e5ef'}`,
                    borderLeft: `4px solid ${vencido ? '#ef4444' : critico ? '#f59e0b' : '#4a63ff'}`,
                    borderRadius: 12,
                    padding: '20px 24px',
                    background: vencido ? '#fff7f7' : critico ? '#fffbeb' : '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 28, color: vencido ? '#ef4444' : '#0b1130' }}>
                      {String(p.dia).padStart(2, '0')}
                    </span>
                    {vencido ? (
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#ef4444', background: '#fee2e2', padding: '3px 8px', borderRadius: 999 }}>VENCIDO</span>
                    ) : restam === 0 ? (
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#d97706', background: '#fef3c7', padding: '3px 8px', borderRadius: 999 }}>HOJE</span>
                    ) : critico ? (
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#d97706', background: '#fef3c7', padding: '3px 8px', borderRadius: 999 }}>
                        {restam}d restantes
                      </span>
                    ) : (
                      <span style={{ fontSize: 11, fontWeight: 600, color: '#5b6178' }}>{restam}d</span>
                    )}
                  </div>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#151a33', lineHeight: 1.4 }}>{p.label}</p>
                  <a
                    href={whatsappLink(p.label)}
                    target="_blank"
                    rel="noopener"
                    style={{ marginTop: 4, fontSize: 13, fontWeight: 700, color: '#4a63ff' }}
                  >
                    Falar com especialista →
                  </a>
                </div>
              )
            })}
          </div>
          <p style={{ margin: '20px 0 0', fontSize: 13, color: '#5b6178' }}>
            Referência:{' '}
            <a href="https://www.tce.mg.gov.br/agenda_gestor/julho.html" target="_blank" rel="noopener" style={{ color: '#4a63ff' }}>
              Agenda do Gestor — TCE-MG
            </a>
          </p>
        </div>
      </section>

      {/* Legislação por Área */}
      <section style={{ padding: '72px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <span className="section-label">Consulta rápida</span>
            <h2 style={{ margin: '8px 0 0', fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 'clamp(24px,3vw,32px)', color: '#151a33' }}>
              Legislação por Área
            </h2>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
            {CATEGORIAS.map((c) => (
              <button
                key={c.key}
                onClick={() => setTabAtiva(c.key)}
                style={{
                  padding: '10px 20px',
                  borderRadius: 999,
                  border: tabAtiva === c.key ? 'none' : '1.5px solid #e3e5ef',
                  background: tabAtiva === c.key ? c.cor : '#fff',
                  color: tabAtiva === c.key ? '#fff' : '#5b6178',
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: 'pointer',
                  transition: 'all .15s',
                }}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Cards de leis */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24 }}>
            {leisAtivas.map((lei, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: '1px solid #e3e5ef',
                  borderTop: `3px solid ${catAtiva.cor}`,
                  borderRadius: 14,
                  padding: '24px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  position: 'relative',
                }}
              >
                {lei.novo && (
                  <span style={{ position: 'absolute', top: 16, right: 16, fontSize: 10, fontWeight: 700, color: '#fff', background: catAtiva.cor, padding: '2px 8px', borderRadius: 999 }}>
                    NOVO
                  </span>
                )}
                <span style={{ fontSize: 12, fontWeight: 700, color: catAtiva.cor, background: catAtiva.bg, padding: '3px 10px', borderRadius: 999, alignSelf: 'flex-start' }}>
                  {catAtiva.label}
                </span>
                <h3 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontWeight: 700, fontSize: 17, color: '#151a33' }}>{lei.nome}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: '#5b6178' }}>{lei.resumo}</p>
                <div style={{ display: 'flex', gap: 12, marginTop: 4, flexWrap: 'wrap' }}>
                  <a
                    href={lei.link}
                    target="_blank"
                    rel="noopener"
                    style={{ flex: 1, minWidth: 100, textAlign: 'center', padding: '9px 16px', border: `1.5px solid ${catAtiva.cor}`, borderRadius: 8, color: catAtiva.cor, fontWeight: 700, fontSize: 13 }}
                  >
                    Ler lei
                  </a>
                  <a
                    href={whatsappLink(lei.nome)}
                    target="_blank"
                    rel="noopener"
                    style={{ flex: 1, minWidth: 100, textAlign: 'center', padding: '9px 16px', background: catAtiva.cor, border: 'none', borderRadius: 8, color: '#fff', fontWeight: 700, fontSize: 13 }}
                  >
                    Falar com especialista
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materiais e Orientações */}
      <section style={{ background: '#f5f6fa', padding: '72px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <span className="section-label">Downloads</span>
            <h2 style={{ margin: '8px 0 0', fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 'clamp(24px,3vw,32px)', color: '#151a33' }}>
              Materiais e Orientações
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {MATERIAIS.map((m, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #e3e5ef', borderRadius: 14, padding: '28px 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ fontSize: 32 }}>{m.icone}</span>
                <h3 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontWeight: 700, fontSize: 17, color: '#151a33' }}>{m.titulo}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: '#5b6178' }}>{m.desc}</p>
                <a
                  href={whatsappLink(`solicitação do material: ${m.titulo}`)}
                  target="_blank"
                  rel="noopener"
                  style={{ marginTop: 'auto', padding: '10px 0', textAlign: 'center', background: '#4a63ff', color: '#fff', fontWeight: 700, fontSize: 14, borderRadius: 8 }}
                >
                  Solicitar material
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ background: 'linear-gradient(135deg,#0b1130 0%,#151f6d 100%)', padding: '72px 48px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 'clamp(24px,3vw,36px)', color: '#fff' }}>
            Precisa de apoio técnico para sua prefeitura?
          </h2>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: '#aab3d9', maxWidth: 560 }}>
            A FVN oferece assessoria completa em gestão pública, captação de recursos e conformidade legal. Fale com nossos especialistas.
          </p>
          <a
            href={whatsappLink('apoio técnico para gestão municipal')}
            target="_blank"
            rel="noopener"
            className="btn-primary"
            style={{ fontSize: 16, padding: '16px 36px' }}
          >
            Falar com a FVN →
          </a>
        </div>
      </section>
    </div>
  )
}
