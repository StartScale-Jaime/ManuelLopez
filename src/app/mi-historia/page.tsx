import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Calendar, Mail, Star, Trophy, Target, CheckCircle2, Sparkles, Zap, BookOpen, Medal } from "lucide-react";
import Link from "next/link";
import ContactFormModal from "@/components/ContactFormModal";

export default function MiHistoria() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-green-800 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-40"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
          <div className="absolute top-60 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 left-32 w-3 h-3 bg-green-300 rounded-full animate-pulse opacity-70"></div>
          <div className="absolute top-40 right-1/3 w-2 h-2 bg-white rounded-full animate-ping opacity-50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-6xl mx-auto">
            
            {/* Header with animated badge */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 text-white font-medium">
                <Medal className="h-5 w-5 text-yellow-400" />
                <span>Profesional Certificado</span>
                <Award className="h-5 w-5 text-yellow-400" />
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
                Mi 
                <span className="bg-gradient-to-r from-yellow-400 via-emerald-400 to-green-300 bg-clip-text text-transparent">
                  Historia
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-emerald-100 leading-relaxed max-w-4xl mx-auto font-light">
                Conoce mi formación, experiencia y 
                <span className="font-semibold text-white">pasión por transformar jugadores</span>
              </p>
            </div>

            {/* Profile Section Premium */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 md:p-12 mb-16 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Profile Image */}
                <div className="relative group">
                  <div className="w-64 h-64 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
                    <div className="text-white text-center">
                      <GraduationCap className="h-20 w-20 mx-auto mb-4" />
                      <p className="font-bold text-lg">Manuel López</p>
                      <p className="text-emerald-100 text-sm">CAFYD + Máster</p>
                    </div>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400/30 to-emerald-400/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 -z-10"></div>
                </div>
                
                {/* Profile Content */}
                <div className="flex-1 text-center lg:text-left text-white">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Manuel López
                  </h2>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                    <p className="text-lg md:text-xl leading-relaxed text-emerald-100">
                      Graduado en <span className="font-bold text-white">Ciencias de la Actividad Física y del Deporte (CAFYD)</span> 
                      con <span className="font-bold text-white">Máster en Preparación Deportiva</span>. 
                    </p>
                    <p className="text-lg text-emerald-100 mt-4">
                      Mi misión es ayudar a cada jugador a desarrollar su potencial único a través de 
                      <span className="font-semibold text-white"> entrenamientos científicamente fundamentados</span>.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <ContactFormModal />
                    <Link href="/contactos">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="text-white border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/50 transition-all duration-300 group"
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        Ver contactos
                        <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20 text-white">
            <path fill="currentColor" d="M0,96L40,90.7C80,85,160,75,240,69.3C320,64,400,64,480,74.7C560,85,640,107,720,112C800,117,880,107,960,90.7C1040,75,1120,53,1200,48C1280,43,1360,53,1400,58.7L1440,64L1440,120L1400,120C1360,120,1280,120,1200,120C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Formación y Experiencia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una base sólida en ciencia deportiva respaldada por experiencia práctica
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Education Card */}
            <div className="group relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 relative overflow-hidden group-hover:scale-105">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Formación Académica</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border-l-4 border-emerald-500">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-gray-900">
                          Graduado en CAFYD
                        </h4>
                        <div className="flex items-center text-emerald-600 text-sm font-medium">
                          <Calendar className="h-4 w-4 mr-1" />
                          2018-2022
                        </div>
                      </div>
                      <p className="text-gray-700 font-medium mb-2">
                        Ciencias de la Actividad Física y del Deporte
                      </p>
                      <p className="text-gray-600 text-sm">
                        Formación integral en anatomía, fisiología, biomecánica y metodología del entrenamiento deportivo.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-500">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-gray-900">
                          Máster en Preparación Deportiva
                        </h4>
                        <div className="flex items-center text-green-600 text-sm font-medium">
                          <Calendar className="h-4 w-4 mr-1" />
                          2022-2023
                        </div>
                      </div>
                      <p className="text-gray-700 font-medium mb-2">
                        Especialización en entrenamiento de alto rendimiento
                      </p>
                      <p className="text-gray-600 text-sm">
                        Profundización en periodización, análisis del rendimiento y tecnologías aplicadas al deporte.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialization Card */}
            <div className="group relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 relative overflow-hidden group-hover:scale-105">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Especialización</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { 
                        title: "Análisis biomecánico del movimiento deportivo",
                        desc: "Evaluación técnica avanzada de gestos futbolísticos"
                      },
                      { 
                        title: "Planificación de entrenamientos personalizados",
                        desc: "Programas adaptados a cada jugador y objetivo"
                      },
                      { 
                        title: "Preparación física específica para fútbol",
                        desc: "Desarrollo de cualidades físicas aplicadas al fútbol"
                      },
                      { 
                        title: "Prevención y recuperación de lesiones",
                        desc: "Protocolos de trabajo preventivo y rehabilitador"
                      },
                      { 
                        title: "Psicología deportiva aplicada",
                        desc: "Trabajo mental y motivacional para el rendimiento"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start group/item hover:bg-emerald-50 p-3 rounded-xl transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                          <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-emerald-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-green-400 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-teal-400 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Logros y Experiencia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Números que reflejan el compromiso con la excelencia deportiva
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
            {[
              { number: "100+", label: "Jugadores Entrenados", icon: Target },
              { number: "5+", label: "Años Experiencia", icon: Calendar },
              { number: "15+", label: "Certificaciones", icon: Award },
              { number: "98%", label: "Satisfacción", icon: Star }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-emerald-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section - Premium */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 text-white">
              <BookOpen className="h-5 w-5 text-yellow-400" />
              <span>Mi Filosofía de Entrenamiento</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Ciencia + Pasión = 
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                Resultados
              </span>
            </h2>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
              <blockquote className="text-xl md:text-2xl text-emerald-100 leading-relaxed italic">
                "Cada jugador es único, con sus propias fortalezas y áreas de mejora. 
                Mi enfoque se basa en la ciencia del deporte para crear programas que no solo 
                mejoren el rendimiento, sino que también respeten la individualidad de cada persona. 
                <span className="font-bold text-white not-italic">
                  El éxito viene de la combinación perfecta entre conocimiento científico y pasión por el fútbol.
                </span>"
              </blockquote>
              
              <div className="flex items-center justify-center mt-8 gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white font-bold">Manuel López</p>
                  <p className="text-emerald-200 text-sm">Especialista en Preparación Deportiva</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <ContactFormModal />
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-16 text-white">
            <path fill="currentColor" d="M0,32L40,37.3C80,43,160,53,240,58.7C320,64,400,64,480,58.7C560,53,640,43,720,42.7C800,43,880,53,960,58.7C1040,64,1120,64,1200,58.7C1280,53,1360,43,1400,37.3L1440,32L1440,120L1400,120C1360,120,1280,120,1200,120C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120L0,120Z"></path>
          </svg>
        </div>
      </section>
    </div>
  );
} 