import { Button } from "@/components/ui/button";
import { PlayCircle, Target, Trophy, Users, Star, ChevronRight, Zap, Award, CheckCircle2 } from "lucide-react";
import ContactFormModal from "@/components/ContactFormModal";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-green-600 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-300 rounded-full blur-2xl opacity-50"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-emerald-300 rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-32 left-20 w-3 h-3 bg-green-300 rounded-full animate-pulse opacity-50"></div>
          <div className="absolute top-60 right-40 w-2 h-2 bg-white rounded-full animate-ping opacity-30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-6xl mx-auto">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 text-white font-medium">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span>Entrenador Certificado CAFYD</span>
              <Award className="h-5 w-5 text-yellow-400" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              Lleva tu 
              <span className="bg-gradient-to-r from-yellow-400 via-emerald-400 to-green-300 bg-clip-text text-transparent block">
                FÚTBOL
              </span>
              al siguiente nivel
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-emerald-100 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Entrenamientos personalizados diseñados por un especialista graduado en CAFYD. 
              <span className="font-semibold text-white"> Transforma tu juego con ciencia deportiva de élite.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <ContactFormModal />
              <Link href="/mi-historia">
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="text-white border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/50 transition-all duration-300 group"
                >
                  <PlayCircle className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
                  Ver mi trayectoria
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "100+", label: "Jugadores Entrenados" },
                { number: "5+", label: "Años Experiencia" },
                { number: "98%", label: "Satisfacción" },
                { number: "24h", label: "Tiempo Respuesta" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-emerald-200 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
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

      {/* Features Section - Premium Cards */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Por qué entrenar conmigo?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología científica combinada con años de experiencia práctica
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Entrenamientos Personalizados",
                description: "Analizamos tus fortalezas y debilidades para crear rutinas específicas que potencien tu juego individual.",
                features: ["Análisis biomecánico", "Planes individualizados", "Seguimiento continuo"],
                color: "emerald"
              },
              {
                icon: Users,
                title: "Formación Profesional",
                description: "Graduado en CAFYD con máster en preparación deportiva. Experiencia respaldada por títulos oficiales.",
                features: ["Título CAFYD", "Máster especializado", "Certificaciones"],
                color: "green"
              },
              {
                icon: Trophy,
                title: "Resultados Garantizados",
                description: "Metodología probada que te ayudará a alcanzar tus objetivos deportivos de manera eficiente.",
                features: ["Método científico", "Resultados medibles", "Progreso visible"],
                color: "teal"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 relative overflow-hidden group-hover:scale-105">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`relative bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="relative text-2xl font-bold text-gray-900 mb-4 text-center">
                    {feature.title}
                  </h3>
                  
                  <p className="relative text-gray-600 mb-6 text-center leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="relative space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle2 className={`h-5 w-5 text-${feature.color}-500 mr-3 flex-shrink-0`} />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-emerald-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-green-400 rounded-full"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-teal-400 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tu camino hacia la excelencia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un proceso simple pero efectivo que te llevará al siguiente nivel
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Evaluación inicial",
                  description: "Analizamos tu nivel actual, objetivos y necesidades específicas"
                },
                {
                  step: "02", 
                  title: "Plan personalizado",
                  description: "Diseñamos un programa de entrenamiento único para ti"
                },
                {
                  step: "03",
                  title: "Seguimiento continuo",
                  description: "Monitorizamos tu progreso y ajustamos el plan según evoluciones"
                }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Design */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 text-white">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span>Transformación garantizada</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              ¿Listo para <span></span>
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
               destacar
              </span>
              ?
            </h2>
            
            <p className="text-xl md:text-2xl text-emerald-100 mb-10 leading-relaxed">
              Cuéntame sobre tu situación actual y tus objetivos. 
              <span className="font-semibold text-white">Te ayudo a crear un plan que realmente funcione.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ContactFormModal />
              <div className="text-emerald-200 text-sm">
                📞 Respuesta en menos de 24 horas
              </div>
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
