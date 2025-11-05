"use client"

import { useState } from 'react'
import { Star, Download, Eye, ChevronLeft, Heart, User } from 'lucide-react'
import Link from 'next/link'

export default function EbookBuracosNegros() {
  const [activeTab, setActiveTab] = useState('descricao')

  const ebook = {
    title: "SEGREDOS DOS BURACOS NEGROS",
    subtitle: "O Guia Definitivo para Entender os Monstros Cósmicos",
    price: "R$ 29,90",
    originalPrice: "R$ 49,90",
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop",
    pages: "156 páginas",
    rating: 4.9,
    reviews: 847,
    bestseller: true,
    author: "Dr. Marcus Stellar",
    publishDate: "Janeiro 2024",
    language: "Português",
    format: "PDF + EPUB",
    description: "Desvende os mistérios mais profundos do universo! Este ebook revela tudo sobre buracos negros, desde sua formação até como eles distorcem o tempo e o espaço. Uma jornada fascinante pelos objetos mais extremos do cosmos.",
    fullDescription: `
      Prepare-se para uma jornada extraordinária pelos objetos mais misteriosos e fascinantes do universo: os buracos negros!

      Este ebook completo e detalhado vai te levar através de uma exploração profunda desses gigantes cósmicos que desafiam nossa compreensão da realidade. Desde os conceitos básicos até as descobertas mais recentes da astrofísica moderna.

      **O que você vai descobrir:**

      • Como os buracos negros se formam e evoluem
      • A física extrema do horizonte de eventos
      • Como eles distorcem o tempo e o espaço
      • O papel dos buracos negros na formação de galáxias
      • As últimas descobertas do Event Horizon Telescope
      • Teorias sobre o que acontece dentro de um buraco negro
      • A radiação Hawking e a evaporação dos buracos negros
      • Buracos negros supermassivos e sua influência cósmica

      Escrito de forma acessível mas cientificamente rigorosa, este guia é perfeito tanto para iniciantes curiosos quanto para entusiastas mais avançados da astronomia.
    `,
    chapters: [
      "1. Introdução aos Buracos Negros",
      "2. A Física por Trás dos Gigantes Cósmicos",
      "3. Formação e Evolução",
      "4. O Horizonte de Eventos",
      "5. Distorção do Espaço-Tempo",
      "6. Tipos de Buracos Negros",
      "7. Detecção e Observação",
      "8. Buracos Negros Supermassivos",
      "9. A Radiação Hawking",
      "10. O Futuro dos Buracos Negros"
    ],
    testimonials: [
      {
        name: "Ana Silva",
        rating: 5,
        comment: "Incrível! Finalmente entendi os buracos negros de forma clara e fascinante."
      },
      {
        name: "Carlos Mendes",
        rating: 5,
        comment: "Conteúdo de altíssima qualidade. Recomendo para todos os amantes da astronomia."
      },
      {
        name: "Marina Costa",
        rating: 5,
        comment: "Explicações claras e científicas. Valeu cada centavo!"
      }
    ]
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Ebook Info */}
          <div>
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              {ebook.bestseller && (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-center py-2 font-bold text-sm rounded-lg mb-6">
                  🔥 BESTSELLER 🔥
                </div>
              )}
              
              <div className="flex gap-6 mb-6">
                <img 
                  src={ebook.image} 
                  alt={ebook.title}
                  className="w-32 h-48 object-cover rounded-lg shadow-2xl"
                />
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-white mb-2">
                    {ebook.title}
                  </h1>
                  <p className="text-purple-300 text-lg mb-4">
                    {ebook.subtitle}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(ebook.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                      ))}
                    </div>
                    <span className="text-white text-lg font-semibold">{ebook.rating}</span>
                    <span className="text-purple-300">({ebook.reviews} avaliações)</span>
                  </div>
                  <div className="space-y-2 text-purple-300 text-sm">
                    <p><strong>Autor:</strong> {ebook.author}</p>
                    <p><strong>Páginas:</strong> {ebook.pages}</p>
                    <p><strong>Formato:</strong> {ebook.format}</p>
                    <p><strong>Idioma:</strong> {ebook.language}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-3xl font-bold text-white">{ebook.price}</span>
                  <span className="text-purple-400 line-through ml-3 text-xl">{ebook.originalPrice}</span>
                </div>
                <div className="text-green-400 font-semibold text-lg">
                  40% OFF
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                  <Download className="w-6 h-6" />
                  Comprar Agora - {ebook.price}
                </button>
                <button className="w-full border-2 border-purple-400 text-purple-400 py-3 rounded-full hover:bg-purple-400 hover:text-white transition-all flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5" />
                  Prévia Grátis (10 páginas)
                </button>
              </div>

              <div className="mt-6 p-4 bg-purple-500/20 rounded-lg border border-purple-400/30">
                <h3 className="text-white font-semibold mb-2">🎁 Bônus Exclusivos:</h3>
                <ul className="text-purple-200 text-sm space-y-1">
                  <li>• Infográficos exclusivos sobre buracos negros</li>
                  <li>• Acesso ao grupo VIP no Telegram</li>
                  <li>• Atualizações gratuitas do ebook</li>
                  <li>• Suporte direto com o autor</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Content Tabs */}
          <div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20">
              {/* Tab Navigation */}
              <div className="flex border-b border-purple-500/20">
                <button 
                  className={`flex-1 py-4 px-6 font-semibold transition-colors ${activeTab === 'descricao' ? 'text-white bg-purple-500/20' : 'text-purple-300 hover:text-white'}`}
                  onClick={() => setActiveTab('descricao')}
                >
                  Descrição
                </button>
                <button 
                  className={`flex-1 py-4 px-6 font-semibold transition-colors ${activeTab === 'capitulos' ? 'text-white bg-purple-500/20' : 'text-purple-300 hover:text-white'}`}
                  onClick={() => setActiveTab('capitulos')}
                >
                  Capítulos
                </button>
                <button 
                  className={`flex-1 py-4 px-6 font-semibold transition-colors ${activeTab === 'avaliacoes' ? 'text-white bg-purple-500/20' : 'text-purple-300 hover:text-white'}`}
                  onClick={() => setActiveTab('avaliacoes')}
                >
                  Avaliações
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'descricao' && (
                  <div className="text-purple-200 space-y-4">
                    <p className="text-lg">{ebook.description}</p>
                    <div className="whitespace-pre-line">{ebook.fullDescription}</div>
                  </div>
                )}

                {activeTab === 'capitulos' && (
                  <div>
                    <h3 className="text-white font-semibold mb-4">Conteúdo do Ebook:</h3>
                    <ul className="space-y-3">
                      {ebook.chapters.map((chapter, index) => (
                        <li key={index} className="flex items-center gap-3 text-purple-200">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                            {index + 1}
                          </div>
                          {chapter}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'avaliacoes' && (
                  <div>
                    <h3 className="text-white font-semibold mb-6">O que nossos leitores dizem:</h3>
                    <div className="space-y-6">
                      {ebook.testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                              <User className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="text-white font-semibold">{testimonial.name}</p>
                              <div className="flex items-center">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-purple-200">"{testimonial.comment}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Ebooks */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Outros Ebooks que Você Pode Gostar
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
              <div className="flex gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=300&h=400&fit=crop" 
                  alt="Vida Alienígena"
                  className="w-20 h-28 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">VIDA ALIENÍGENA</h3>
                  <p className="text-purple-300 text-sm mb-3">A Busca por Civilizações Extraterrestres</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-white">R$ 24,90</span>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm hover:from-purple-600 hover:to-pink-600 transition-all">
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
              <div className="flex gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=400&fit=crop" 
                  alt="Viagem no Tempo"
                  className="w-20 h-28 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">VIAGEM NO TEMPO</h3>
                  <p className="text-purple-300 text-sm mb-3">Física Quântica e Paradoxos Temporais</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-white">R$ 34,90</span>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm hover:from-purple-600 hover:to-pink-600 transition-all">
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}