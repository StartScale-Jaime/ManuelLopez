"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Clock, User, CheckCircle, Mail, Phone, Target, Star, Sparkles, Zap, AlertCircle } from "lucide-react";

export default function ContactFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  // Form data state
  const [formData, setFormData] = useState({
    // Step 1 - Personal Info
    fullName: "",
    age: "",
    email: "",
    phone: "",
    
    // Step 2 - Football Info
    level: "",
    position: "",
    currentSituation: "",
    goals: "",
    
    // Step 3 - Contact Preferences
    timePreferences: [] as string[],
    contactMethod: ""
  });

  const updateFormData = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear validation errors when user starts typing
    if (validationErrors.length > 0) {
      setValidationErrors([]);
    }
  };

  const validateStep = (step: number): boolean => {
    const errors: string[] = [];

    switch (step) {
      case 1:
        if (!formData.fullName.trim()) errors.push("El nombre completo es obligatorio");
        if (!formData.email.trim()) errors.push("El email es obligatorio");
        if (!formData.phone.trim()) errors.push("El teléfono es obligatorio");
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          errors.push("El email debe tener un formato válido");
        }
        break;
      
      case 2:
        if (!formData.level) errors.push("El nivel de juego es obligatorio");
        if (!formData.currentSituation.trim()) errors.push("Describe tu situación actual");
        if (!formData.goals.trim()) errors.push("Describe tus objetivos");
        if (formData.currentSituation.trim().length < 20) {
          errors.push("Describe tu situación con más detalle (mínimo 20 caracteres)");
        }
        if (formData.goals.trim().length < 10) {
          errors.push("Describe tus objetivos con más detalle (mínimo 10 caracteres)");
        }
        break;
      
      case 3:
        if (formData.timePreferences.length === 0) errors.push("Selecciona al menos un horario");
        if (!formData.contactMethod) errors.push("Selecciona un método de contacto");
        break;
    }

    setValidationErrors(errors);
    return errors.length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    setValidationErrors([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setCurrentStep(1);
        setFormData({
          fullName: "",
          age: "",
          email: "",
          phone: "",
          level: "",
          position: "",
          currentSituation: "",
          goals: "",
          timePreferences: [],
          contactMethod: ""
        });
        setValidationErrors([]);
      }, 4000);
    }
  };

  const handleTimePreferenceChange = (value: string, checked: boolean) => {
    if (checked) {
      updateFormData("timePreferences", [...formData.timePreferences, value]);
    } else {
      updateFormData("timePreferences", formData.timePreferences.filter(pref => pref !== value));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="football" size="xl" className="shadow-2xl relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Sparkles className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
          <span className="relative z-10">Quiero mejorar mi juego</span>
          <Zap className="ml-3 h-6 w-6 group-hover:-rotate-12 transition-transform" />
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto border-none bg-gradient-to-br from-white via-emerald-50/30 to-green-50/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-lg"></div>
        <div className="relative z-10">
          <DialogHeader className="relative">
            {/* Background decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-xl"></div>
            <div className="absolute -top-2 -right-6 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-lg"></div>
            
            <DialogTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent text-center relative z-10">
              {isSubmitted ? (
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="h-10 w-10 text-emerald-500" />
                  ¡Formulario enviado!
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Star className="h-8 w-8 text-yellow-500 fill-current" />
                    <span>Transformemos tu juego</span>
                    <Star className="h-8 w-8 text-yellow-500 fill-current" />
                  </div>
                  <p className="text-lg font-normal text-gray-600">
                    Cuéntame sobre ti y diseñemos tu plan personalizado
                  </p>
                </div>
              )}
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-8">
            {isSubmitted ? (
              <div className="text-center py-16 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl opacity-50"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-6 shadow-lg">
                    <CheckCircle className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    ¡Excelente decisión! 🚀
                  </h3>
                  <div className="space-y-3 max-w-md mx-auto">
                    <p className="text-gray-700 font-medium">
                      He recibido tu información y estoy emocionado por ayudarte
                    </p>
                    <div className="bg-white/70 rounded-xl p-4 backdrop-blur-sm">
                      <p className="text-emerald-700 font-semibold text-lg">
                        📞 Te contactaré en las próximas 24 horas
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        Prepararé algunas ideas específicas para tu caso
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>Esta ventana se cerrará automáticamente...</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative">
                {/* Validation Errors */}
                {validationErrors.length > 0 && (
                  <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-red-800 font-semibold mb-2">Por favor, corrige estos errores:</h4>
                        <ul className="space-y-1">
                          {validationErrors.map((error, index) => (
                            <li key={index} className="text-red-700 text-sm">• {error}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                          currentStep >= step 
                            ? 'bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg' 
                            : 'bg-gray-200 text-gray-500'
                        }`}>
                          {step}
                        </div>
                        {step < 3 && (
                          <div className={`w-20 h-1 mx-2 rounded-full transition-all duration-300 ${
                            currentStep > step ? 'bg-emerald-500' : 'bg-gray-200'
                          }`}></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <span className="text-sm font-medium text-gray-600">
                      Paso {currentStep} de 3: {
                        currentStep === 1 ? 'Información personal' :
                        currentStep === 2 ? 'Tu fútbol actual' :
                        'Preferencias de contacto'
                      }
                    </span>
                  </div>
                </div>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* Step 1: Personal Info */}
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-in slide-in-from-right duration-300">
                      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100">
                        <div className="flex items-center space-x-3 text-emerald-600 mb-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                            <User className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold">Información Personal</h3>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Nombre completo *
                            </label>
                            <input
                              type="text"
                              value={formData.fullName}
                              onChange={(e) => updateFormData("fullName", e.target.value)}
                              className={`w-full px-4 py-3 bg-white/80 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 ${
                                validationErrors.some(error => error.includes("nombre")) ? 'border-red-300' : 'border-gray-200'
                              }`}
                              placeholder="Tu nombre y apellidos"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Edad
                            </label>
                            <input
                              type="number"
                              value={formData.age}
                              onChange={(e) => updateFormData("age", e.target.value)}
                              className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                              placeholder="Ej: 22"
                              min="12"
                              max="50"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              <Mail className="inline h-4 w-4 mr-2" />
                              Email *
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => updateFormData("email", e.target.value)}
                              className={`w-full px-4 py-3 bg-white/80 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 ${
                                validationErrors.some(error => error.includes("email")) ? 'border-red-300' : 'border-gray-200'
                              }`}
                              placeholder="tu@email.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              <Phone className="inline h-4 w-4 mr-2" />
                              Teléfono *
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => updateFormData("phone", e.target.value)}
                              className={`w-full px-4 py-3 bg-white/80 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 ${
                                validationErrors.some(error => error.includes("teléfono")) ? 'border-red-300' : 'border-gray-200'
                              }`}
                              placeholder="+34 123 456 789"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Football Info */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-in slide-in-from-right duration-300">
                      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100">
                        <div className="flex items-center space-x-3 text-emerald-600 mb-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                            <Target className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold">Sobre tu fútbol</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Nivel actual *
                            </label>
                            <select 
                              value={formData.level}
                              onChange={(e) => updateFormData("level", e.target.value)}
                              className={`w-full px-4 py-3 bg-white/80 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 ${
                                validationErrors.some(error => error.includes("nivel")) ? 'border-red-300' : 'border-gray-200'
                              }`}
                            >
                              <option value="">Selecciona tu nivel</option>
                              <option value="amateur">🥅 Amateur / Recreativo</option>
                              <option value="federado">⚽ Federado / Liga local</option>
                              <option value="semi-pro">🏆 Semi-profesional</option>
                              <option value="profesional">👑 Profesional</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Posición principal
                            </label>
                            <select 
                              value={formData.position}
                              onChange={(e) => updateFormData("position", e.target.value)}
                              className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                            >
                              <option value="">Selecciona tu posición</option>
                              <option value="portero">🧤 Portero</option>
                              <option value="defensa">🛡️ Defensa</option>
                              <option value="centrocampista">⚙️ Centrocampista</option>
                              <option value="extremo">⚡ Extremo</option>
                              <option value="delantero">🎯 Delantero</option>
                            </select>
                          </div>
                        </div>

                        <div className="mt-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Describe tu situación actual y qué quieres mejorar *
                          </label>
                          <textarea
                            value={formData.currentSituation}
                            onChange={(e) => updateFormData("currentSituation", e.target.value)}
                            className={`w-full px-4 py-3 bg-white/80 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 h-32 resize-none ${
                              validationErrors.some(error => error.includes("situación")) ? 'border-red-300' : 'border-gray-200'
                            }`}
                            placeholder="Ej: Juego en tercera división. Quiero mejorar mi velocidad y precisión en el pase. Siento que me falta explosividad en los sprints..."
                          ></textarea>
                          <div className="text-right text-xs text-gray-500 mt-1">
                            {formData.currentSituation.length}/20 caracteres mínimo
                          </div>
                        </div>

                        <div className="mt-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            ¿Cuáles son tus objetivos principales? *
                          </label>
                          <textarea
                            value={formData.goals}
                            onChange={(e) => updateFormData("goals", e.target.value)}
                            className={`w-full px-4 py-3 bg-white/80 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 h-24 resize-none ${
                              validationErrors.some(error => error.includes("objetivos")) ? 'border-red-300' : 'border-gray-200'
                            }`}
                            placeholder="Ej: Subir de categoría, mejorar mi técnica individual, ganar más confianza en el campo..."
                          ></textarea>
                          <div className="text-right text-xs text-gray-500 mt-1">
                            {formData.goals.length}/10 caracteres mínimo
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Contact Preferences */}
                  {currentStep === 3 && (
                    <div className="space-y-6 animate-in slide-in-from-right duration-300">
                      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-100">
                        <div className="flex items-center space-x-3 text-emerald-600 mb-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                            <Calendar className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold">Preferencias de contacto</h3>
                        </div>

                        <div className="mb-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-4">
                            ¿Cuándo prefieres que te contacte? *
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { value: "morning", label: "🌅 Mañanas (9-12h)" },
                              { value: "afternoon", label: "☀️ Tardes (12-18h)" },
                              { value: "evening", label: "🌆 Noches (18-21h)" },
                              { value: "weekend", label: "🏖️ Fines de semana" }
                            ].map((time) => (
                              <label key={time.value} className={`flex items-center space-x-3 p-3 bg-white/60 rounded-xl hover:bg-white/80 transition-colors cursor-pointer border ${
                                validationErrors.some(error => error.includes("horario")) ? 'border-red-300' : 'border-gray-100'
                              }`}>
                                <input 
                                  type="checkbox" 
                                  checked={formData.timePreferences.includes(time.value)}
                                  onChange={(e) => handleTimePreferenceChange(time.value, e.target.checked)}
                                  className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" 
                                />
                                <span className="text-sm font-medium">{time.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-4">
                            ¿Cómo prefieres que te contacte? *
                          </label>
                          <div className="space-y-3">
                            {[
                              { value: "whatsapp", label: "💬 WhatsApp", desc: "Respuesta rápida y cómoda" },
                              { value: "call", label: "📞 Llamada telefónica", desc: "Conversación directa" },
                              { value: "email", label: "📧 Email", desc: "Información detallada por escrito" }
                            ].map((method) => (
                              <label key={method.value} className={`flex items-center space-x-4 p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-colors cursor-pointer border group ${
                                validationErrors.some(error => error.includes("método")) ? 'border-red-300' : 'border-gray-100'
                              }`}>
                                <input 
                                  type="radio" 
                                  name="contact_method" 
                                  value={method.value}
                                  checked={formData.contactMethod === method.value}
                                  onChange={(e) => updateFormData("contactMethod", e.target.value)}
                                  className="text-emerald-600 focus:ring-emerald-500" 
                                />
                                <div>
                                  <span className="font-medium text-gray-900">{method.label}</span>
                                  <p className="text-sm text-gray-600">{method.desc}</p>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center pt-8">
                    <div>
                      {currentStep > 1 && (
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={prevStep}
                          className="bg-white/80 hover:bg-white"
                        >
                          ← Anterior
                        </Button>
                      )}
                    </div>
                    
                    <div className="flex gap-3">
                      {currentStep < 3 ? (
                        <Button 
                          type="button" 
                          variant="football" 
                          onClick={nextStep}
                          className="shadow-lg"
                        >
                          Siguiente →
                        </Button>
                      ) : (
                        <Button 
                          type="submit" 
                          variant="football" 
                          size="lg" 
                          className="shadow-lg relative group overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <Clock className="mr-2 h-5 w-5" />
                          <span className="relative">Enviar y programar mi consulta</span>
                          <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                        </Button>
                      )}
                    </div>
                  </div>

                  {currentStep === 3 && (
                    <div className="text-center mt-4">
                      <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                        <CheckCircle className="h-4 w-4" />
                        Te contactaré en las próximas 24 horas
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 