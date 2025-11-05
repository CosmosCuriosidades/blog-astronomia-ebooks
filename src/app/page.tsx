"use client"

import { useState } from 'react'
import { Star, Download, Eye, Calendar, User, Menu, X, ChevronRight, Play, Heart } from 'lucide-react'

export default function CosmicBlog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const blogPosts = [
    {
      id: 1,
      title: "Buracos Negros: Os Monstros Invisíveis do Universo",
      excerpt: "Descubra os segredos mais sombrios do cosmos e como esses gigantes cósmicos moldam galáxias inteiras.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
      date: "15 Jan 2024",
      views: "12.5k",
      category: "Astrofísica"
    },
    {
      id: 2,
      title: "Exoplanetas: Mundos Alienígenas Que Vão Te Surpreender",
      excerpt: "Planetas de diamante, chuvas de vidro e oceanos de lava. A realidade supera a ficção científica!",
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=600&h=400&fit=crop",
      date: "12 Jan 2024",
      views: "8.7k",
      category: "Exoplanetas"
    },
    {
      id: 3,
      title: "O Mistério da Matéria Escura: 85% do Universo é Invisível",
      excerpt: "Uma força misteriosa que não podemos ver, mas que controla o destino de tudo que existe.",
      image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=600&h=400&fit=crop",
      date: "10 Jan 2024",
      views: "15.2k",
      category: "Cosmologia"
    }
  ]

  const ebooks = [
    {
      id: 1,
      title: "SEGREDOS DOS BURACOS NEGROS",
      subtitle: "O Guia Definitivo para Entender os Monstros Cósmicos",
      price: "R$ 29,90",
      originalPrice: "R$ 49,90",
      image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=300&h=400&fit=crop",
      pages: "156 páginas",
      rating: 4.9,
      reviews: 847,
      bestseller: true,
      description: "Desvende os mistérios mais profundos do universo! Este ebook revela tudo sobre buracos negros, desde sua formação até como eles distorcem o tempo e o espaço."
    },
    {
      id: 2,
      title: "VIDA ALIENÍGENA",
      subtitle: "A Busca por Civilizações Extraterrestres",
      price: "R$ 24,90",
      originalPrice: "R$ 39,90",
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=300&h=400&fit=crop",
      pages: "134 páginas",
      rating: 4.8,
      reviews: 623,
      bestseller: false,
      description: "Estamos sozinhos no universo? Explore as evidências científicas, os métodos de busca e as possibilidades reais de encontrarmos vida extraterrestre."
    },
    {
      id: 3,
      title: "VIAGEM NO TEMPO",
      subtitle: "Física Quântica e Paradoxos Temporais",
      price: "R$ 34,90",
      originalPrice: "R$ 54,90",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=400&fit=crop",
      pages: "189 páginas",
      rating: 4.9,
      reviews: 1205,
      bestseller: true,
      description: "É possível viajar no tempo? Mergulhe na física quântica, relatividade e os paradoxos que desafiam nossa compreensão da realidade."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  COSMIC SECRETS
                </h1>
                <p className="text-xs text-purple-300">Desvendando o Universo</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#blog" className="text-white hover:text-purple-400 transition-colors">Blog</a>
              <a href="#ebooks" className="text-white hover:text-purple-400 transition-colors">Ebooks</a>
              <a href="#sobre" className="text-white hover:text-purple-400 transition-colors">Sobre</a>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                Comprar Agora
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-purple-500/20">
              <nav className="flex flex-col space-y-4">
                <a href="#blog" className="text-white hover:text-purple-400 transition-colors">Blog</a>
                <a href="#ebooks" className="text-white hover:text-purple-400 transition-colors">Ebooks</a>
                <a href="#sobre" className="text-white hover:text-purple-400 transition-colors">Sobre</a>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all w-fit">
                  Comprar Agora
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Desvende os{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SEGREDOS
              </span>
              <br />do Universo
            </h1>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Explore os mistérios mais profundos do cosmos com conteúdo científico de alta qualidade. 
              Buracos negros, vida alienígena, viagem no tempo e muito mais!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Explorar Agora
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all">
                Ver Ebooks
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Últimas Descobertas
            </h2>
            <p className="text-purple-200 text-lg">
              Conteúdo exclusivo sobre os mistérios mais fascinantes do universo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border border-purple-500/20">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-purple-200 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-purple-300">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </div>
                    </div>
                    <button className="text-purple-400 hover:text-purple-300 flex items-center gap-1">
                      Ler mais <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ebooks Section */}
      <section id="ebooks" className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ebooks Exclusivos
            </h2>
            <p className="text-purple-200 text-lg">
              Conhecimento profundo sobre os mistérios do universo
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full px-6 py-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">Promoção Limitada - 40% OFF</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ebooks.map((ebook) => (
              <div key={ebook.id} className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                {ebook.bestseller && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-center py-2 font-bold text-sm">
                    🔥 BESTSELLER 🔥
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex gap-4 mb-4">
                    <img 
                      src={ebook.image} 
                      alt={ebook.title}
                      className="w-20 h-28 object-cover rounded-lg shadow-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {ebook.title}
                      </h3>
                      <p className="text-purple-300 text-sm mb-2">
                        {ebook.subtitle}
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(ebook.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                          ))}
                        </div>
                        <span className="text-white text-sm font-semibold">{ebook.rating}</span>
                        <span className="text-purple-300 text-sm">({ebook.reviews})</span>
                      </div>
                      <p className="text-purple-300 text-sm">{ebook.pages}</p>
                    </div>
                  </div>

                  <p className="text-purple-200 text-sm mb-4 line-clamp-3">
                    {ebook.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-white">{ebook.price}</span>
                      <span className="text-purple-400 line-through ml-2">{ebook.originalPrice}</span>
                    </div>
                    <div className="text-green-400 font-semibold text-sm">
                      40% OFF
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                      <Download className="w-5 h-5" />
                      Comprar Agora
                    </button>
                    <button className="w-full border border-purple-400 text-purple-400 py-2 rounded-full hover:bg-purple-400 hover:text-white transition-all flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      Prévia Grátis
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 Oferta Especial: Todos os Ebooks por R$ 69,90
            </h3>
            <p className="text-purple-200 mb-6">
              Economize mais de R$ 50,00 comprando o pacote completo!
              <br />
              <span className="text-sm">Valor normal: R$ 124,70 | Você paga: R$ 69,90</span>
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-500 hover:to-orange-500 transition-all transform hover:scale-105">
              🔥 QUERO O PACOTE COMPLETO 🔥
            </button>
            <p className="text-purple-300 text-sm mt-4">
              ⏰ Oferta válida por tempo limitado!
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              🌌 Receba Conteúdo Exclusivo
            </h3>
            <p className="text-purple-200 mb-6">
              Cadastre-se e receba artigos exclusivos, descobertas científicas em primeira mão 
              e descontos especiais nos nossos ebooks!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-purple-400/30 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
                Inscrever-se
              </button>
            </div>
            <p className="text-purple-300 text-sm mt-4">
              ✅ Sem spam • ✅ Cancele quando quiser • ✅ Conteúdo de qualidade
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-purple-500/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  COSMIC SECRETS
                </span>
              </div>
              <p className="text-purple-300 text-sm">
                Desvendando os mistérios do universo através da ciência e conhecimento.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Conteúdo</h4>
              <ul className="space-y-2 text-purple-300 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Ebooks</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Artigos</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Newsletter</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-purple-300 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacidade</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Conecte-se</h4>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                  <Heart className="w-5 h-5 text-white" />
                </button>
                <button className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                  <User className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center">
            <p className="text-purple-300 text-sm">
              © 2024 Cosmic Secrets. Todos os direitos reservados. 
              <span className="text-purple-400"> Feito com ❤️ para exploradores do universo.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}