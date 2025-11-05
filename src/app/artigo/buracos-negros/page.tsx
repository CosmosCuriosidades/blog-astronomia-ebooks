"use client"

import { useState } from 'react'
import { Star, Eye, Calendar, User, ChevronLeft, Heart } from 'lucide-react'
import Link from 'next/link'

export default function ArtigoBuracosNegros() {
  const [liked, setLiked] = useState(false)

  const article = {
    title: "Buracos Negros: Os Monstros Invisíveis do Universo",
    subtitle: "Descubra os segredos mais sombrios do cosmos e como esses gigantes cósmicos moldam galáxias inteiras",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=600&fit=crop",
    author: "Dr. Marcus Stellar",
    date: "15 Jan 2024",
    readTime: "8 min",
    views: "12.5k",
    category: "Astrofísica",
    content: `
      Os buracos negros são, sem dúvida, os objetos mais fascinantes e misteriosos do universo. Esses gigantes cósmicos desafiam nossa compreensão da física e continuam a surpreender cientistas ao redor do mundo com suas propriedades extremas.

      ## O Que São Buracos Negros?

      Um buraco negro é uma região do espaço-tempo onde a gravidade é tão intensa que nada - nem mesmo a luz - pode escapar uma vez que cruze o chamado "horizonte de eventos". Essa característica os torna literalmente invisíveis, daí o nome "buraco negro".

      ### Como Se Formam?

      A maioria dos buracos negros se forma quando uma estrela massiva (pelo menos 20-25 vezes a massa do Sol) chega ao fim de sua vida. Quando o combustível nuclear se esgota, a estrela não consegue mais sustentar sua própria gravidade e colapsa violentamente sobre si mesma.

      Este colapso é tão extremo que toda a massa da estrela é comprimida em um ponto de densidade infinita chamado **singularidade**. Ao redor dessa singularidade forma-se o horizonte de eventos - a "fronteira" do buraco negro.

      ## Tipos de Buracos Negros

      ### 1. Buracos Negros Estelares
      - Formados pelo colapso de estrelas massivas
      - Massa entre 3 a 20 vezes a massa do Sol
      - São os mais comuns na nossa galáxia

      ### 2. Buracos Negros Supermassivos
      - Encontrados no centro das galáxias
      - Massa entre milhões a bilhões de vezes a massa do Sol
      - O buraco negro no centro da Via Láctea tem 4 milhões de massas solares

      ### 3. Buracos Negros Intermediários
      - Massa entre centenas a milhares de vezes a massa do Sol
      - Mais raros e difíceis de detectar
      - Ainda são objeto de intensa pesquisa

      ## A Física Extrema dos Buracos Negros

      ### Distorção do Espaço-Tempo

      Os buracos negros não apenas curvam o espaço ao seu redor - eles o distorcem de forma tão extrema que alteram o próprio fluxo do tempo. Quanto mais próximo você estiver do horizonte de eventos, mais devagar o tempo passa em relação a um observador distante.

      Este fenômeno, conhecido como **dilatação temporal gravitacional**, foi previsto pela Teoria da Relatividade Geral de Einstein e já foi comprovado experimentalmente.

      ### O Horizonte de Eventos

      O horizonte de eventos é o ponto de não retorno. Uma vez que qualquer objeto cruze essa fronteira invisível, está condenado a cair em direção à singularidade central. Para um buraco negro de massa solar, o horizonte de eventos tem apenas cerca de 3 quilômetros de raio.

      ## Como Detectamos Buracos Negros?

      Já que são invisíveis, como sabemos que existem? Os cientistas usam várias técnicas engenhosas:

      ### 1. Efeitos Gravitacionais
      Observamos estrelas orbitando algo invisível e massivo, indicando a presença de um buraco negro.

      ### 2. Discos de Acreção
      Quando matéria cai em direção ao buraco negro, forma um disco giratório que se aquece a temperaturas extremas, emitindo radiação que podemos detectar.

      ### 3. Ondas Gravitacionais
      Quando dois buracos negros se fundem, criam ondulações no espaço-tempo que podemos detectar com instrumentos como o LIGO.

      ### 4. Imagens Diretas
      Em 2019, o Event Horizon Telescope conseguiu a primeira imagem de um buraco negro - o gigante no centro da galáxia M87.

      ## Descobertas Recentes

      ### O Buraco Negro de M87*
      A primeira imagem de um buraco negro mostrou o gigante supermassivo no centro da galáxia M87, com 6,5 bilhões de vezes a massa do Sol. A imagem revelou o "anel de fogo" - a matéria superaquecida orbitando o buraco negro.

      ### Sagittarius A*
      Em 2022, conseguimos a primeira imagem do buraco negro no centro da nossa própria galáxia, Sagittarius A*. Apesar de ser 1.000 vezes menor que M87*, foi mais difícil de fotografar devido à sua variabilidade.

      ### Ondas Gravitacionais
      Desde 2015, detectamos dezenas de fusões de buracos negros através de ondas gravitacionais, revelando uma população de buracos negros que não conhecíamos antes.

      ## Mistérios Ainda Não Resolvidos

      ### O Paradoxo da Informação
      Se um buraco negro evapora completamente através da radiação Hawking, o que acontece com a informação que caiu nele? Este é um dos maiores mistérios da física moderna.

      ### O Interior dos Buracos Negros
      O que realmente acontece além do horizonte de eventos? A física atual não consegue descrever o que ocorre na singularidade.

      ### Buracos Negros Primordiais
      Buracos negros formados nos primeiros momentos após o Big Bang poderiam explicar parte da matéria escura do universo?

      ## O Futuro da Pesquisa

      Os próximos anos prometem descobertas revolucionárias:

      - **Telescópios mais avançados** permitirão imagens ainda melhores de buracos negros
      - **Detectores de ondas gravitacionais** mais sensíveis revelarão fusões mais distantes
      - **Simulações computacionais** cada vez mais precisas nos ajudarão a entender a física extrema

      ## Conclusão

      Os buracos negros continuam sendo os objetos mais extremos e fascinantes do universo. Cada nova descoberta nos aproxima de compreender esses monstros cósmicos e, ao mesmo tempo, revela novos mistérios sobre a natureza fundamental da realidade.

      Eles não são apenas "aspiradores cósmicos" - são laboratórios naturais onde a física é testada em condições impossíveis de replicar na Terra. Estudá-los nos ajuda a entender não apenas como o universo funciona, mas também como ele evoluiu desde o Big Bang.

      A jornada para desvendar todos os segredos dos buracos negros está apenas começando, e as descobertas futuras prometem ser ainda mais surpreendentes do que podemos imaginar.
    `
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
            <ChevronLeft className="w-5 h-5" />
            Voltar ao Blog
          </Link>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            {article.category}
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        {/* Article Header */}
        <div className="bg-gradient-to-br from-purple-900/80 to-pink-900/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {article.title}
          </h1>
          <p className="text-xl text-purple-200 mb-6">
            {article.subtitle}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-purple-300">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              <span>{article.views} visualizações</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{article.readTime} de leitura</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6 pt-6 border-t border-purple-500/20">
            <button 
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                liked 
                  ? 'bg-red-500 text-white' 
                  : 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/30'
              }`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
              {liked ? 'Curtido!' : 'Curtir'}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-all">
              Compartilhar
            </button>
          </div>
        </div>

        {/* Article Content */}
        <article className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-8">
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-purple-100 leading-relaxed space-y-6">
              {article.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  )
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-purple-200 mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  )
                } else if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(item => item.startsWith('- '))
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 text-purple-200">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  )
                } else if (paragraph.includes('**') && paragraph.includes('**')) {
                  return (
                    <p key={index} className="text-purple-100" dangerouslySetInnerHTML={{
                      __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                    }} />
                  )
                } else if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-purple-100">
                      {paragraph}
                    </p>
                  )
                }
                return null
              })}
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Artigos Relacionados</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">
                Exoplanetas: Mundos Alienígenas Que Vão Te Surpreender
              </h3>
              <p className="text-purple-300 text-sm">
                Planetas de diamante, chuvas de vidro e oceanos de lava...
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
              <h3 className="text-lg font-semibold text-white mb-2">
                O Mistério da Matéria Escura: 85% do Universo é Invisível
              </h3>
              <p className="text-purple-300 text-sm">
                Uma força misteriosa que controla o destino de tudo que existe...
              </p>
            </div>
          </div>
        </div>

        {/* CTA for Ebook */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-400/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            🚀 Quer Saber Mais Sobre Buracos Negros?
          </h3>
          <p className="text-purple-200 mb-6">
            Nosso ebook "Segredos dos Buracos Negros" contém 156 páginas de conteúdo aprofundado 
            sobre esses fascinantes objetos cósmicos!
          </p>
          <Link href="/ebook/buracos-negros">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
              Ver Ebook Completo - R$ 29,90
            </button>
          </Link>
        </div>
      </div>

      <div className="h-16"></div>
    </div>
  )
}