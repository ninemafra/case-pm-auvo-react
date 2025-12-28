import React, { useState, useEffect } from 'react';
import { 
  Search, Map, Home, Shield, Zap, Camera, Wrench, 
  TrendingUp, Users, ChevronRight, Menu, X, CheckCircle, 
  AlertTriangle, Smartphone, Play, BarChart3, Clock, Lock
} from 'lucide-react';

const AirbnbCaseStudy = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll spy para navegação
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'problema', 'design', 'oportunidades', 'solucao', 'metricas', 'roadmap'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const NavItem = ({ section, label }) => (
    <button
      onClick={() => scrollTo(section)}
      className={`text-sm font-medium transition-colors hover:text-[#FF385C] ${
        activeSection === section ? 'text-[#FF385C]' : 'text-gray-600'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-[#FF385C] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('intro')}>
              <div className="w-8 h-8 bg-[#FF385C] rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="font-bold text-xl tracking-tight text-[#FF385C]">Case Study</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <NavItem section="problema" label="O Problema" />
              <NavItem section="design" label="UX & Design" />
              <NavItem section="oportunidades" label="Oportunidades" />
              <NavItem section="solucao" label="Smart Fix" />
              <NavItem section="roadmap" label="Roadmap" />
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-lg">
            <div onClick={() => scrollTo('problema')} className="block py-2 text-gray-600">O Problema</div>
            <div onClick={() => scrollTo('design')} className="block py-2 text-gray-600">UX & Design</div>
            <div onClick={() => scrollTo('oportunidades')} className="block py-2 text-gray-600">Oportunidades</div>
            <div onClick={() => scrollTo('solucao')} className="block py-2 text-gray-600">Smart Fix</div>
            <div onClick={() => scrollTo('roadmap')} className="block py-2 text-gray-600">Roadmap</div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="intro" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#FF385C] text-sm font-semibold">
              Product Management Case
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Airbnb: O <span className="text-[#FF385C]">"Field Service"</span> do B2C
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
              Como o design de confiança transformou estranhos em anfitriões e como a próxima fronteira é a <strong>Manutenção Remota Assistida por IA</strong>.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={() => scrollTo('solucao')} className="px-8 py-4 bg-[#FF385C] text-white rounded-lg font-bold shadow-lg shadow-red-200 hover:bg-[#D90B3E] transition-all transform hover:-translate-y-1">
                Ver Solução Proposta
              </button>
              <button onClick={() => scrollTo('problema')} className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-lg font-bold hover:bg-gray-50 transition-all">
                Ler Análise Completa
              </button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md">
            {/* Abstract Visual Representation */}
            <div className="relative bg-gray-100 rounded-2xl p-8 aspect-square flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF385C_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div className="relative z-10 grid grid-cols-2 gap-4 w-full">
                <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center justify-center aspect-square">
                  <Home className="text-[#FF385C] mb-2" size={32} />
                  <span className="text-xs font-bold text-gray-400 uppercase">Host</span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center justify-center aspect-square mt-8">
                  <Users className="text-gray-800 mb-2" size={32} />
                  <span className="text-xs font-bold text-gray-400 uppercase">Guest</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100 z-20">
                    <Shield className="text-[#FF385C]" size={20} />
                  </div>
                </div>
                {/* Connecting lines simulated via border/position */}
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none stroke-gray-300" viewBox="0 0 100 100">
                  <path d="M 25 25 L 75 75" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Problema */}
      <section id="problema" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. O Problema Central</h2>
            <div className="w-16 h-1 bg-[#FF385C] rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Lock className="text-gray-400" /> A Fricção da Confiança
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Antes do Airbnb, alugar a casa de um estranho envolvia riscos inaceitáveis de segurança e uma logística caótica de chaves e limpeza. O produto resolveu a <strong>Ansiedade Operacional</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#FF385C]">
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Para Hosts</h4>
                  <p className="text-xs text-gray-500">Querem monetizar espaço ocioso sem virar "funcionários de hotelaria".</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Para Hóspedes</h4>
                  <p className="text-xs text-gray-500">Buscam autenticidade com a segurança de uma marca global.</p>
                </div>
              </div>
            </div>
            
            <div className="col-span-1 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-6 text-center">Evolução do Modelo</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 line-through">Asset Heavy</span>
                  <span className="text-[#FF385C] font-bold">Asset Light</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#FF385C] h-full w-full animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Hotelaria</span>
                  <span className="text-gray-900 font-bold">Tecnologia</span>
                </div>
              </div>
              <p className="text-xs text-center text-gray-400 mt-6 italic">
                "Eles não possuem quartos, possuem dados."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. UX & Design */}
      <section id="design" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. UX como Motor de Confiança</h2>
            <p className="text-gray-500">O Airbnb é um benchmark mundial em "Trust Design".</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-[#FF385C]" />,
                title: "Consistência e Padrões",
                desc: "Mesmo que cada casa seja única, a estrutura da página é rígida (Fotos → Mapa → Reviews). Isso reduz a carga cognitiva."
              },
              {
                icon: <Map className="w-8 h-8 text-[#FF385C]" />,
                title: "Map-Based Search",
                desc: "Busca visual baseada em contexto geográfico. Similar à visão de um gestor de Field Service visualizando técnicos."
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-[#FF385C]" />,
                title: "Separação de Fluxos",
                desc: "Clara distinção entre 'Inspiração' (Categorias) e 'Operação' (Mensagens/Check-in). Instruções visuais passo-a-passo."
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-6 rounded-xl border border-gray-100 hover:shadow-xl hover:border-[#FF385C]/30 transition-all duration-300 bg-white">
                <div className="mb-4 bg-red-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Oportunidades & Priorização */}
      <section id="oportunidades" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">4. Oportunidades de Evolução</h2>
            <p className="text-gray-400">Focando em resolver dores operacionais (Core do Field Service).</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Op B */}
            <div className="p-6 rounded-2xl bg-gray-800 border border-gray-700 opacity-60 hover:opacity-100 transition-opacity">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl">Dynamic Stay Pricing</h3>
                <TrendingUp size={20} className="text-yellow-400" />
              </div>
              <p className="text-sm text-gray-300 mb-4">Leilão reverso para dias ociosos de última hora. Combate a vacância.</p>
              <div className="text-xs font-mono bg-gray-900 p-2 rounded text-red-400">Risco: Canibalização de preço.</div>
            </div>

             {/* Op A - Winner */}
             <div className="relative p-8 rounded-2xl bg-white text-gray-900 border-2 border-[#FF385C] transform md:-translate-y-4 shadow-2xl shadow-red-900/20">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF385C] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Vencedora (RICE)
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-2xl text-[#FF385C]">Smart Fix AI</h3>
                <Zap size={24} className="text-[#FF385C]" />
              </div>
              <p className="text-gray-600 mb-6">Assistente de IA multimodal para diagnóstico e manutenção remota. Resolve o maior ponto de atrito entre Host e Guest.</p>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Reduz custos de suporte</span>
                </div>
                <div className="flex items-center text-sm gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Melhora NPS</span>
                </div>
                <div className="flex items-center text-sm gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>FSM B2B Inspiration</span>
                </div>
              </div>
            </div>

            {/* Op C */}
            <div className="p-6 rounded-2xl bg-gray-800 border border-gray-700 opacity-60 hover:opacity-100 transition-opacity">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl">Hyper-Local Concierge</h3>
                <Users size={20} className="text-blue-400" />
              </div>
              <p className="text-sm text-gray-300 mb-4">Venda de serviços adicionais (limpeza, chef) no app. Aumenta LTV.</p>
              <div className="text-xs font-mono bg-gray-900 p-2 rounded text-red-400">Risco: Complexidade operacional.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Solução Proposta - Interactive Demo */}
      <section id="solucao" className="py-24 bg-gradient-to-b from-white to-red-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            
            <div className="flex-1 space-y-6">
              <div className="inline-block bg-red-100 text-[#FF385C] px-3 py-1 rounded-full text-xs font-bold uppercase mb-2">
                A Solução
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900">Airbnb Smart Fix</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Um botão "Ajuda na Casa" no app. O hóspede aponta a câmera para o ar-condicionado ou roteador. A IA identifica o modelo e mostra o guia interativo ou aciona um técnico via API.
              </p>
              
              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Como funciona:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-[24px] h-6 bg-[#FF385C]/10 rounded-full flex items-center justify-center text-[#FF385C] font-bold text-xs">1</div>
                    <span className="text-sm text-gray-600">Computer Vision identifica o aparelho (ex: Ar Samsung).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-[24px] h-6 bg-[#FF385C]/10 rounded-full flex items-center justify-center text-[#FF385C] font-bold text-xs">2</div>
                    <span className="text-sm text-gray-600">Overlay de Realidade Aumentada (AR) mostra onde apertar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 min-w-[24px] h-6 bg-[#FF385C]/10 rounded-full flex items-center justify-center text-[#FF385C] font-bold text-xs">3</div>
                    <span className="text-sm text-gray-600">Fallback para técnico local se o autoatendimento falhar.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Interactive Phone Mockup */}
            <div className="flex-1 flex justify-center w-full">
              <PhoneSimulator />
            </div>

          </div>
        </div>
      </section>

      {/* 6. KPIs & Validation */}
      <section id="metricas" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">KPIs & Validação</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="p-6 bg-gray-50 rounded-xl text-center">
              <div className="text-3xl font-extrabold text-[#FF385C] mb-2">North Star</div>
              <div className="text-sm text-gray-600 font-medium">Reduction in Host-Contact Rate</div>
              <div className="text-xs text-gray-400 mt-2">Menos chamados = Mais paz</div>
            </div>
             <div className="p-6 bg-gray-50 rounded-xl text-center">
              <div className="text-3xl font-extrabold text-gray-900 mb-2">TMR</div>
              <div className="text-sm text-gray-600 font-medium">Tempo Médio de Resolução</div>
            </div>
             <div className="p-6 bg-gray-50 rounded-xl text-center">
              <div className="text-3xl font-extrabold text-gray-900 mb-2">$$$</div>
              <div className="text-sm text-gray-600 font-medium">Redução em Reembolsos</div>
            </div>
             <div className="p-6 bg-gray-50 rounded-xl text-center">
              <div className="text-3xl font-extrabold text-gray-900 mb-2">NPS</div>
              <div className="text-sm text-gray-600 font-medium">De quem teve problemas</div>
            </div>
          </div>

          <div className="bg-[#FF385C]/5 border border-[#FF385C]/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="font-bold text-xl text-gray-900 mb-2">Plano de Teste: "Wizard of Oz"</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Antes de construir a IA completa, faremos um botão falso. O hóspede envia a foto e, no backend, um especialista humano responde em tempo real. Isso valida se o usuário quer usar a ferramenta sem o custo alto de dev inicial.
              </p>
            </div>
            <div className="flex items-center gap-8 text-sm font-bold">
               <div className="text-center">
                 <span className="block text-2xl text-green-500 mb-1">Sucesso</span>
                 <span className="text-gray-500">30% resolvido sem Host</span>
               </div>
               <div className="h-12 w-px bg-gray-300"></div>
               <div className="text-center">
                 <span className="block text-2xl text-red-500 mb-1">Alerta</span>
                 <span className="text-gray-500">Usuário acha "frio"</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Roadmap */}
      <section id="roadmap" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Plano de Execução (6 Meses)</h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            
            {/* Phase 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-200 group-[.is-active]:bg-[#FF385C] group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Search size={16} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900">Discovery</h3>
                  <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">Semana 1-3</span>
                </div>
                <p className="text-sm text-gray-500">Análise de tickets (Wifi, Smart Lock). Parceria com fabricantes para APIs de manuais.</p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-200 group-[.is-active]:bg-[#FF385C] group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Wrench size={16} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900">Prototipação</h3>
                  <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">Semana 4-6</span>
                </div>
                <p className="text-sm text-gray-500">Fluxo de Realidade Aumentada. Testes de usabilidade com non-digital natives.</p>
              </div>
            </div>

             {/* Phase 3 */}
             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-200 group-[.is-active]:bg-[#FF385C] group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Zap size={16} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900">Rollout Piloto</h3>
                  <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">Mês 5-6</span>
                </div>
                <p className="text-sm text-gray-500">Lançamento apenas para "Superhosts" em 3 cidades. Integração manual com prestadores.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer / Email Tip */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Users size={18} /> Nota para o Recrutador
                </h4>
                <p className="text-sm italic leading-relaxed mb-4">
                    "Escolhi o Airbnb para esta análise por enxergar muitos paralelos com o ecossistema da Auvo. Ambos lidam com o desafio complexo de gerenciar operações remotas, garantir confiança entre partes e a necessidade crítica de 'fazer certo na primeira vez'.
                </p>
                <p className="text-sm italic leading-relaxed">
                    A proposta de IA para Manutenção Remota que desenhei no case é algo que vejo com enorme potencial para o mercado de Field Service (FSM), ajudando técnicos a diagnosticarem problemas em campo com a mesma facilidade que um hóspede resolveria um problema na estadia."
                </p>
            </div>
            <div className="mt-8 text-center text-xs text-gray-600">
                Case de Produto elaborado para processo seletivo.
            </div>
        </div>
      </footer>
    </div>
  );
};

// Componente isolado para o Simulador de Telefone
const PhoneSimulator = () => {
    const [step, setStep] = useState('home'); // home, scanning, analyzing, result, solved
    
    // Simulate flow
    useEffect(() => {
        let timer;
        if (step === 'scanning') {
            timer = setTimeout(() => setStep('analyzing'), 2000);
        } else if (step === 'analyzing') {
            timer = setTimeout(() => setStep('result'), 2000);
        }
        return () => clearTimeout(timer);
    }, [step]);

    const reset = () => setStep('home');

    return (
        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            
            {/* Screen Content */}
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative font-sans">
                
                {/* Status Bar */}
                <div className="absolute top-0 w-full h-10 bg-transparent z-10 flex justify-between px-6 pt-3 text-xs font-bold text-gray-800">
                    <span>9:41</span>
                    <div className="flex gap-1">
                        <div className="w-4 h-3 bg-gray-800 rounded-sm"></div>
                    </div>
                </div>

                {/* APP HOME */}
                {step === 'home' && (
                    <div className="flex flex-col h-full pt-12 px-4 pb-4">
                        <h3 className="font-bold text-xl mb-4 text-gray-800">Bom dia, Lucas</h3>
                        <div className="bg-[#FF385C] rounded-xl p-4 text-white mb-6 shadow-md shadow-red-200">
                            <div className="text-xs font-medium uppercase opacity-90 mb-1">Check-in Atual</div>
                            <div className="font-bold text-lg">Loft Industrial SP</div>
                            <div className="text-sm opacity-90">Rua Oscar Freire, 1200</div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="bg-gray-50 p-3 rounded-xl flex flex-col items-center justify-center gap-2 aspect-square">
                                <Map size={24} className="text-gray-600" />
                                <span className="text-xs font-medium">Como chegar</span>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-xl flex flex-col items-center justify-center gap-2 aspect-square">
                                <Lock size={24} className="text-gray-600" />
                                <span className="text-xs font-medium">Acesso</span>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <button 
                                onClick={() => setStep('scanning')}
                                className="w-full bg-white border-2 border-[#FF385C] text-[#FF385C] py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-50 transition-colors"
                            >
                                <Camera size={20} />
                                Smart Fix
                            </button>
                        </div>
                    </div>
                )}

                {/* CAMERA SCANNING */}
                {step === 'scanning' && (
                    <div className="h-full w-full bg-gray-900 relative">
                        {/* Fake Camera Feed Background */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center">
                            <div className="text-white/20 text-6xl">
                                <Zap /> 
                            </div>
                        </div>
                        
                        {/* Overlay Elements */}
                        <div className="absolute top-12 left-4 z-20">
                            <button onClick={reset} className="p-2 bg-black/40 rounded-full text-white"><X size={20}/></button>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-48 h-48 border-2 border-white/50 rounded-lg relative">
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#FF385C]"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#FF385C]"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#FF385C]"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#FF385C]"></div>
                                
                                {/* Scan Line Animation */}
                                <div className="w-full h-0.5 bg-[#FF385C] absolute top-0 animate-[scan_2s_ease-in-out_infinite]"></div>
                            </div>
                        </div>

                        <div className="absolute bottom-10 w-full text-center text-white px-8">
                            <p className="text-sm font-medium">Aponte para o aparelho com defeito...</p>
                        </div>
                    </div>
                )}

                {/* ANALYZING */}
                {step === 'analyzing' && (
                    <div className="h-full w-full bg-gray-900 flex flex-col items-center justify-center">
                        <div className="w-16 h-16 border-4 border-[#FF385C]/30 border-t-[#FF385C] rounded-full animate-spin mb-6"></div>
                        <h3 className="text-white font-bold text-lg">Identificando modelo...</h3>
                        <p className="text-gray-400 text-sm mt-2">Samsung WindFree™ Detectado</p>
                    </div>
                )}

                {/* RESULT */}
                {step === 'result' && (
                    <div className="h-full w-full bg-white flex flex-col pt-12 px-5">
                         <div className="flex justify-between items-center mb-6">
                            <button onClick={reset} className="p-1"><ChevronRight className="rotate-180" /></button>
                            <span className="font-bold text-sm">Diagnóstico</span>
                            <div className="w-4"></div>
                         </div>

                         <div className="bg-gray-50 p-4 rounded-xl mb-6 flex gap-4 items-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                <Zap size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm">Ar Condicionado</h4>
                                <p className="text-xs text-gray-500">Samsung WindFree 220v</p>
                            </div>
                         </div>

                         <h3 className="font-bold mb-4">Problemas Comuns:</h3>
                         
                         <div className="space-y-3">
                            <button onClick={() => setStep('solved')} className="w-full p-4 border border-gray-200 rounded-xl flex items-center justify-between hover:border-[#FF385C] hover:bg-red-50 transition-all group">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold group-hover:bg-[#FF385C] group-hover:text-white">?</div>
                                    <span className="text-sm font-medium">Não gela o suficiente</span>
                                </div>
                                <ChevronRight size={16} className="text-gray-400" />
                            </button>
                            <button className="w-full p-4 border border-gray-200 rounded-xl flex items-center justify-between hover:border-[#FF385C] hover:bg-red-50 transition-all group">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold group-hover:bg-[#FF385C] group-hover:text-white">?</div>
                                    <span className="text-sm font-medium">Controle não funciona</span>
                                </div>
                                <ChevronRight size={16} className="text-gray-400" />
                            </button>
                         </div>

                         <div className="mt-auto mb-6">
                             <div className="text-center text-xs text-gray-400 mb-3">Não resolveu?</div>
                             <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold text-sm">
                                 Chamar Técnico (Auvo Network)
                             </button>
                         </div>
                    </div>
                )}

                 {/* SOLVED (Tutorial) */}
                 {step === 'solved' && (
                    <div className="h-full w-full bg-white flex flex-col pt-0 relative">
                        {/* Video placeholder */}
                        <div className="h-[250px] bg-gray-900 w-full relative">
                            <button onClick={() => setStep('result')} className="absolute top-10 left-4 text-white z-10 p-2 bg-black/20 rounded-full backdrop-blur-sm">
                                <ChevronRight className="rotate-180" />
                            </button>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <Play size={20} className="text-white fill-white ml-1" />
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <p className="text-xs font-bold bg-[#FF385C] inline-block px-2 py-0.5 rounded mb-1">Passo 1</p>
                                <p className="font-medium text-sm">Limpeza de Filtro</p>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="font-bold text-lg mb-2">Instruções</h3>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Abra a tampa frontal puxando pelas laterais. Remova o filtro deslizando-o para cima e depois para fora.
                            </p>
                            
                            <button onClick={reset} className="w-full bg-[#FF385C] text-white py-3 rounded-xl font-bold shadow-lg shadow-red-200">
                                Funcionou! Obrigado.
                            </button>
                        </div>
                    </div>
                )}

            </div>
            
            {/* Custom Scan Animation Style */}
            <style>{`
                @keyframes scan {
                    0% { top: 0; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>
        </div>
    );
}

export default AirbnbCaseStudy;