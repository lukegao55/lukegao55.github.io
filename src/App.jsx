import { useEffect, useMemo, useState } from 'react'
import {
  siAlibabacloud,
  siAnthropic,
  siBytedance,
  siClaude,
  siDeepseek,
  siGooglecloud,
  siGooglegemini,
  siHuawei,
  siMoonshotai,
  siQwen,
  siSupabase,
  siVercel,
} from 'simple-icons'
import './App.css'

const email = 'luke@ly-origin.com'
const languageStorageKey = 'ly-origin-language'

const translations = {
  zh: {
    htmlLang: 'zh-CN',
    title: '领弈禾元',
    description:
      '领弈禾元用 AI 创造产品，并把 AI 方法带入更多行业场景，帮助业务完成 AI 化升级。',
    brand: '领弈禾元',
    brandEn: 'LY ORIGIN',
    company: '领弈禾元',
    navAria: '主导航',
    nav: [
      ['partners', '生态'],
      ['products', '产品'],
      ['services', '服务'],
      ['team', '团队'],
      ['about', '联系'],
    ],
    langLabel: 'Switch language',
    langToggle: 'EN',
    cta: '预约咨询',
    secondaryCta: '查看产品结构',
    heroSubtitle: '以 AI 创造，让 AI 赋能',
    heroDesc:
      '我们是一家 AI first 的创造型公司，把 AI 作为产品、内容和运营的默认工作方式，并把验证过的方法带进更多行业。',
    partnersHeading: '模型与云生态',
    partnersIntro:
      '面向实际业务场景接入模型、云服务、数据库和部署平台，让 AI 能力稳定进入企业系统。',
    partnerRows: [
      [
        ['chatgpt', 'ChatGPT'],
        ['gemini', 'Gemini'],
        ['claude', 'Claude'],
        ['anthropic', 'Anthropic'],
        ['deepseek', 'DeepSeek'],
        ['qwen', '通义千问'],
        ['doubao', '豆包'],
        ['zhipu', '智谱 AI'],
        ['moonshot', 'Moonshot'],
      ],
      [
        ['volcengine', '火山引擎'],
        ['aws', 'AWS'],
        ['googlecloud', 'Google Cloud'],
        ['azure', 'Azure'],
        ['alibabacloud', '阿里云'],
        ['tencentcloud', '腾讯云'],
        ['huaweicloud', '华为云'],
        ['vercel', 'Vercel'],
        ['supabase', 'Supabase'],
      ],
    ],
    productsHeading: '旗下产品',
    productsIntro:
      '通过 AI 赋能内容创作、资料整理、视觉资产和页面搭建，我们显著提升了产品从想法到上线的效率。',
    products: [
      {
        name: '疯狂一家人',
        englishName: 'CrazyFam',
        eyebrow: '聚会游戏',
        summary: 'AI 让疯狂一家人能更快生成和迭代聚会内容，从玩法想法快速变成可上线的游戏体验。',
        theme: 'crazyfam',
        appStoreUrl: 'https://apps.apple.com/us/app/crazyfam/id6754828243',
        privacyUrl: '/crazyfam/privacy-policy.html',
        appStoreCta: '在 App Store 下载',
        privacyCta: '隐私条款',
      },
      {
        name: '拳伴',
        englishName: 'RoundBuddy',
        eyebrow: '训练陪伴',
        summary: 'AI 让拳伴能更快把训练经验转化成可执行计划，降低内容设计和迭代成本。',
        theme: 'roundbuddy',
        appStoreUrl: 'https://apps.apple.com/us/app/roundbuddy/id6779547962',
        termsUrl: '/roundbuddy/terms.html',
        privacyUrl: '/roundbuddy/privacy-policy.html',
        appStoreCta: '在 App Store 下载',
        termsCta: '服务条款',
        privacyCta: '隐私条款',
      },
      {
        name: '鞋世界',
        englishName: 'TopShoesWorld',
        eyebrow: 'AI 电商平台',
        summary: 'AI 让鞋世界帮助传统鞋业更快出海，从产品内容生成到询盘处理，提升跨境获客和转化效率。',
        theme: 'topshoes',
        productUrl: 'https://www.topshoesworld.com/',
        productCta: '进入产品网站',
      },
    ],
    servicesHeading: '服务能力',
    servicesIntro: '从想法、内容、知识到运营动作，把 AI 变成团队每天都能使用的生产力。',
    services: [
      {
        title: 'Agent 工作流',
        body: '让 AI 不只回答问题，而是能调用工具、处理任务、跟进结果，进入真实业务流程。',
        signal: '执行',
      },
      {
        title: '知识库与 RAG',
        body: '把产品资料、业务文档和经验沉淀成可检索、可追问、可持续更新的知识系统。',
        signal: '知识',
      },
      {
        title: 'AIGC 内容工厂',
        body: '为商品、社媒、广告、短视频和品牌内容建立稳定生成与审核流程。',
        signal: '内容',
      },
      {
        title: 'AI 客服与销售助手',
        body: '自动处理咨询、FAQ、产品推荐、线索跟进和售前沟通。',
        signal: '增长',
      },
      {
        title: 'AI 电商出海',
        body: '面向跨境业务生成商品内容、处理询盘、辅助买家沟通和多语言运营。',
        signal: '出海',
      },
      {
        title: '多模型编排',
        body: '按场景组合 ChatGPT、Gemini、Claude、DeepSeek、豆包等模型能力。',
        signal: '模型',
      },
      {
        title: '数据洞察助手',
        body: '把经营数据、用户反馈和业务记录变成可对话、可追问的分析入口。',
        signal: '洞察',
      },
      {
        title: '多模态资产生产',
        body: '用 AI 生成图片、文案、脚本、页面素材和产品表达，提升创作效率。',
        signal: '视觉',
      },
      {
        title: '运营自动化',
        body: '让 AI 参与内容排期、客户触达、效果复盘和日常运营动作。',
        signal: '运营',
      },
    ],
    teamHeading: 'AI 员工团队',
    teamIntro:
      'CEO & CTO 负责方向、产品判断和技术架构，下面由 AI 员工协同承担增长、产品、工程、设计和运营，让公司以 AI 方式持续运作。',
    teamLead: {
      name: 'Luke',
      role: 'CEO & CTO',
      avatar: '/team/founder-avatar.png',
      summary: '定义公司方向、产品策略和技术架构，管理 AI 员工完成创造、执行和迭代。',
    },
    teamMembers: [
      {
        name: 'Aria Chen',
        role: '增长策略',
        label: 'Growth AI',
        avatar: '/team/marketing-avatar.png',
        summary: '用 AI 生成内容、分析渠道反馈和测试传播方向，让市场动作更快形成闭环。',
      },
      {
        name: 'Kira Lin',
        role: '产品策划',
        label: 'Product AI',
        avatar: '/team/pm-avatar.png',
        summary: '用 AI 拆解需求、梳理用户路径和生成原型，把想法更快转成可验证的产品方案。',
      },
      {
        name: 'Noah Park',
        role: '系统架构',
        label: 'Build AI',
        avatar: '/team/engineering-avatar.png',
        summary: '把模型、知识库、工具调用和自动化流程接入真实产品，让 AI 能进入业务链路。',
      },
      {
        name: 'Sofia Reyes',
        role: '体验设计',
        label: 'Design AI',
        avatar: '/team/design-avatar.png',
        summary: '用 AIGC 生成视觉方向、界面资产和表达方案，让产品体验更快接近可上线状态。',
      },
      {
        name: 'Ethan Reed',
        role: '运营自动化',
        label: 'Ops AI',
        avatar: '/team/operations-avatar.png',
        summary: '把客服、内容排期、数据复盘和线索跟进交给 AI 协作，提升持续运营效率。',
      },
      {
        name: 'Riya Shah',
        role: '知识系统',
        label: 'Knowledge AI',
        avatar: '/team/knowledge-avatar.png',
        summary: '把文档、数据和业务经验沉淀成可检索、可调用、可持续更新的知识能力。',
      },
    ],
    contactHeading: '联系我们',
    contactItems: [['业务咨询', email]],
  },
  en: {
    htmlLang: 'en',
    title: 'LY ORIGIN',
    description:
      'ly origin creates with AI and brings AI-native methods into more industries, helping products and workflows become AI-powered.',
    brand: '领弈禾元',
    brandEn: 'LY ORIGIN',
    company: 'ly origin',
    navAria: 'Main navigation',
    nav: [
      ['partners', 'Partners'],
      ['products', 'Products'],
      ['services', 'Services'],
      ['team', 'Team'],
      ['about', 'Contact'],
    ],
    langLabel: '切换语言',
    langToggle: '中文',
    cta: 'Contact us',
    secondaryCta: 'View product system',
    heroSubtitle: 'Create with AI. Transform industries with AI.',
    heroDesc:
      'We are an AI-first creation company, using AI as the default way to build products, content, and operations, then bringing proven methods into more industries.',
    partnersHeading: 'Models and Cloud',
    partnersIntro:
      'We integrate models, cloud services, databases, and deployment platforms around real business systems.',
    partnerRows: [
      [
        ['chatgpt', 'ChatGPT'],
        ['gemini', 'Gemini'],
        ['claude', 'Claude'],
        ['anthropic', 'Anthropic'],
        ['deepseek', 'DeepSeek'],
        ['qwen', 'Qwen'],
        ['doubao', 'Doubao'],
        ['zhipu', 'Zhipu AI'],
        ['moonshot', 'Moonshot'],
      ],
      [
        ['volcengine', 'Volcengine'],
        ['aws', 'AWS'],
        ['googlecloud', 'Google Cloud'],
        ['azure', 'Azure'],
        ['alibabacloud', 'Alibaba Cloud'],
        ['tencentcloud', 'Tencent Cloud'],
        ['huaweicloud', 'Huawei Cloud'],
        ['vercel', 'Vercel'],
        ['supabase', 'Supabase'],
      ],
    ],
    productsHeading: 'Products',
    productsIntro:
      'AI improves how fast we create content, organize domain knowledge, prepare visual assets, and assemble product pages from idea to launch.',
    products: [
      {
        name: 'CrazyFam',
        englishName: '疯狂一家人',
        eyebrow: 'Party game',
        summary:
          'AI helps CrazyFam turn gameplay ideas into shippable party content faster, reducing the cost of content iteration.',
        theme: 'crazyfam',
        appStoreUrl: 'https://apps.apple.com/us/app/crazyfam/id6754828243',
        privacyUrl: '/crazyfam/privacy-policy.html',
        appStoreCta: 'Download on the App Store',
        privacyCta: 'Privacy policy',
      },
      {
        name: 'RoundBuddy',
        englishName: '拳伴',
        eyebrow: 'Training companion',
        summary:
          'AI helps RoundBuddy turn training knowledge into executable plans faster, lowering the cost of session design.',
        theme: 'roundbuddy',
        appStoreUrl: 'https://apps.apple.com/us/app/roundbuddy/id6779547962',
        termsUrl: '/roundbuddy/terms.html',
        privacyUrl: '/roundbuddy/privacy-policy.html',
        appStoreCta: 'Download on the App Store',
        termsCta: 'Terms of Service',
        privacyCta: 'Privacy policy',
      },
      {
        name: 'TopShoesWorld',
        englishName: '鞋世界',
        eyebrow: 'Footwear AI commerce',
        summary:
          'AI helps traditional footwear companies go global with faster product content generation and inquiry handling.',
        theme: 'topshoes',
        productUrl: 'https://www.topshoesworld.com/',
        productCta: 'Open product site',
      },
    ],
    servicesHeading: 'Services',
    servicesIntro:
      'From ideas, content, and knowledge to operational actions, we turn AI into daily team productivity.',
    services: [
      {
        title: 'Agent Workflows',
        body: 'Make AI call tools, handle tasks, follow up on results, and enter real business workflows.',
        signal: 'Action',
      },
      {
        title: 'Knowledge Base and RAG',
        body: 'Turn product materials, documents, and business know-how into searchable, updatable AI knowledge.',
        signal: 'Knowledge',
      },
      {
        title: 'AIGC Content Factory',
        body: 'Build reliable generation and review workflows for product, social, ad, video, and brand content.',
        signal: 'Content',
      },
      {
        title: 'AI Support and Sales',
        body: 'Automate inquiries, FAQ, recommendations, lead follow-up, and presales conversations.',
        signal: 'Growth',
      },
      {
        title: 'AI Commerce Globalization',
        body: 'Generate product content, handle inquiries, support buyer communication, and multilingual ops.',
        signal: 'Global',
      },
      {
        title: 'Model Orchestration',
        body: 'Combine ChatGPT, Gemini, Claude, DeepSeek, Doubao, and other models by scenario.',
        signal: 'Models',
      },
      {
        title: 'Data Insight Assistants',
        body: 'Make business data, user feedback, and operation records explorable through conversation.',
        signal: 'Insight',
      },
      {
        title: 'Multimodal Asset Production',
        body: 'Use AI to create images, copy, scripts, page assets, and product expression faster.',
        signal: 'Visual',
      },
      {
        title: 'Operations Automation',
        body: 'Use AI for content scheduling, customer touchpoints, performance review, and daily operations.',
        signal: 'Ops',
      },
    ],
    teamHeading: 'AI Employee Team',
    teamIntro:
      'The CEO & CTO sets direction, product judgment, and technical architecture, while AI employees run growth, product, engineering, design, and operations.',
    teamLead: {
      name: 'Luke',
      role: 'CEO & CTO',
      avatar: '/team/founder-avatar.png',
      summary: 'Sets company direction, product strategy, and technical architecture while managing AI employees for creation, execution, and iteration.',
    },
    teamMembers: [
      {
        name: 'Aria Chen',
        role: 'Growth Strategy',
        label: 'Growth AI',
        avatar: '/team/marketing-avatar.png',
        summary: 'Uses AI to create content, read channel feedback, and test messaging so marketing loops move faster.',
      },
      {
        name: 'Kira Lin',
        role: 'Product Planning',
        label: 'Product AI',
        avatar: '/team/pm-avatar.png',
        summary: 'Uses AI to break down requirements, map user journeys, and generate prototypes for faster validation.',
      },
      {
        name: 'Noah Park',
        role: 'System Architecture',
        label: 'Build AI',
        avatar: '/team/engineering-avatar.png',
        summary: 'Connects models, knowledge bases, tool calling, and automation flows into real product systems.',
      },
      {
        name: 'Sofia Reyes',
        role: 'Experience Design',
        label: 'Design AI',
        avatar: '/team/design-avatar.png',
        summary: 'Uses AIGC to create visual directions, interface assets, and product expression closer to launch quality.',
      },
      {
        name: 'Ethan Reed',
        role: 'Operations Automation',
        label: 'Ops AI',
        avatar: '/team/operations-avatar.png',
        summary: 'Uses AI collaboration for support, content scheduling, data review, and lead follow-up.',
      },
      {
        name: 'Riya Shah',
        role: 'Knowledge Systems',
        label: 'Knowledge AI',
        avatar: '/team/knowledge-avatar.png',
        summary: 'Turns documents, data, and operating experience into searchable, callable, and continuously updated knowledge systems.',
      },
    ],
    contactHeading: 'Contact us',
    contactItems: [['Business inquiry', email]],
  },
}

function Arrow() {
  return <span aria-hidden="true">→</span>
}

function SectionHeader({ title, intro }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <p>{intro}</p>
    </div>
  )
}

const simpleIconMap = {
  alibabacloud: siAlibabacloud,
  anthropic: siAnthropic,
  claude: siClaude,
  deepseek: siDeepseek,
  doubao: siBytedance,
  gemini: siGooglegemini,
  googlecloud: siGooglecloud,
  huaweicloud: siHuawei,
  moonshot: siMoonshotai,
  qwen: siQwen,
  supabase: siSupabase,
  vercel: siVercel,
}

function CustomPartnerIcon({ id }) {
  if (id === 'chatgpt') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.8">
          <path d="M30.7 7.8c5.2-3 11.9-1.3 15 3.9 1.2 2.1 1.7 4.4 1.5 6.6 5.5 1.5 9.5 6.5 9.5 12.5 0 3.9-1.7 7.5-4.5 9.9.6 5.8-3.1 11.5-8.9 13.1-2.4.7-4.8.6-7-.2-3.7 4.4-10.1 5.6-15.2 2.6-3.4-2-5.5-5.3-6.1-8.9-5.5-1.6-9.4-6.6-9.4-12.5 0-3.9 1.7-7.4 4.4-9.8-.6-5.8 3.1-11.5 8.9-13.2 2.4-.7 4.8-.6 7 .2 1.2-1.7 2.8-3.1 4.8-4.2Z" />
          <path d="m22.8 43.9 18.5-10.7V21.9" />
          <path d="m41.2 20.1-18.5 10.7-9.8-5.7" />
          <path d="m14.7 38.6 18.5 10.7 9.8-5.7" />
          <path d="M49.3 25.4 30.8 14.7 21 20.4" />
          <path d="M49.3 38.6V17.2" />
          <path d="M14.7 25.4v21.4" />
        </g>
      </svg>
    )
  }

  if (id === 'aws') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
          <path d="M14 25c4-8 13-12 22-9 7 2 12 8 13 16 5 1 9 5 9 11 0 7-5 12-12 12H19C11 55 5 49 5 41c0-7 4-13 9-16Z" />
          <path d="M20 39c8 7 22 7 31-1" />
          <path d="m48 36 5 2-2 5" />
        </g>
      </svg>
    )
  }

  if (id === 'azure') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path fill="currentColor" d="M35 7 16 43h17l-10 14 27-25H34l14-25H35Z" />
      </svg>
    )
  }

  if (id === 'tencentcloud') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
          <path d="M17 44c-7 0-12-5-12-12 0-6 4-11 10-12 3-8 10-13 19-13 10 0 18 7 20 17 4 2 7 6 7 11 0 7-5 12-12 12H17Z" />
          <path d="M25 28h18M25 37h18" />
        </g>
      </svg>
    )
  }

  if (id === 'volcengine') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
          <path d="M8 52 25 16l9 18 6-11 16 29H8Z" />
          <path d="M30 13c4 5 3 9-1 13 8-3 13-8 10-18" />
        </g>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
        <path d="M32 6 54 19v26L32 58 10 45V19L32 6Z" />
        <path d="M32 19v26M20 26l12-7 12 7M20 38l12 7 12-7" />
      </g>
    </svg>
  )
}

function BrandIcon({ id }) {
  const icon = simpleIconMap[id]

  if (!icon) {
    return <CustomPartnerIcon id={id} />
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={icon.path} fill="currentColor" />
    </svg>
  )
}

function PartnerCarousel({ rows }) {
  return (
    <div className="partner-carousel" aria-label="Partners carousel">
      {rows.map((row, rowIndex) => {
        const repeated = [...row, ...row]

        return (
          <div
            className={`partner-track ${rowIndex === 1 ? 'reverse' : ''}`}
            key={rowIndex === 0 ? 'models' : 'clouds'}
          >
            {repeated.map(([id, label], index) => (
              <article className="partner-logo" key={`${id}-${rowIndex}-${index}`}>
                <BrandIcon id={id} />
                <span>{label}</span>
              </article>
            ))}
          </div>
        )
      })}
    </div>
  )
}

function ProductShowcase({ products, language }) {
  function getLocalizedUrl(url) {
    return `${url}?lang=${language}`
  }

  return (
    <div className="product-showcase">
      {products.map((product) => (
        <article className={`product-panel product-panel-${product.theme}`} key={product.name}>
          <div className="product-main-link">
            <span className="product-eyebrow">{product.eyebrow}</span>
            <div>
              <h3>{product.name}</h3>
              <span className="product-subname">{product.englishName}</span>
            </div>
            <p>{product.summary}</p>
          </div>
          {product.productUrl ? (
            <div className="product-link-row">
              <a className="product-open" href={product.productUrl}>
                {product.productCta}
                <Arrow />
              </a>
            </div>
          ) : null}
          {(product.appStoreUrl || product.termsUrl || product.privacyUrl) ? (
            <div className="product-download-row">
              {product.appStoreUrl ? (
                <a className="app-store-badge" href={product.appStoreUrl} aria-label={product.appStoreCta}>
                  <img src="/download-on-app-store.svg" alt="" />
                </a>
              ) : null}
              {product.termsUrl ? (
                <a className="product-privacy-link" href={getLocalizedUrl(product.termsUrl)}>
                  {product.termsCta}
                </a>
              ) : null}
              {product.privacyUrl ? (
                <a className="product-privacy-link" href={getLocalizedUrl(product.privacyUrl)}>
                  {product.privacyCta}
                </a>
              ) : null}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  )
}

function TeamSection({ lead, members }) {
  return (
    <div className="team-stack-layout">
      <article className="team-lead-card">
        <img className="team-lead-avatar" src={lead.avatar} alt="" loading="lazy" />
        <div>
          <h3>{lead.name}</h3>
          <strong>{lead.role}</strong>
        </div>
      </article>
      <div className="team-report-grid">
        <div className="team-grid">
          {members.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-card-top">
                <img className="team-avatar" src={member.avatar} alt="" loading="lazy" />
              </div>
              <div>
                <h3>{member.name}</h3>
              </div>
              <strong>{member.role}</strong>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

function ServicesMatrix({ services }) {
  const featuredServices = services.slice(0, 3)
  const compactServices = services.slice(3)

  return (
    <div className="services-matrix">
      <div className="service-feature-row">
        {featuredServices.map((service, index) => (
          <article className="service-card service-card-feature" key={service.title}>
            <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </div>
            <strong>{service.signal}</strong>
          </article>
        ))}
      </div>
      <div className="service-compact-grid">
        {compactServices.map((service, index) => (
          <article className="service-card service-card-compact" key={service.title}>
            <span className="service-index">{String(index + 4).padStart(2, '0')}</span>
            <div>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </div>
            <strong>{service.signal}</strong>
          </article>
        ))}
      </div>
    </div>
  )
}

function NetworkField() {
  return <div className="halo-field" aria-hidden="true" />
}

function App() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem(languageStorageKey)

    return savedLanguage === 'en' || savedLanguage === 'zh' ? savedLanguage : 'zh'
  })
  const [typedLength, setTypedLength] = useState(0)
  const copy = translations[language]
  const nextLanguage = language === 'zh' ? 'en' : 'zh'
  const heroTitleParts = useMemo(
    () =>
      language === 'zh'
        ? [
            ['以\u00a0', false],
            ['AI', true],
            ['\u00a0创造', false],
            ['\n让\u00a0', false],
            ['AI', true],
            ['\u00a0赋能', false],
          ]
        : [
            ['Create with\u00a0', false],
            ['AI', true],
            ['.\nTransform industries\nwith\u00a0', false],
            ['AI', true],
            ['.', false],
          ],
    [language],
  )
  const heroTitleText = heroTitleParts.map(([text]) => text).join('')

  function handleSectionPointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    event.currentTarget.style.setProperty('--mx', ((x - 0.5) * 2).toFixed(3))
    event.currentTarget.style.setProperty('--my', ((y - 0.5) * 2).toFixed(3))
    event.currentTarget.style.setProperty('--px', `${Math.round(x * 100)}%`)
    event.currentTarget.style.setProperty('--py', `${Math.round(y * 100)}%`)
  }

  function handleSectionPointerLeave(event) {
    event.currentTarget.style.setProperty('--mx', '0')
    event.currentTarget.style.setProperty('--my', '0')
    event.currentTarget.style.setProperty('--px', '50%')
    event.currentTarget.style.setProperty('--py', '50%')
  }

  useEffect(() => {
    document.documentElement.lang = copy.htmlLang
    window.localStorage.setItem(languageStorageKey, language)
    document.title = copy.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', copy.description)
  }, [copy, language])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let typingTimer
    const prefixLength = heroTitleParts[0][0].length
    const accentEndLength = prefixLength + heroTitleParts[1][0].length
    const firstLineEndLength = heroTitleText.includes('\n')
      ? heroTitleText.indexOf('\n')
      : accentEndLength
    const secondAccentEndLength =
      language === 'zh'
        ? heroTitleParts.slice(0, 5).reduce((length, [text]) => length + text.length, 0)
        : heroTitleParts.slice(0, 4).reduce((length, [text]) => length + text.length, 0)

    const startDelay = window.setTimeout(() => {
      if (reduceMotion) {
        setTypedLength(heroTitleText.length)
        return
      }

      setTypedLength(0)

      function typeNext(currentLength) {
        if (currentLength >= heroTitleText.length) {
          return
        }

        const nextLength = currentLength + 1
        setTypedLength(nextLength)

        let delay = 38

        if (nextLength === firstLineEndLength) {
          delay = language === 'zh' ? 480 : 260
        } else if (nextLength === accentEndLength || nextLength === secondAccentEndLength) {
          delay = 180
        } else if (nextLength > firstLineEndLength) {
          delay = language === 'zh' ? 112 : 54
        } else if (nextLength > prefixLength) {
          delay = 64
        }

        typingTimer = window.setTimeout(() => typeNext(nextLength), delay)
      }

      typingTimer = window.setTimeout(() => typeNext(0), 80)
    }, 180)

    return () => {
      window.clearTimeout(startDelay)
      window.clearTimeout(typingTimer)
    }
  }, [heroTitleParts, heroTitleText, language])

  function renderTypedTitle() {
    if (language === 'zh') {
      const lineConfigs = [
        ['以', 'AI', '创造'],
        ['让', 'AI', '赋能'],
      ]
      const visibleLines = heroTitleText.slice(0, typedLength).split('\n')

      return visibleLines.map((lineText, index) => {
        const [leftText, accentText] = lineConfigs[index] ?? ['', '', '']
        const compactText = lineText.replaceAll('\u00a0', '')
        const leftVisible = compactText.slice(0, leftText.length)
        const accentVisible = compactText.slice(leftText.length, leftText.length + accentText.length)
        const rightVisible = compactText.slice(leftText.length + accentText.length)
        const isActiveLine = index === visibleLines.length - 1
        const activeSegment =
          compactText.length <= leftText.length
            ? 'left'
            : compactText.length <= leftText.length + accentText.length
              ? 'accent'
              : 'right'
        const cursor = isActiveLine ? <span className="typing-cursor" aria-hidden="true" /> : null

        return (
          <span className="hero-title-line hero-title-line-zh" key={index}>
            <span className="hero-title-left">
              {leftVisible}
              {activeSegment === 'left' ? cursor : null}
            </span>
            <em className="hero-title-ai">
              {accentVisible}
              {activeSegment === 'accent' ? cursor : null}
            </em>
            <span className="hero-title-right">
              {rightVisible}
              {activeSegment === 'right' ? cursor : null}
            </span>
          </span>
        )
      })
    }

    let remainingLength = typedLength
    const renderedParts = heroTitleParts.map(([text, isAccent], index) => {
      const visibleText = text.slice(0, Math.max(0, remainingLength))
      remainingLength -= text.length

      return { index, isAccent, visibleText }
    })
    const lines = [[]]

    renderedParts.forEach(({ index, isAccent, visibleText }) => {
      if (!visibleText) {
        return
      }

      const segments = visibleText.split('\n')

      segments.forEach((segment, segmentIndex) => {
        if (segmentIndex > 0) {
          lines.push([])
        }

        if (!segment) {
          return
        }

        lines[lines.length - 1].push(
          isAccent ? (
            <em key={`${index}-${segmentIndex}`}>{segment}</em>
          ) : (
            <span key={`${index}-${segmentIndex}`}>{segment}</span>
          ),
        )
      })
    })

    return lines.map((line, index) => (
      <span className="hero-title-line" key={index}>
        {line}
        {index === lines.length - 1 ? <span className="typing-cursor" aria-hidden="true" /> : null}
      </span>
    ))
  }

  return (
    <main>
      <section
        className="hero-section"
        id="top"
        onPointerMove={handleSectionPointerMove}
        onPointerLeave={handleSectionPointerLeave}
      >
        <header className="site-header">
          <a className="brand" href="#top" aria-label={copy.company}>
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 120 72">
                <path className="logo-line logo-line-outer" d="M109 36 L108.58 32.38 L107.33 29 L105.27 26.1 L102.44 23.88 L98.87 22.48 L94.65 22 L89.83 22.48 L84.5 23.88 L78.75 26.1 L72.68 29 L66.4 32.38 L60 36 L53.6 39.62 L47.32 43 L41.25 45.9 L35.5 48.12 L30.17 49.52 L25.35 50 L21.13 49.52 L17.56 48.12 L14.73 45.9 L12.67 43 L11.42 39.62 L11 36 L11.42 32.38 L12.67 29 L14.73 26.1 L17.56 23.88 L21.13 22.48 L25.35 22 L30.17 22.48 L35.5 23.88 L41.25 26.1 L47.32 29 L53.6 32.38 L60 36 L66.4 39.62 L72.68 43 L78.75 45.9 L84.5 48.12 L89.83 49.52 L94.65 50 L98.87 49.52 L102.44 48.12 L105.27 45.9 L107.33 43 L108.58 39.62 L109 36 Z" />
                <path className="logo-line logo-line-middle" d="M100 36 L99.66 33.28 L98.64 30.75 L96.96 28.58 L94.64 26.91 L91.73 25.86 L88.28 25.5 L84.35 25.86 L80 26.91 L75.31 28.58 L70.35 30.75 L65.22 33.28 L60 36 L54.78 38.72 L49.65 41.25 L44.69 43.42 L40 45.09 L35.65 46.14 L31.72 46.5 L28.27 46.14 L25.36 45.09 L23.04 43.42 L21.36 41.25 L20.34 38.72 L20 36 L20.34 33.28 L21.36 30.75 L23.04 28.58 L25.36 26.91 L28.27 25.86 L31.72 25.5 L35.65 25.86 L40 26.91 L44.69 28.58 L49.65 30.75 L54.78 33.28 L60 36 L65.22 38.72 L70.35 41.25 L75.31 43.42 L80 45.09 L84.35 46.14 L88.28 46.5 L91.73 46.14 L94.64 45.09 L96.96 43.42 L98.64 41.25 L99.66 38.72 L100 36 Z" />
                <path className="logo-line logo-line-inner" d="M91 36 L90.73 34.19 L89.94 32.5 L88.64 31.05 L86.85 29.94 L84.59 29.24 L81.92 29 L78.87 29.24 L75.5 29.94 L71.86 31.05 L68.02 32.5 L64.05 34.19 L60 36 L55.95 37.81 L51.98 39.5 L48.14 40.95 L44.5 42.06 L41.13 42.76 L38.08 43 L35.41 42.76 L33.15 42.06 L31.36 40.95 L30.06 39.5 L29.27 37.81 L29 36 L29.27 34.19 L30.06 32.5 L31.36 31.05 L33.15 29.94 L35.41 29.24 L38.08 29 L41.13 29.24 L44.5 29.94 L48.14 31.05 L51.98 32.5 L55.95 34.19 L60 36 L64.05 37.81 L68.02 39.5 L71.86 40.95 L75.5 42.06 L78.87 42.76 L81.92 43 L84.59 42.76 L86.85 42.06 L88.64 40.95 L89.94 39.5 L90.73 37.81 L91 36 Z" />
              </svg>
            </span>
            <span className="brand-lockup">
              <span>{copy.brandEn}</span>
              <strong>{copy.brand}</strong>
            </span>
          </a>
          <nav aria-label={copy.navAria}>
            {copy.nav.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="language-switch"
              type="button"
              aria-label={copy.langLabel}
              onClick={() => setLanguage(nextLanguage)}
            >
              {copy.langToggle}
            </button>
          </div>
        </header>

        <div className="hero-layout">
          <NetworkField />
          <div className="hero-copy">
            <h1 className={typedLength >= heroTitleText.length ? 'typing-complete' : undefined}>
              {renderTypedTitle()}
            </h1>
            <p className="hero-desc">{copy.heroDesc}</p>
            <div className="hero-actions">
              <a className="primary-button" href={`mailto:${email}`}>
                {copy.cta}
                <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section partners-section"
        id="partners"
        onPointerMove={handleSectionPointerMove}
        onPointerLeave={handleSectionPointerLeave}
      >
        <SectionHeader title={copy.partnersHeading} intro={copy.partnersIntro} />
        <PartnerCarousel rows={copy.partnerRows} />
      </section>

      <section
        className="section products-section"
        id="products"
        onPointerMove={handleSectionPointerMove}
        onPointerLeave={handleSectionPointerLeave}
      >
        <SectionHeader title={copy.productsHeading} intro={copy.productsIntro} />
        <ProductShowcase products={copy.products} language={language} />
      </section>

      <section
        className="section services-section"
        id="services"
        onPointerMove={handleSectionPointerMove}
        onPointerLeave={handleSectionPointerLeave}
      >
        <SectionHeader title={copy.servicesHeading} intro={copy.servicesIntro} />
        <ServicesMatrix services={copy.services} />
      </section>

      <section
        className="section team-section"
        id="team"
        onPointerMove={handleSectionPointerMove}
        onPointerLeave={handleSectionPointerLeave}
      >
        <SectionHeader title={copy.teamHeading} intro={copy.teamIntro} />
        <TeamSection lead={copy.teamLead} members={copy.teamMembers} />
      </section>

      <section
        className="contact-section"
        id="about"
        onPointerMove={handleSectionPointerMove}
        onPointerLeave={handleSectionPointerLeave}
      >
        <div className="contact-links">
          {copy.contactItems.map(([label, value]) => (
            <article key={label}>
              <h3>{label}</h3>
              <a href={`mailto:${value}`}>{value}</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
