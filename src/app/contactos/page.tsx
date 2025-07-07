import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, MessageCircle, MapPin, Clock, Star, Globe, Send, CheckCircle, Sparkles, Zap, Calendar } from "lucide-react";
import ContactFormModal from "@/components/ContactFormModal";

export default function Contactos() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-emerald-900 to-green-800 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-teal-400 rounded-full blur-3xl opacity-40"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-16 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
          <div className="absolute top-48 right-24 w-1 h-1 bg-emerald-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-20 w-3 h-3 bg-teal-300 rounded-full animate-pulse opacity-70"></div>
          <div className="absolute top-60 right-1/3 w-2 h-2 bg-white rounded-full animate-ping opacity-50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-6xl mx-auto">
            
            {/* Header with badge */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 text-white font-medium">
                <Send className="h-5 w-5 text-blue-400" />
                <span>Contacto Directo</span>
                <CheckCircle className="h-5 w-5 text-emerald-400" />
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
                Hablemos de tu
                <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent block">
                  ENTRENAMIENTO
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 leading-relaxed max-w-4xl mx-auto font-light">
                Estoy aquí para ayudarte a alcanzar tus objetivos. 
                <span className="font-semibold text-white">Elige la forma que más te convenga para contactarme.</span>
              </p>
            </div>

            {/* Quick CTA */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 md:p-12 text-center shadow-2xl mb-16">
              <div className="inline-flex items-center gap-3 text-yellow-400 mb-6">
                <Star className="h-8 w-8 fill-current" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  ¿Quieres empezar ya?
                </h2>
                <Star className="h-8 w-8 fill-current" />
              </div>
              <p className="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed">
                Rellena el formulario personalizado y te contactaré para programar nuestra primera charla
              </p>
              <ContactFormModal />
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

      {/* Contact Methods Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Métodos de Contacto
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Múltiples formas de conectar conmigo para comenzar tu transformación
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Direct Contact */}
            <div className="group relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 relative overflow-hidden group-hover:scale-105">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Contacto Directo</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <a 
                      href="mailto:manuel.lopez@footimproveness.com"
                      className="flex items-center p-4 rounded-2xl border-2 border-gray-100 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group/item"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">Email Profesional</p>
                        <p className="text-blue-600 font-medium">manuel.lopez@footimproveness.com</p>
                        <p className="text-gray-500 text-sm">Respuesta en 2-4 horas</p>
                      </div>
                    </a>

                    <a 
                      href="tel:+34123456789"
                      className="flex items-center p-4 rounded-2xl border-2 border-gray-100 hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300 group/item"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">Teléfono Directo</p>
                        <p className="text-emerald-600 font-medium">+34 123 456 789</p>
                        <p className="text-gray-500 text-sm">Llamadas en horario laboral</p>
                      </div>
                    </a>

                    <div className="flex items-center p-4 rounded-2xl border-2 border-gray-100 bg-gray-50">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">Ubicación</p>
                        <p className="text-gray-600 font-medium">Madrid, España</p>
                        <p className="text-gray-500 text-sm">Entrenamientos presenciales disponibles</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="group relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 relative overflow-hidden group-hover:scale-105">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Redes Sociales</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <a 
                      href="https://instagram.com/footimproveness"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-2xl border-2 border-gray-100 hover:border-pink-300 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 group/item"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300">
                        <Instagram className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">Instagram</p>
                        <p className="text-pink-600 font-medium">@footimproveness</p>
                        <p className="text-gray-500 text-sm">Ejercicios y consejos diarios</p>
                      </div>
                    </a>

                    <a 
                      href="https://wa.me/34123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-2xl border-2 border-gray-100 hover:border-green-300 hover:bg-green-50 transition-all duration-300 group/item relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 group-hover/item:scale-110 transition-transform duration-300 relative z-10">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <div className="relative z-10">
                        <p className="font-bold text-gray-900 text-lg">WhatsApp Business</p>
                        <p className="text-green-600 font-medium">+34 123 456 789</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-gray-500 text-sm">Respuesta rápida</span>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-600 text-xs font-medium">Online</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-emerald-400 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-teal-400 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Availability Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Clock className="h-4 w-4" />
                  <span>Horarios de Atención</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Disponibilidad de Contacto
                </h3>
                <p className="text-gray-600 text-lg">
                  Horarios optimizados para la mejor atención personalizada
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6 border border-blue-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-xl flex items-center justify-center mr-3">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg">Lunes a Viernes</h4>
                  </div>
                  <p className="text-2xl font-bold text-blue-600 mb-2">9:00 - 20:00</p>
                  <p className="text-gray-600 text-sm">Horario principal de atención</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-3">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg">Sábados</h4>
                  </div>
                  <p className="text-2xl font-bold text-emerald-600 mb-2">9:00 - 14:00</p>
                  <p className="text-gray-600 text-sm">Horario reducido de fin de semana</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600 rounded-2xl p-6 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Zap className="h-6 w-6 text-yellow-400" />
                    <h4 className="text-xl font-bold">Respuesta Garantizada</h4>
                    <Sparkles className="h-6 w-6 text-yellow-400" />
                  </div>
                  <p className="text-lg mb-2">
                    ⚡ Tiempo de respuesta promedio: <span className="font-bold">2-4 horas</span>
                  </p>
                  <p className="text-blue-100 text-sm">
                    En horario laboral. Los mensajes fuera de horario se responden al día siguiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 text-white">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span>Primer Paso hacia la Excelencia</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              ¿Preparado para el <span></span>
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                cambio
              </span>
              ?
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              No esperes más. Cada día que pasa es una oportunidad perdida de mejorar.
              <span className="font-semibold text-white block mt-2">
                Contacta conmigo hoy y empecemos a trabajar en tu transformación.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ContactFormModal />
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <CheckCircle className="h-4 w-4" />
                <span>Primera consulta gratuita</span>
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