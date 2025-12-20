// ============================================
// GROW LABS - MULTILINGUAL TRANSLATIONS
// ============================================

const translations = {
    es: {
        nav: {
            about: "Nosotros",
            solutions: "Soluciones",
            clients: "Clientes",
            cta: "Agendar Demo"
        },
        hero: {
            title: "El Sistema Operativo Inteligente para tu Sanatorio",
            subtitle: "Automatización + Inteligencia Artificial + Gestión del Conocimiento. Elimina la fricción administrativa y maximiza tus ingresos con tecnología de clase mundial.",
            cta1: "Diagnóstico Gratuito",
            cta2: "Ver Soluciones",
            stat1: "Reducción de errores",
            stat2: "Más rápido",
            stat3: "Disponibilidad"
        },
        about: {
            tag: "Quiénes Somos",
            title: "Expertos en Tecnología para la Realidad Hospitalaria de LATAM",
            intro: "Grow Labs nace de la experiencia directa en la complejidad administrativa de hospitales y clínicas en Latinoamérica. Entendemos profundamente los desafíos de facturación, obras sociales, auditorías y la burocracia médica local. Nuestra misión es transformar esa fricción en eficiencia mediante tecnología de punta.",
            mission: {
                title: "Misión",
                text: "Eliminar la fricción administrativa para que los equipos de salud se enfoquen en lo que realmente importa: el paciente."
            },
            vision: {
                title: "Visión",
                text: "Ser el cerebro digital que impulsa las operaciones de salud en toda Latinoamérica."
            },
            values: {
                title: "Valores",
                text: "Precisión Operativa • Adaptación Local • Innovación Transparente"
            }
        },
        solutions: {
            tag: "Nuestras Soluciones",
            title: "Tecnología que Transforma Operaciones",
            tab1: "Automatizaciones",
            tab2: "RAG Institucional",
            tab3: "Aplicaciones Digitales",
            tab4: "Sistema Integral",
            tab5: "Análisis de Datos",
            cta: "💬 Chatea con nosotros",
            details: "Ver Detalle",
            impact_title: "Impacto Medible",
            automation: {
                title: "Módulos de Automatizaciones",
                description: "Elimina tareas repetitivas y propensas a errores. Nuestros módulos automatizan procesos administrativos complejos, reducen tiempos de gestión y liberan a tu equipo para que se enfoque en tareas de alto valor estratégico.",
                feature1: "Automatización de procesos administrativos complejos",
                feature2: "Reducción del 90% en tiempo de gestión manual",
                feature3: "Eliminación de errores humanos en tareas repetitivas",
                feature4: "Integración perfecta con sistemas existentes",
                hero: {
                    tag: "Detalle de Solución",
                    title: "Automatización de Procesos Administrativos",
                    subtitle: "Elimina tareas repetitivas, reduce errores humanos y libera a tu equipo para lo que realmente importa: la atención al paciente.",
                    cta: "Solicitar Auditoría de Procesos"
                },
                cards: {
                    card1: {
                        title: "🤖 Carga Automática de Facturas",
                        description: "Nuestro sistema procesa facturas de proveedores automáticamente, extrayendo datos clave (CAE, montos, fechas) e ingresándolos en tu ERP sin intervención humana."
                    },
                    card2: {
                        title: "📅 Gestión de Turnos por WhatsApp",
                        description: "Confirmación, re-programación y cancelación de turnos automática. Reduce el ausentismo hasta en un 40% y llena huecos de agenda al instante."
                    },
                    card3: {
                        title: "💰 Liquidación de Honorarios Médicos",
                        description: "Calcula automáticamente lo que corresponde a cada profesional según las reglas de negocio de tu institución, eliminando disputas y ahorrando días de trabajo administrativo."
                    }
                },
                stats: {
                    stat1: { value: "90%", label: "Reducción de tiempo en carga de datos" },
                    stat2: { value: "0%", label: "Errores de tipeo en facturación" },
                    stat3: { value: "+25%", label: "Recupero de horas hombre mensuales" }
                }
            },
            rag: {
                title: "RAG Institucional",
                description: "Tu base de conocimiento institucional potenciada por IA. Responde preguntas sobre protocolos, procesos y normativas al instante. Convierte años de documentación en respuestas precisas en segundos.",
                feature1: "Búsqueda instantánea en toda la documentación",
                feature2: "Respuestas contextualizadas con fuentes verificadas",
                feature3: "De horas de búsqueda a segundos de respuesta",
                feature4: "Actualización continua del conocimiento",
                hero: {
                    tag: "Detalle de Solución",
                    title: "RAG Institucional (Base de Conocimiento IA)",
                    subtitle: "Tu institución tiene miles de documentos y protocolos. RAG permite 'chatear' con ellos para obtener respuestas precisas en segundos.",
                    cta: "Ver Demo en Vivo"
                },
                cards: {
                    card1: {
                        title: "📚 Búsqueda Semántica de Protocolos",
                        description: "Los médicos y enfermeros pueden preguntar '¿Cuál es el protocolo para neumonía bacteriana?' y obtener la respuesta exacta basada en TU documentación interna, no en Google."
                    },
                    card2: {
                        title: "⚖️ Normativas y Vademécum",
                        description: "Acceso instantáneo a coberturas de obras sociales, vademécums actualizados y normativas institucionales. Reduce errores de facturación por desconocimiento de normas."
                    },
                    card3: {
                        title: "🚀 Onboarding de Personal",
                        description: "Acelera la capacitación de nuevos empleados permitiéndoles resolver sus dudas operativas interactuando con la IA de la institución."
                    }
                },
                stats: {
                    stat1: { value: "95%", label: "Más rápido encontrando información" },
                    stat2: { value: "100%", label: "Adherencia a protocolos actualizados" },
                    stat3: { value: "24/7", label: "Disponibilidad del conocimiento" }
                }
            },
            apps: {
                title: "Aplicaciones Digitales para el Sanatorio",
                description: "Suite completa de aplicaciones que conectan pacientes, médicos y administración en un ecosistema digital integrado. Mejora la experiencia del paciente, optimiza procesos quirúrgicos y potencia las consultas médicas con IA.",
                patient: {
                    title: "📱 Portal del Paciente",
                    description: "Conecta toda la documentación del paciente en un sitio de fácil acceso. Solicita turnos, consulta historias médicas y accede a información relevante. Incluye programa de fidelización para retener pacientes."
                },
                surgery: {
                    title: "🏥 Portal de Cirugía",
                    description: "Sistema integral que conecta cirujanos, pacientes y administración. Gestión ágil de turnos quirúrgicos, seguimiento de documentación pre-operatoria, indicaciones post-operatorias con IA médica (OpenEvidence), y optimización de quirófanos para eliminar tiempos muertos."
                },
                consultation: {
                    title: "💊 Portal de Consultas",
                    description: "Grabación automática de consultas que completa la historia clínica mientras el médico interactúa con el paciente. Potenciado con IA médica (OpenEvidence) para sugerir diagnósticos, cursos de acción e indicaciones precisas."
                },
                whatsapp: {
                    title: "💬 Chatbot de WhatsApp con IA",
                    description: "Chatbot inteligente que atiende a tus pacientes 24/7 como si fuera un humano. A diferencia de los chatbots tradicionales con árboles de opciones frustrantes, nuestro sistema usa IA conversacional para brindar atención personalizada, gestionar turnos y responder consultas con calidad y eficiencia excepcionales."
                },
                hero: {
                    tag: "Detalle de Solución",
                    title: "Aplicaciones Digitales (Apps)",
                    subtitle: "Conectamos pacientes, médicos y administrativos en un ecosistema fluido. Apps nativas y web para modernizar la experiencia de tu sanatorio.",
                    cta: "Ver Catálogo de Apps"
                },
                cards: {
                    card1: {
                        title: "📱 Portal del Paciente",
                        description: "Tus pacientes merecen accesibilidad. Turnos online, descarga de estudios, historial clínico y notificaciones automáticas en su bolsillo."
                    },
                    card2: {
                        title: "🏥 Portal de Cirugía",
                        description: "Gestión integral del bloque quirúrgico. Programación de cirugías, check-list de seguridad, documentación pre-quirúrgica y monitoreo de quirófanos en tiempo real."
                    },
                    card3: {
                        title: "🩺 Portal de Médicos",
                        description: "Acceso remoto a historias clínicas, agenda de turnos, liquidación de honorarios y comunicación directa con administración."
                    }
                },
                stats: {
                    stat1: { value: "+40%", label: "Retención de pacientes" },
                    stat2: { value: "30%", label: "Reducción de ausentismo en turnos" },
                    stat3: { value: "100%", label: "Trazabilidad en cirugías" }
                }
            },
            system: {
                title: "Sistema Integral para Hospitales",
                description: "La visión completa: conecta todas tus áreas operativas y clínicas en un ecosistema inteligente. Maximiza ingresos, elimina débitos y captura cada peso que tu institución merece.",
                feature1: "Integración total de áreas operativas y clínicas",
                feature2: "Eliminación de fugas en facturación",
                feature3: "Reducción drástica de débitos de obras sociales",
                feature4: "ROI medible y transparente",
                hero: {
                    tag: "Detalle de Solución",
                    title: "Sistema Integral (All-in-One)",
                    subtitle: "La transformación digital completa bajo un mismo techo. Centraliza, automatiza y optimiza cada aspecto de tu institución de salud.",
                    cta: "Consultar Plan Integral"
                },
                cards: {
                    card1: {
                        title: "📡 Interoperabilidad Total",
                        description: "Conecta tu HIS, LIS, RIS y PACS en una sola plataforma unificada. Elimina los silos de información y ten una visión 360 del paciente."
                    },
                    card2: {
                        title: "📊 Business Intelligence (BI)",
                        description: "Tableros de control en tiempo real para la dirección médica y administrativa. Toma decisiones basadas en datos reales de ocupación, facturación y costos."
                    },
                    card3: {
                        title: "🛡️ Seguridad y Auditoría",
                        description: "Trazabilidad completa de cada acción en el sistema. Cumplimiento de normas de privacidad de datos de salud y auditoría preventiva de facturación."
                    }
                },
                stats: {
                    stat1: { value: "360°", label: "Visión operativa" },
                    stat2: { value: "+15%", label: "Incremento en facturación neta" },
                    stat3: { value: "Total", label: "Control administrativo" }
                }
            },
            data_analytics: {
                title: "Análisis de Datos e Inteligencia de Negocios",
                description: "Transforma los datos generados por tu institución en ventajas competitivas. Detecta fugas financieras y asegura el cumplimiento de tus objetivos estratégicos.",
                feature1: "Detección de fugas financieras (ej: cirugías canceladas)",
                feature2: "Tableros de control de objetivos (KPIs y OKRs)",
                feature3: "Identificación de ventajas competitivas",
                feature4: "Toma de decisiones basada en evidencia",
                hero: {
                    tag: "Detalle de Solución",
                    title: "Análisis de Datos y BI",
                    subtitle: "Deja de conducir a ciegas. Visualiza fugas de dinero, optimiza recursos y alcanza tus objetivos estratégicos con datos reales.",
                    cta: "Ver Tableros de Ejemplo"
                },
                cards: {
                    card1: {
                        title: "📉 Detección de Fugas Financieras",
                        description: "Identifica exactamente cuánto dinero pierdes por cirugías canceladas, quirófanos ociosos o errores de facturación. Convierte pérdidas invisibles en ganancias recuperadas."
                    },
                    card2: {
                        title: "🎯 Seguimiento de Objetivos (OKRs)",
                        description: "No basta con operar, hay que crecer. Define metas claras para tu institución y monitorea su cumplimiento en tiempo real con tableros ejecutivos."
                    },
                    card3: {
                        title: "🧠 Ventaja Competitiva",
                        description: "Analiza tiempos de espera, satisfacción del paciente y rendimiento médico para destacar tu servicio por encima de la competencia."
                    }
                },
                stats: {
                    stat1: { value: "+20%", label: "Rentabilidad por optimización" },
                    stat2: { value: "100%", label: "Visibilidad financiera" },
                    stat3: { value: "Claridad", label: "En toma de decisiones" }
                }
            }
        },
        packages: {
            tag: "Nuestros Planes",
            title: "Escala tu Inteligencia Operativa",
            subtitle: "Soluciones adaptadas a cada etapa de crecimiento de tu institución.",
            cta: "Consultar Precio",
            level1: {
                title: "Eficiencia Operativa",
                subtitle: "Pacientes felices + Administración ágil",
                feature1: "Chatbot Inteligente IA 24/7",
                feature2: "Portal del Paciente (App)",
                feature3: "Automatización Carga Facturas",
                feature4: "Recordatorios Turnos WhatsApp"
            },
            level2: {
                title: "Gestión Médica 360",
                subtitle: "Médicos contentos + Procesos eficientes",
                feature1: "Todo lo del Nivel Eficiencia",
                feature2: "Liquidación Automática Honorarios",
                feature3: "Portal de Médicos",
                feature4: "Portal Cirugía y Consultas",
                feature5: "Soporte Prioritario"
            },
            level3: {
                title: "Inteligencia Financiera",
                subtitle: "Blindaje de ingresos + Protección inflación",
                feature1: "Todo lo del Nivel Gestión Médica",
                feature2: "Auditoría Preventiva (Anti-Débitos)",
                feature3: "Gestor Automático de Convenios",
                feature4: "Reportes de ROI en Tiempo Real",
                feature5: "Soporte VIP Dedicado"
            }
        },
        clients: {
            tag: "Nuestros Clientes",
            title: "Confían en nosotros instituciones líderes",
            testimonial1: "Grow Labs transformó completamente nuestra operación administrativa. Ahora capturamos el 100% de nuestras prestaciones.",
            author1: "Sergio Femenia",
            role1: "Gerente Administrativo",
            institution1: "Sanatorio Argentino",
            testimonial2: "El sistema de informes y reportes que desarrollaron para nuestros pacientes ha sido transformador. Ahora gestionamos todos los estudios de forma centralizada y la información le llega automáticamente al paciente, ahorrando tiempo y ganando eficiencia.",
            author2: "Dr. Mariano Luna",
            role2: "Cardiólogo",
            institution2: "Centro Médico de Especialidades"
        },
        cta: {
            title: "¿Listo para transformar tu institución?",
            text: "Agenda un diagnóstico gratuito y descubre cuánto puedes optimizar tus operaciones.",
            button1: "Agendar Diagnóstico Gratuito",
            button2: "Explorar Soluciones"
        },
        footer: {
            tagline: "El cerebro digital para instituciones de salud en LATAM",
            links: {
                title: "Enlaces",
                about: "Nosotros",
                solutions: "Soluciones",
                clients: "Clientes",
                demo: "Demo"
            },
            contact: {
                title: "Contacto"
            },
            legal: {
                title: "Legal",
                privacy: "Privacidad",
                terms: "Términos"
            },
            rights: "Todos los derechos reservados."
        }
    },
    en: {
        nav: {
            about: "About",
            solutions: "Solutions",
            clients: "Clients",
            cta: "Schedule Demo"
        },
        hero: {
            title: "The Intelligent Operating System for Your Healthcare Facility",
            subtitle: "Automation + Artificial Intelligence + Knowledge Management. Eliminate administrative friction and maximize your revenue with world-class technology.",
            cta1: "Free Assessment",
            cta2: "View Solutions",
            stat1: "Error reduction",
            stat2: "Faster",
            stat3: "Availability"
        },
        about: {
            tag: "About Us",
            title: "Technology Experts for LATAM's Healthcare Reality",
            intro: "Grow Labs was born from direct experience with the administrative complexity of hospitals and clinics in Latin America. We deeply understand the challenges of billing, insurance providers, audits, and local medical bureaucracy. Our mission is to transform that friction into efficiency through cutting-edge technology.",
            mission: {
                title: "Mission",
                text: "Eliminate administrative friction so healthcare teams can focus on what truly matters: the patient."
            },
            vision: {
                title: "Vision",
                text: "To be the digital brain that drives healthcare operations throughout Latin America."
            },
            values: {
                title: "Values",
                text: "Operational Precision • Local Adaptation • Transparent Innovation"
            }
        },
        solutions: {
            tag: "Our Solutions",
            title: "Technology that Transforms Operations",
            tab1: "Automation",
            tab2: "Institutional RAG",
            tab3: "Digital Applications",
            tab4: "Integrated System",
            tab5: "Data Analytics",
            cta: "💬 Chat with us",
            details: "View Details",
            impact_title: "Measurable Impact",
            automation: {
                title: "Automation Modules",
                description: "Eliminate repetitive and error-prone tasks. Our modules automate complex administrative processes, reduce management time, and free your team to focus on high-value strategic tasks.",
                feature1: "Automation of complex administrative processes",
                feature2: "90% reduction in manual management time",
                feature3: "Elimination of human errors in repetitive tasks",
                feature4: "Seamless integration with existing systems",
                hero: {
                    tag: "Solution Detail",
                    title: "Administrative Process Automation",
                    subtitle: "Eliminate repetitive tasks, reduce human errors, and free your team for what truly matters: patient care.",
                    cta: "Request Process Audit"
                },
                cards: {
                    card1: {
                        title: "🤖 Automatic Invoice Loading",
                        description: "Our system processes supplier invoices automatically, extracting key data (CAE, amounts, dates) and entering it into your ERP without human intervention."
                    },
                    card2: {
                        title: "📅 WhatsApp Appointment Management",
                        description: "Automatic confirmation, rescheduling, and cancellation. Reduces absenteeism by up to 40% and fills schedule gaps instantly."
                    },
                    card3: {
                        title: "💰 Medical Fee Settlement",
                        description: "Automatically calculates what corresponds to each professional according to your institution's business rules, eliminating disputes and saving days of administrative work."
                    }
                },
                stats: {
                    stat1: { value: "90%", label: "Reduction in data entry time" },
                    stat2: { value: "0%", label: "Typing errors in billing" },
                    stat3: { value: "+25%", label: "Recovery of monthly man-hours" }
                }
            },
            rag: {
                title: "Institutional RAG",
                description: "Your institutional knowledge base powered by AI. Answer questions about protocols, processes, and regulations instantly. Turn years of documentation into precise answers in seconds.",
                feature1: "Instant search across all documentation",
                feature2: "Contextualized answers with verified sources",
                feature3: "From hours of searching to seconds of response",
                feature4: "Continuous knowledge updates",
                hero: {
                    tag: "Solution Detail",
                    title: "Institutional RAG (AI Knowledge Base)",
                    subtitle: "Your institution has thousands of documents and protocols. RAG allows you to 'chat' with them to get precise answers in seconds.",
                    cta: "View Live Demo"
                },
                cards: {
                    card1: {
                        title: "📚 Semantic Protocol Search",
                        description: "Doctors and nurses can ask 'What is the protocol for bacterial pneumonia?' and get the exact answer based on YOUR internal documentation, not Google."
                    },
                    card2: {
                        title: "⚖️ Regulations & Formulary",
                        description: "Instant access to insurance coverage, updated formularies, and institutional regulations. Reduces billing errors due to lack of knowledge of rules."
                    },
                    card3: {
                        title: "🚀 Staff Onboarding",
                        description: "Accelerates new employee training by allowing them to resolve operational doubts by interacting with the institution's AI."
                    }
                },
                stats: {
                    stat1: { value: "95%", label: "Faster information retrieval" },
                    stat2: { value: "100%", label: "Adherence to updated protocols" },
                    stat3: { value: "24/7", label: "Knowledge availability" }
                }
            },
            apps: {
                title: "Digital Applications for Healthcare",
                description: "Complete suite of applications connecting patients, doctors, and administration in an integrated digital ecosystem. Improves patient experience, optimizes surgical processes, and enhances medical consultations with AI.",
                patient: {
                    title: "📱 Patient Portal",
                    description: "Connects all patient documentation in an easily accessible site. Request appointments, view medical records, and access relevant information. Includes loyalty program to retain patients."
                },
                surgery: {
                    title: "🏥 Surgery Portal",
                    description: "Comprehensive system connecting surgeons, patients, and administration. Agile surgical scheduling, pre-operative documentation tracking, post-operative instructions with medical AI (OpenEvidence), and operating room optimization to eliminate downtime."
                },
                consultation: {
                    title: "💊 Consultation Portal",
                    description: "Automatic consultation recording that completes medical records while the doctor interacts with the patient. Powered by medical AI (OpenEvidence) to suggest diagnoses, courses of action, and precise indications."
                },
                whatsapp: {
                    title: "💬 AI-Powered WhatsApp Chatbot",
                    description: "Intelligent chatbot that serves your patients 24/7 like a human would. Unlike traditional chatbots with frustrating option trees, our system uses conversational AI to provide personalized attention, manage appointments, and answer queries with exceptional quality and efficiency."
                },
                hero: {
                    tag: "Solution Detail",
                    title: "Digital Applications (Apps)",
                    subtitle: "We connect patients, doctors, and administrators in a fluid ecosystem. Native and web apps to modernize your sanatorium's experience.",
                    cta: "View App Catalog"
                },
                cards: {
                    card1: {
                        title: "📱 Patient Portal",
                        description: "Your patients deserve accessibility. Online appointments, study downloads, medical history, and automatic notifications in their pocket."
                    },
                    card2: {
                        title: "🏥 Surgery Portal",
                        description: "Comprehensive management of the surgical block. Surgery scheduling, safety checklists, pre-surgical documentation, and real-time operating room monitoring."
                    },
                    card3: {
                        title: "🩺 Doctor Portal",
                        description: "Remote access to medical records, appointment schedules, fee settlements, and direct communication with administration."
                    }
                },
                stats: {
                    stat1: { value: "+40%", label: "Patient retention" },
                    stat2: { value: "30%", label: "Reduction in appointment absenteeism" },
                    stat3: { value: "100%", label: "Traceability in surgeries" }
                }
            },
            system: {
                title: "Integrated Hospital System",
                description: "The complete vision: connect all your operational and clinical areas in an intelligent ecosystem. Maximize revenue, eliminate charge-backs, and capture every dollar your institution deserves.",
                feature1: "Total integration of operational and clinical areas",
                feature2: "Elimination of billing leaks",
                feature3: "Drastic reduction in insurance charge-backs",
                feature4: "Measurable and transparent ROI",
                hero: {
                    tag: "Solution Detail",
                    title: "Integrated System (All-in-One)",
                    subtitle: "Complete digital transformation under one roof. Centralize, automate, and optimize every aspect of your healthcare institution.",
                    cta: "Consult Integral Plan"
                },
                cards: {
                    card1: {
                        title: "📡 Total Interoperability",
                        description: "Connect your HIS, LIS, RIS, and PACS into a single unified platform. Eliminate information silos and have a 360 view of the patient."
                    },
                    card2: {
                        title: "📊 Business Intelligence (BI)",
                        description: "Real-time dashboards for medical and administrative direction. Make decisions based on real occupancy, billing, and cost data."
                    },
                    card3: {
                        title: "🛡️ Security & Audit",
                        description: "Complete traceability of every action in the system. Compliance with health data privacy regulations and preventive billing audit."
                    }
                },
                stats: {
                    stat1: { value: "360°", label: "Operational vision" },
                    stat2: { value: "+15%", label: "Increase in net billing" },
                    stat3: { value: "Total", label: "Administrative control" }
                }
            },
            data_analytics: {
                title: "Data Analytics & Business Intelligence",
                description: "Turn your institution's data into competitive advantages. Detect financial leaks and ensure strategic goal compliance.",
                feature1: "Financial leak detection (e.g., cancelled surgeries)",
                feature2: "Goal tracking dashboards (KPIs and OKRs)",
                feature3: "Competitive advantage identification",
                feature4: "Evidence-based decision making",
                hero: {
                    tag: "Solution Detail",
                    title: "Data Analytics & BI",
                    subtitle: "Stop driving blind. Visualize money leaks, optimize resources, and achieve your strategic goals with real data.",
                    cta: "View Example Dashboards"
                },
                cards: {
                    card1: {
                        title: "📉 Financial Leak Detection",
                        description: "Identify exactly how much money you lose from cancelled surgeries, idle operating rooms, or billing errors. Turn invisible losses into recovered profits."
                    },
                    card2: {
                        title: "🎯 Goal Tracking (OKRs)",
                        description: "It's not enough to operate; you must grow. Define clear goals for your institution and monitor compliance in real-time with executive dashboards."
                    },
                    card3: {
                        title: "🧠 Competitive Advantage",
                        description: "Analyze wait times, patient satisfaction, and medical performance to make your service stand out from the competition."
                    }
                },
                stats: {
                    stat1: { value: "+20%", label: "Profitability via optimization" },
                    stat2: { value: "100%", label: "Financial visibility" },
                    stat3: { value: "Clarity", label: "In decision making" }
                }
            }
        },
        packages: {
            tag: "Our Plans",
            title: "Scale Your Operational Intelligence",
            subtitle: "Solutions adapted to every stage of your institution's growth.",
            cta: "Check Price",
            level1: {
                title: "Operational Efficiency",
                subtitle: "Happy patients + Agile administration",
                feature1: "24/7 AI Intelligent Chatbot",
                feature2: "Patient Portal (App)",
                feature3: "Automated Invoice Upload",
                feature4: "WhatsApp Appointment Reminders",
                feature5: "Monthly Operativity Reports"
            },
            level2: {
                title: "Medical Management 360",
                subtitle: "Happy doctors + Efficient processes",
                feature1: "Everything in Efficiency Level",
                feature2: "Automatic Fee Settlement",
                feature3: "Doctor Portal",
                feature4: "Surgery & Consultation Portal",
                feature5: "BI Dashboards (Leaks & Cancellations)",
                feature6: "Priority Support"
            },
            level3: {
                title: "Financial Intelligence",
                subtitle: "Revenue shielding + Inflation protection",
                feature1: "Everything in Medical Management Level",
                feature2: "Preventive Audit (Anti-Debits)",
                feature3: "Automatic Agreement Manager",
                feature4: "Real-Time ROI Reports",
                feature5: "Strategic Goal Management (OKRs)",
                feature6: "dedicated VIP Support"
            }
        },
        clients: {
            tag: "Our Clients",
            title: "Trusted by leading institutions",
            testimonial1: "Grow Labs completely transformed our administrative operation. We now capture 100% of our services.",
            author1: "Sergio Femenia",
            role1: "Administrative Manager",
            institution1: "Sanatorio Argentino",
            testimonial2: "The reports and information system they developed for our patients has been transformative. We now manage all studies centrally and information reaches patients automatically, saving time and gaining efficiency.",
            author2: "Dr. Mariano Luna",
            role2: "Cardiologist",
            institution2: "Centro Médico de Especialidades"
        },
        cta: {
            title: "Ready to transform your institution?",
            text: "Schedule a free assessment and discover how much you can optimize your operations.",
            button1: "Schedule Free Assessment",
            button2: "Explore Solutions"
        },
        footer: {
            tagline: "The digital brain for healthcare institutions in LATAM",
            links: {
                title: "Links",
                about: "About",
                solutions: "Solutions",
                clients: "Clients",
                demo: "Demo"
            },
            contact: {
                title: "Contact"
            },
            legal: {
                title: "Legal",
                privacy: "Privacy",
                terms: "Terms"
            },
            rights: "All rights reserved."
        }
    },
    pt: {
        nav: {
            about: "Sobre Nós",
            solutions: "Soluções",
            clients: "Clientes",
            cta: "Agendar Demo"
        },
        hero: {
            title: "O Sistema Operacional Inteligente para seu Hospital",
            subtitle: "Automação + Inteligência Artificial + Gestão do Conhecimento. Elimine o atrito administrativo e maximize suas receitas com tecnologia de classe mundial.",
            cta1: "Diagnóstico Gratuito",
            cta2: "Ver Soluções",
            stat1: "Redução de erros",
            stat2: "Mais rápido",
            stat3: "Disponibilidade"
        },
        about: {
            tag: "Quem Somos",
            title: "Especialistas em Tecnologia para a Realidade Hospitalar da LATAM",
            intro: "A Grow Labs nasceu da experiência direta com a complexidade administrativa de hospitais e clínicas na América Latina. Compreendemos profundamente os desafios de faturamento, convênios, auditorias e a burocracia médica local. Nossa missão é transformar esse atrito em eficiência através de tecnologia de ponta.",
            mission: {
                title: "Missão",
                text: "Eliminar o atrito administrativo para que as equipes de saúde se concentrem no que realmente importa: o paciente."
            },
            vision: {
                title: "Visão",
                text: "Ser o cérebro digital que impulsiona as operações de saúde em toda a América Latina."
            },
            values: {
                title: "Valores",
                text: "Precisão Operacional • Adaptação Local • Inovação Transparente"
            }
        },
        solutions: {
            tag: "Nossas Soluções",
            title: "Tecnologia que Transforma Operações",
            tab1: "Automações",
            tab2: "RAG Institucional",
            tab3: "Aplicações Digitais",
            tab4: "Sistema Integral",
            tab5: "Análise de Dados",
            cta: "💬 Converse conosco",
            details: "Ver Detalhes",
            impact_title: "Impacto Mensurável",
            automation: {
                title: "Módulos de Automação",
                description: "Elimine tarefas repetitivas e propensas a erros. Nossos módulos automatizam processos administrativos complexos, reduzem tempos de gestão e liberam sua equipe para focar em tarefas de alto valor estratégico.",
                feature1: "Automação de processos administrativos complexos",
                feature2: "Redução de 90% no tempo de gestão manual",
                feature3: "Eliminação de erros humanos em tarefas repetitivas",
                feature4: "Integração perfeita com sistemas existentes",
                hero: {
                    tag: "Detalhe da Solução",
                    title: "Automação de Processos Administrativos",
                    subtitle: "Elimine tarefas repetitivas, reduza erros humanos e libere sua equipe para o que realmente importa: o atendimento ao paciente.",
                    cta: "Solicitar Auditoria de Processos"
                },
                cards: {
                    card1: {
                        title: "🤖 Carga Automática de Faturas",
                        description: "Nosso sistema processa faturas de fornecedores automaticamente, extraindo dados-chave e inserindo-os em seu ERP sem intervenção humana."
                    },
                    card2: {
                        title: "📅 Gestão de Consultas por WhatsApp",
                        description: "Confirmação, reagendamento e cancelamento automáticos. Reduz o absenteísmo em até 40% e preenche lacunas na agenda instantaneamente."
                    },
                    card3: {
                        title: "💰 Liquidação de Honorários Médicos",
                        description: "Calcula automaticamente o que corresponde a cada profissional segundo as regras de negócio de sua instituição, eliminando disputas e economizando dias de trabalho administrativo."
                    }
                },
                stats: {
                    stat1: { value: "90%", label: "Redução no tempo de carga de dados" },
                    stat2: { value: "0%", label: "Erros de digitação no faturamento" },
                    stat3: { value: "+25%", label: "Recuperação de horas-homem mensais" }
                }
            },
            rag: {
                title: "RAG Institucional",
                description: "Sua base de conhecimento institucional potencializada por IA. Responda perguntas sobre protocolos, processos e normas instantaneamente. Transforme anos de documentação em respostas precisas em segundos.",
                feature1: "Busca instantânea em toda a documentação",
                feature2: "Respostas contextualizadas com fontes verificadas",
                feature3: "De horas de busca para segundos de resposta",
                feature4: "Atualização contínua do conhecimento",
                hero: {
                    tag: "Detalhe da Solução",
                    title: "RAG Institucional (Base de Conhecimento IA)",
                    subtitle: "Sua instituição tem milhares de documentos e protocolos. O RAG permite 'conversar' com eles para obter respostas precisas em segundos.",
                    cta: "Ver Demo ao Vivo"
                },
                cards: {
                    card1: {
                        title: "📚 Busca Semântica de Protocolos",
                        description: "Médicos e enfermeiros podem perguntar 'Qual é o protocolo para pneumonia bacteriana?' e obter a resposta exata baseada na SUA documentação interna, não no Google."
                    },
                    card2: {
                        title: "⚖️ Normas e Vademecum",
                        description: "Acesso instantâneo a coberturas de convênios, vademecums atualizados e normas institucionais. Reduz erros de faturamento por desconhecimento de regras."
                    },
                    card3: {
                        title: "🚀 Onboarding de Pessoal",
                        description: "Acelera o treinamento de novos funcionários permitindo que resolvam suas dúvidas operacionais interagindo com a IA da instituição."
                    }
                },
                stats: {
                    stat1: { value: "95%", label: "Mais rápido encontrando informações" },
                    stat2: { value: "100%", label: "Adesão a protocolos atualizados" },
                    stat3: { value: "24/7", label: "Disponibilidade do conhecimento" }
                }
            },
            apps: {
                title: "Aplicações Digitais para o Hospital",
                description: "Suíte completa de aplicações que conectam pacientes, médicos e administração em um ecossistema digital integrado. Melhora a experiência do paciente, otimiza processos cirúrgicos e potencializa consultas médicas com IA.",
                patient: {
                    title: "📱 Portal do Paciente",
                    description: "Conecta toda a documentação do paciente em um site de fácil acesso. Solicite consultas, visualize prontuários médicos e acesse informações relevantes. Inclui programa de fidelização para reter pacientes."
                },
                surgery: {
                    title: "🏥 Portal de Cirurgia",
                    description: "Sistema integral que conecta cirurgiões, pacientes e administração. Gestão ágil de agendamentos cirúrgicos, acompanhamento de documentação pré-operatória, indicações pós-operatórias com IA médica (OpenEvidence), e otimização de salas cirúrgicas para eliminar tempos ociosos."
                },
                consultation: {
                    title: "💊 Portal de Consultas",
                    description: "Gravação automática de consultas que completa o prontuário médico enquanto o médico interage com o paciente. Potencializado com IA médica (OpenEvidence) para sugerir diagnósticos, cursos de ação e indicações precisas."
                },
                whatsapp: {
                    title: "💬 Chatbot de WhatsApp com IA",
                    description: "Chatbot inteligente que atende seus pacientes 24/7 como se fosse um humano. Ao contrário dos chatbots tradicionais com árvores de opções frustrantes, nosso sistema usa IA conversacional para fornecer atenção personalizada, gerenciar consultas e responder perguntas com qualidade e eficiência excepcionais."
                },
                hero: {
                    tag: "Detalhe da Solução",
                    title: "Aplicações Digitais (Apps)",
                    subtitle: "Conectamos pacientes, médicos e administração em um ecossistema fluido. Apps nativos e web para modernizar a experiência do seu hospital.",
                    cta: "Ver Catálogo de Apps"
                },
                cards: {
                    card1: {
                        title: "📱 Portal do Paciente",
                        description: "Seus pacientes merecem acessibilidade. Agendamentos online, download de exames, histórico médico e notificações automáticas no bolso."
                    },
                    card2: {
                        title: "🏥 Portal de Cirurgia",
                        description: "Gestão integral do bloco cirúrgico. Agendamento de cirurgias, checklist de segurança, documentação pré-cirúrgica e monitoramento de salas cirúrgicas em tempo real."
                    },
                    card3: {
                        title: "🩺 Portal do Médico",
                        description: "Acesso remoto a prontuários, agenda de consultas, liquidação de honorários e comunicação direta com a administração."
                    }
                },
                stats: {
                    stat1: { value: "+40%", label: "Retenção de pacientes" },
                    stat2: { value: "30%", label: "Redução de absenteísmo em consultas" },
                    stat3: { value: "100%", label: "Rastreabilidade em cirurgias" }
                }
            },
            system: {
                title: "Sistema Integral para Hospitais",
                description: "A visão completa: conecte todas as suas áreas operacionais e clínicas em um ecossistema inteligente. Maximize receitas, elimine glosas e capture cada real que sua instituição merece.",
                feature1: "Integração total de áreas operacionais e clínicas",
                feature2: "Eliminação de vazamentos no faturamento",
                feature3: "Redução drástica de glosas de convênios",
                feature4: "ROI mensurável e transparente",
                hero: {
                    tag: "Detalhe da Solução",
                    title: "Sistema Integral (All-in-One)",
                    subtitle: "A transformação digital completa sob o mesmo teto. Centralize, automatize e otimize cada aspecto de sua instituição de saúde.",
                    cta: "Consultar Plano Integral"
                },
                cards: {
                    card1: {
                        title: "📡 Interoperabilidade Total",
                        description: "Conecte seu HIS, LIS, RIS e PACS em uma única plataforma unificada. Elimine os silos de informações e tenha uma visão 360 do paciente."
                    },
                    card2: {
                        title: "📊 Business Intelligence (BI)",
                        description: "Painéis de controle em tempo real para a direção médica e administrativa. Tome decisões baseadas em dados reais de ocupação, faturamento e custos."
                    },
                    card3: {
                        title: "🛡️ Segurança e Auditoria",
                        description: "Rastreabilidade completa de cada ação no sistema. Conformidade com normas de privacidade de dados de saúde e auditoria preventiva de faturamento."
                    }
                },
                stats: {
                    stat1: { value: "360°", label: "Visão operacional" },
                    stat2: { value: "+15%", label: "Aumento no faturamento líquido" },
                    stat3: { value: "Total", label: "Controle administrativo" }
                }
            },
            data_analytics: {
                title: "Análise de Dados e Business Intelligence",
                description: "Transforme os dados gerados por sua instituição em vantagens competitivas. Detecte vazamentos financeiros e garanta o cumprimento de seus objetivos estratégicos.",
                feature1: "Detecção de vazamentos financeiros (ex: cirurgias canceladas)",
                feature2: "Painéis de controle de objetivos (KPIs e OKRs)",
                feature3: "Identificação de vantagens competitivas",
                feature4: "Tomada de decisão baseada em evidências",
                hero: {
                    tag: "Detalhe da Solução",
                    title: "Análise de Dados e BI",
                    subtitle: "Pare de dirigir às cegas. Visualize vazamentos de dinheiro, otimize recursos e alcance seus objetivos estratégicos com dados reais.",
                    cta: "Ver Painéis de Exemplo"
                },
                cards: {
                    card1: {
                        title: "📉 Detecção de Vazamentos Financeiros",
                        description: "Identifique exatamente quanto dinheiro você perde por cirurgias canceladas, salas de cirurgia ociosas ou erros de faturamento. Converta perdas invisíveis em lucros recuperados."
                    },
                    card2: {
                        title: "🎯 Monitoramento de Objetivos (OKRs)",
                        description: "Não basta operar, é preciso crescer. Defina metas claras para sua instituição e monitore o cumprimento em tempo real com painéis executivos."
                    },
                    card3: {
                        title: "🧠 Vantagem Competitiva",
                        description: "Analise tempos de espera, satisfação do paciente e desempenho médico para destacar seu serviço acima da concorrência."
                    }
                },
                stats: {
                    stat1: { value: "+20%", label: "Rentabilidade por otimização" },
                    stat2: { value: "100%", label: "Visibilidade financeira" },
                    stat3: { value: "Clareza", label: "Na tomada de decisões" }
                }
            }
        },
        packages: {
            tag: "Nossos Planos",
            title: "Escalando sua Inteligência Operacional",
            subtitle: "Soluções adaptadas a cada estágio de crescimento da sua instituição.",
            cta: "Consultar Preço",
            level1: {
                title: "Eficiência Operacional",
                subtitle: "Pacientes felizes + Administração ágil",
                feature1: "Chatbot Inteligente IA 24/7",
                feature2: "Portal do Paciente (App)",
                feature3: "Automação de Carga de Faturas",
                feature4: "Lembretes de Consultas WhatsApp",
                feature5: "Relatórios Mensais de Operatividade"
            },
            level2: {
                title: "Gestão Médica 360",
                subtitle: "Médicos felizes + Processos eficientes",
                feature1: "Tudo do Nível Eficiência",
                feature2: "Liquidação Automática de Honorários",
                feature3: "Portal do Médico",
                feature4: "Portal de Cirurgia e Consultas",
                feature5: "Painéis BI de Vazamentos e Cancelamentos",
                feature6: "Suporte Prioritário"
            },
            level3: {
                title: "Inteligência Financeira",
                subtitle: "Blindagem de receitas + Proteção contra inflação",
                feature1: "Tudo do Nível Gestão Médica",
                feature2: "Auditoria Preventiva (Anti-Débitos)",
                feature3: "Gestor Automático de Convênios",
                feature4: "Relatórios de ROI em Tempo Real",
                feature5: "Gestão Estratégica de Objetivos (OKRs)",
                feature6: "Suporte VIP Dedicado"
            }
        },
        clients: {
            tag: "Nossos Clientes",
            title: "Instituições líderes confiam em nós",
            testimonial1: "A Grow Labs transformou completamente nossa operação administrativa. Agora capturamos 100% de nossos atendimentos.",
            author1: "Sergio Femenia",
            role1: "Gerente Administrativo",
            institution1: "Sanatorio Argentino",
            testimonial2: "O sistema de relatórios e informações que desenvolveram para nossos pacientes foi transformador. Agora gerenciamos todos os estudos de forma centralizada e a informação chega automaticamente ao paciente, economizando tempo e ganhando eficiência.",
            author2: "Dr. Mariano Luna",
            role2: "Cardiologista",
            institution2: "Centro Médico de Especialidades"
        },
        cta: {
            title: "Pronto para transformar sua instituição?",
            text: "Agende um diagnóstico gratuito e descubra quanto você pode otimizar suas operações.",
            button1: "Agendar Diagnóstico Gratuito",
            button2: "Explorar Soluções"
        },
        footer: {
            tagline: "O cérebro digital para instituições de saúde na LATAM",
            links: {
                title: "Links",
                about: "Sobre Nós",
                solutions: "Soluções",
                clients: "Clientes",
                demo: "Demo"
            },
            contact: {
                title: "Contato"
            },
            legal: {
                title: "Legal",
                privacy: "Privacidade",
                terms: "Termos"
            },
            rights: "Todos os direitos reservados."
        }
    }
};

// Export as ES6 module
export default translations;

// Also make it available globally for compatibility
window.translations = translations;
