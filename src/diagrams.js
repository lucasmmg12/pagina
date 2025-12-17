// ============================================
// GROW LABS - INTERACTIVE SVG DIAGRAMS
// ============================================

// Workflow Optimization Diagram (Before/After)
function createWorkflowDiagram() {
    const container = document.getElementById('workflow-diagram');
    if (!container) return;

    const svg = `
        <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#FF6B6B;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FF8E8E;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#22C55E;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#10B981;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.15"/>
                </filter>
            </defs>
            
            <!-- Title -->
            <text x="400" y="30" font-family="Inter" font-size="20" font-weight="700" fill="#1F2937" text-anchor="middle">
                Optimización de Flujo de Trabajo
            </text>
            
            <!-- BEFORE Section -->
            <g id="before-section">
                <text x="200" y="70" font-family="Inter" font-size="16" font-weight="600" fill="#FF6B6B" text-anchor="middle">
                    ANTES
                </text>
                
                <!-- Chaotic workflow -->
                <g class="workflow-step">
                    <circle cx="100" cy="120" r="30" fill="url(#grad-red)" filter="url(#shadow)"/>
                    <text x="100" y="125" font-family="Inter" font-size="24" fill="#fff" text-anchor="middle">😰</text>
                </g>
                
                <!-- Bottleneck 1 -->
                <path d="M 130 120 L 170 120" stroke="#FF6B6B" stroke-width="3" stroke-dasharray="5,5" fill="none">
                    <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
                </path>
                <circle cx="190" cy="120" r="8" fill="#FFB800"/>
                
                <g class="workflow-step">
                    <rect x="170" y="160" width="60" height="50" rx="8" fill="url(#grad-red)" filter="url(#shadow)"/>
                    <text x="200" y="190" font-family="Inter" font-size="28" fill="#fff" text-anchor="middle">📄</text>
                </g>
                
                <!-- Bottleneck 2 -->
                <path d="M 230 120 L 270 120" stroke="#FF6B6B" stroke-width="3" stroke-dasharray="5,5" fill="none">
                    <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
                </path>
                <circle cx="250" cy="140" r="8" fill="#FFB800"/>
                
                <g class="workflow-step">
                    <circle cx="300" cy="120" r="30" fill="url(#grad-red)" filter="url(#shadow)"/>
                    <text x="300" y="125" font-family="Inter" font-size="24" fill="#fff" text-anchor="middle">⏱️</text>
                </g>
                
                <!-- Error indicator -->
                <path d="M 200 240 L 200 270" stroke="#FF6B6B" stroke-width="2" marker-end="url(#arrowred)"/>
                <text x="200" y="290" font-family="Inter" font-size="12" fill="#FF6B6B" text-anchor="middle" font-weight="600">
                    Errores frecuentes
                </text>
            </g>
            
            <!-- Arrow between sections -->
            <g id="transformation-arrow">
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#22C55E" />
                    </marker>
                </defs>
                <path d="M 350 200 L 450 200" stroke="#22C55E" stroke-width="4" marker-end="url(#arrowhead)" fill="none">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite"/>
                </path>
                <circle cx="400" cy="200" r="25" fill="#22C55E">
                    <animate attributeName="r" values="25;28;25" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <text x="400" y="207" font-family="Inter" font-size="20" fill="#fff" text-anchor="middle">AI</text>
            </g>
            
            <!-- AFTER Section -->
            <g id="after-section">
                <text x="600" y="70" font-family="Inter" font-size="16" font-weight="600" fill="#00D4AA" text-anchor="middle">
                    DESPUÉS
                </text>
                
                <!-- Smooth workflow -->
                <g class="workflow-step">
                    <circle cx="500" cy="120" r="30" fill="url(#grad-green)" filter="url(#shadow)"/>
                    <text x="500" y="125" font-family="Inter" font-size="24" fill="#fff" text-anchor="middle">😊</text>
                </g>
                
                <path d="M 530 120 L 570 120" stroke="#00D4AA" stroke-width="3" fill="none">
                    <animate attributeName="stroke-dashoffset" from="0" to="10" dur="0.5s" repeatCount="indefinite"/>
                </path>
                
                <g class="workflow-step">
                    <rect x="570" y="95" width="60" height="50" rx="8" fill="url(#grad-green)" filter="url(#shadow)"/>
                    <text x="600" y="125" font-family="Inter" font-size="28" fill="#fff" text-anchor="middle">⚡</text>
                </g>
                
                <path d="M 630 120 L 670 120" stroke="#00D4AA" stroke-width="3" fill="none">
                    <animate attributeName="stroke-dashoffset" from="0" to="10" dur="0.5s" repeatCount="indefinite"/>
                </path>
                
                <g class="workflow-step">
                    <circle cx="700" cy="120" r="30" fill="url(#grad-green)" filter="url(#shadow)"/>
                    <text x="700" y="125" font-family="Inter" font-size="24" fill="#fff" text-anchor="middle">✓</text>
                </g>
                
                <!-- Success indicator -->
                <path d="M 600 240 L 600 270" stroke="#00D4AA" stroke-width="2"/>
                <text x="600" y="290" font-family="Inter" font-size="12" fill="#00D4AA" text-anchor="middle" font-weight="600">
                    100% Automatizado
                </text>
            </g>
            
            <!-- Stats -->
            <g id="stats">
                <rect x="50" y="330" width="700" height="50" rx="8" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
                <text x="150" y="360" font-family="Inter" font-size="14" fill="#6B7280" text-anchor="middle">
                    <tspan font-weight="700" fill="#22C55E">85%</tspan> menos errores
                </text>
                <text x="400" y="360" font-family="Inter" font-size="14" fill="#6B7280" text-anchor="middle">
                    <tspan font-weight="700" fill="#22C55E">10x</tspan> más rápido
                </text>
                <text x="650" y="360" font-family="Inter" font-size="14" fill="#6B7280" text-anchor="middle">
                    <tspan font-weight="700" fill="#22C55E">24/7</tspan> disponible
                </text>
            </g>
        </svg>
    `;

    container.innerHTML = svg;
}

// Time Comparison Diagram (Traditional vs RAG)
function createTimeComparisonDiagram() {
    const container = document.getElementById('time-comparison');
    if (!container) return;

    const svg = `
        <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad-slow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#FF6B6B;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FF8E8E;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="grad-fast" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#00D4AA;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#00FFD1;stop-opacity:1" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            
            <!-- Title -->
            <text x="400" y="30" font-family="Inter" font-size="20" font-weight="700" fill="#1F2937" text-anchor="middle">
                Recuperación de Conocimiento en Segundos
            </text>
            
            <!-- Traditional Search -->
            <g id="traditional-search">
                <text x="200" y="80" font-family="Inter" font-size="16" font-weight="600" fill="#FF6B6B" text-anchor="middle">
                    Búsqueda Tradicional
                </text>
                
                <!-- Person searching -->
                <circle cx="200" cy="140" r="40" fill="#F3F4F6" stroke="#FF6B6B" stroke-width="3"/>
                <text x="200" y="150" font-family="Inter" font-size="36" text-anchor="middle">🔍</text>
                
                <!-- File cabinets -->
                <g transform="translate(150, 200)">
                    <rect x="0" y="0" width="30" height="40" rx="4" fill="#D1D5DB"/>
                    <rect x="35" y="0" width="30" height="40" rx="4" fill="#D1D5DB"/>
                    <rect x="70" y="0" width="30" height="40" rx="4" fill="#D1D5DB"/>
                    <line x1="5" y1="15" x2="25" y2="15" stroke="#9CA3AF" stroke-width="2"/>
                    <line x1="40" y1="15" x2="60" y2="15" stroke="#9CA3AF" stroke-width="2"/>
                    <line x1="75" y1="15" x2="95" y2="15" stroke="#9CA3AF" stroke-width="2"/>
                </g>
                
                <!-- Time indicator -->
                <rect x="130" y="270" width="140" height="60" rx="12" fill="url(#grad-slow)" filter="url(#shadow)"/>
                <text x="200" y="295" font-family="Inter" font-size="14" font-weight="600" fill="#fff" text-anchor="middle">
                    Tiempo de búsqueda:
                </text>
                <text x="200" y="320" font-family="Inter" font-size="28" font-weight="800" fill="#fff" text-anchor="middle">
                    2-4 horas
                </text>
                
                <!-- Clock animation -->
                <g transform="translate(200, 360)">
                    <circle cx="0" cy="0" r="20" fill="none" stroke="#FF6B6B" stroke-width="2"/>
                    <line x1="0" y1="0" x2="0" y2="-12" stroke="#FF6B6B" stroke-width="2">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="4s" repeatCount="indefinite"/>
                    </line>
                    <line x1="0" y1="0" x2="8" y2="0" stroke="#FF6B6B" stroke-width="2">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="60s" repeatCount="indefinite"/>
                    </line>
                </g>
            </g>
            
            <!-- VS Divider -->
            <g id="vs-divider">
                <line x1="400" y1="100" x2="400" y2="350" stroke="#E5E7EB" stroke-width="2" stroke-dasharray="5,5"/>
                <circle cx="400" cy="200" r="30" fill="#22C55E"/>
                <text x="400" y="210" font-family="Inter" font-size="18" font-weight="700" fill="#fff" text-anchor="middle">VS</text>
            </g>
            
            <!-- RAG Search -->
            <g id="rag-search">
                <text x="600" y="80" font-family="Inter" font-size="16" font-weight="600" fill="#00D4AA" text-anchor="middle">
                    Búsqueda con Grow RAG
                </text>
                
                <!-- Chat interface -->
                <rect x="520" y="110" width="160" height="100" rx="12" fill="#fff" stroke="#00D4AA" stroke-width="2"/>
                <rect x="530" y="120" width="140" height="30" rx="6" fill="#F3F4F6"/>
                <text x="600" y="140" font-family="Inter" font-size="12" fill="#6B7280" text-anchor="middle">
                    ¿Cuál es el protocolo...?
                </text>
                
                <!-- AI Response -->
                <rect x="530" y="160" width="140" height="40" rx="6" fill="#E6FFF9"/>
                <text x="600" y="175" font-family="Inter" font-size="10" fill="#00D4AA" text-anchor="middle" font-weight="600">
                    Respuesta instantánea:
                </text>
                <text x="600" y="190" font-family="Inter" font-size="9" fill="#374151" text-anchor="middle">
                    El protocolo indica que...
                </text>
                
                <!-- AI Icon -->
                <circle cx="600" cy="140" r="15" fill="#22C55E" filter="url(#glow)">
                    <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite"/>
                </circle>
                <text x="600" y="145" font-family="Inter" font-size="12" fill="#fff" text-anchor="middle" font-weight="700">AI</text>
                
                <!-- Time indicator -->
                <rect x="530" y="270" width="140" height="60" rx="12" fill="url(#grad-fast)" filter="url(#shadow)"/>
                <text x="600" y="295" font-family="Inter" font-size="14" font-weight="600" fill="#fff" text-anchor="middle">
                    Tiempo de búsqueda:
                </text>
                <text x="600" y="320" font-family="Inter" font-size="28" font-weight="800" fill="#fff" text-anchor="middle">
                    3-5 seg
                </text>
                
                <!-- Speedometer -->
                <g transform="translate(600, 360)">
                    <path d="M -20 0 A 20 20 0 0 1 20 0" fill="none" stroke="#00D4AA" stroke-width="3"/>
                    <line x1="0" y1="0" x2="15" y2="-10" stroke="#00D4AA" stroke-width="3" stroke-linecap="round">
                        <animateTransform attributeName="transform" type="rotate" values="-90 0 0;0 0 0;-90 0 0" dur="2s" repeatCount="indefinite"/>
                    </line>
                    <circle cx="0" cy="0" r="3" fill="#00D4AA"/>
                </g>
            </g>
            
            <!-- Bottom comparison -->
            <rect x="50" y="350" width="700" height="40" rx="8" fill="#F9FAFB" stroke="#E5E7EB" stroke-width="1"/>
            <text x="400" y="375" font-family="Inter" font-size="16" fill="#1F2937" text-anchor="middle" font-weight="600">
                <tspan fill="#00D4AA" font-weight="800">1000x</tspan> más rápido con IA
            </text>
        </svg>
    `;

    container.innerHTML = svg;
}

// Revenue Funnel Diagram (Leaky vs Sealed)
function createRevenueFunnelDiagram() {
    const container = document.getElementById('revenue-funnel');
    if (!container) return;

    const svg = `
        <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad-money" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#FFB800;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FFA000;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="grad-success" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#00D4AA;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#00B894;stop-opacity:1" />
                </linearGradient>
                <filter id="dropshadow">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                    <feOffset dx="0" dy="2" result="offsetblur"/>
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.3"/>
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            
            <!-- Title -->
            <text x="400" y="30" font-family="Inter" font-size="20" font-weight="700" fill="#1F2937" text-anchor="middle">
                Maximización de Ingresos y Reducción de Débitos
            </text>
            
            <!-- Traditional Funnel (Leaky) -->
            <g id="leaky-funnel">
                <text x="200" y="70" font-family="Inter" font-size="16" font-weight="600" fill="#FF6B6B" text-anchor="middle">
                    Embudo Tradicional
                </text>
                
                <!-- Funnel shape -->
                <path d="M 100 100 L 300 100 L 250 350 L 150 350 Z" fill="#F3F4F6" stroke="#D1D5DB" stroke-width="2"/>
                
                <!-- Money entering -->
                <g id="money-in">
                    <text x="200" y="120" font-family="Inter" font-size="32" text-anchor="middle">💰</text>
                    <text x="200" y="145" font-family="Inter" font-size="12" fill="#374151" text-anchor="middle" font-weight="600">
                        Ingresos Potenciales
                    </text>
                </g>
                
                <!-- Leaks -->
                <g id="leak-1" opacity="0.9">
                    <path d="M 120 180 L 80 180" stroke="#FF6B6B" stroke-width="3" marker-end="url(#arrow-leak)"/>
                    <circle cx="70" cy="180" r="4" fill="#FF6B6B">
                        <animate attributeName="cy" values="180;200;180" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <text x="40" y="185" font-family="Inter" font-size="10" fill="#FF6B6B" text-anchor="end" font-weight="600">
                        Errores de
                    </text>
                    <text x="40" y="197" font-family="Inter" font-size="10" fill="#FF6B6B" text-anchor="end" font-weight="600">
                        facturación
                    </text>
                </g>
                
                <g id="leak-2" opacity="0.9">
                    <path d="M 280 220 L 320 220" stroke="#FF6B6B" stroke-width="3" marker-end="url(#arrow-leak)"/>
                    <circle cx="330" cy="220" r="4" fill="#FF6B6B">
                        <animate attributeName="cy" values="220;240;220" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                    <text x="360" y="225" font-family="Inter" font-size="10" fill="#FF6B6B" text-anchor="start" font-weight="600">
                        Débitos de
                    </text>
                    <text x="360" y="237" font-family="Inter" font-size="10" fill="#FF6B6B" text-anchor="start" font-weight="600">
                        Obras Sociales
                    </text>
                </g>
                
                <g id="leak-3" opacity="0.9">
                    <path d="M 130 280 L 90 280" stroke="#FF6B6B" stroke-width="3" marker-end="url(#arrow-leak)"/>
                    <circle cx="80" cy="280" r="4" fill="#FF6B6B">
                        <animate attributeName="cy" values="280;300;280" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <text x="50" y="285" font-family="Inter" font-size="10" fill="#FF6B6B" text-anchor="end" font-weight="600">
                        Prestaciones
                    </text>
                    <text x="50" y="297" font-family="Inter" font-size="10" fill="#FF6B6B" text-anchor="end" font-weight="600">
                        no cargadas
                    </text>
                </g>
                
                <!-- Money out (reduced) -->
                <rect x="150" y="360" width="100" height="50" rx="8" fill="#FF6B6B" filter="url(#dropshadow)"/>
                <text x="200" y="385" font-family="Inter" font-size="14" fill="#fff" text-anchor="middle" font-weight="600">
                    Ingresos
                </text>
                <text x="200" y="402" font-family="Inter" font-size="20" fill="#fff" text-anchor="middle" font-weight="800">
                    60%
                </text>
                
                <defs>
                    <marker id="arrow-leak" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                        <polygon points="0 0, 8 4, 0 8" fill="#FF6B6B" />
                    </marker>
                </defs>
            </g>
            
            <!-- Grow Labs Funnel (Sealed) -->
            <g id="sealed-funnel">
                <text x="600" y="70" font-family="Inter" font-size="16" font-weight="600" fill="#00D4AA" text-anchor="middle">
                    Embudo Grow Labs
                </text>
                
                <!-- Funnel shape (sealed) -->
                <path d="M 500 100 L 700 100 L 650 350 L 550 350 Z" fill="url(#grad-success)" stroke="#00D4AA" stroke-width="3" opacity="0.2"/>
                <path d="M 500 100 L 700 100 L 650 350 L 550 350 Z" fill="none" stroke="#00D4AA" stroke-width="3"/>
                
                <!-- Money entering -->
                <g id="money-in-2">
                    <text x="600" y="120" font-family="Inter" font-size="32" text-anchor="middle">💰</text>
                    <text x="600" y="145" font-family="Inter" font-size="12" fill="#374151" text-anchor="middle" font-weight="600">
                        Ingresos Potenciales
                    </text>
                </g>
                
                <!-- Shields (no leaks) -->
                <g id="shield-1">
                    <circle cx="520" cy="180" r="20" fill="#E6FFF9" stroke="#00D4AA" stroke-width="2"/>
                    <text x="520" y="188" font-family="Inter" font-size="20" text-anchor="middle">🛡️</text>
                </g>
                
                <g id="shield-2">
                    <circle cx="680" cy="220" r="20" fill="#E6FFF9" stroke="#00D4AA" stroke-width="2"/>
                    <text x="680" y="228" font-family="Inter" font-size="20" text-anchor="middle">🛡️</text>
                </g>
                
                <g id="shield-3">
                    <circle cx="530" cy="280" r="20" fill="#E6FFF9" stroke="#00D4AA" stroke-width="2"/>
                    <text x="530" y="288" font-family="Inter" font-size="20" text-anchor="middle">🛡️</text>
                </g>
                
                <!-- AI Badge -->
                <circle cx="600" cy="240" r="30" fill="#22C55E" filter="url(#glow)">
                    <animate attributeName="r" values="30;33;30" dur="2s" repeatCount="indefinite"/>
                </circle>
                <text x="600" y="248" font-family="Inter" font-size="16" fill="#fff" text-anchor="middle" font-weight="700">AI</text>
                
                <!-- Money out (maximized) -->
                <rect x="550" y="360" width="100" height="50" rx="8" fill="url(#grad-success)" filter="url(#dropshadow)"/>
                <text x="600" y="385" font-family="Inter" font-size="14" fill="#fff" text-anchor="middle" font-weight="600">
                    Ingresos
                </text>
                <text x="600" y="402" font-family="Inter" font-size="20" fill="#fff" text-anchor="middle" font-weight="800">
                    98%
                </text>
                
                <!-- Upward arrow -->
                <path d="M 600 420 L 600 440" stroke="#00D4AA" stroke-width="4" marker-end="url(#arrow-up)"/>
                <text x="630" y="435" font-family="Inter" font-size="16" fill="#00D4AA" text-anchor="start" font-weight="700">
                    +38%
                </text>
                
                <defs>
                    <marker id="arrow-up" markerWidth="10" markerHeight="10" refX="5" refY="9" orient="auto">
                        <polygon points="5 0, 10 10, 0 10" fill="#00D4AA" />
                    </marker>
                </defs>
            </g>
            
            <!-- Comparison arrow -->
            <g id="comparison">
                <path d="M 350 250 L 450 250" stroke="#22C55E" stroke-width="3" stroke-dasharray="5,5" marker-end="url(#arrow-compare)"/>
                <defs>
                    <marker id="arrow-compare" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#22C55E" />
                    </marker>
                </defs>
            </g>
        </svg>
    `;

    container.innerHTML = svg;
}

// Initialize all diagrams when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    createWorkflowDiagram();
    createTimeComparisonDiagram();
    createRevenueFunnelDiagram();
});
