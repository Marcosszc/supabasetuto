import React from 'react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  setActiveSection
}) => {
  const navItems = [
    { id: 'introduccion', label: 'Introducción' },
    { id: 'conceptos', label: 'Conceptos' },
    { id: 'cuestionario', label: 'Cuestionario' },
    { id: 'practica', label: 'Aplicación Práctica' },
    { id: 'recursos-visuales', label: 'Recursos Visuales' },
    { id: 'conclusion', label: 'Conclusión' },
    { id: 'fuentes', label: 'Fuentes' }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-[#0a0e1a]/90 backdrop-blur-md border-b border-slate-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-6 overflow-x-auto py-3 text-xs sm:text-sm font-medium text-slate-400 no-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`whitespace-nowrap transition-all py-1 cursor-pointer ${
                activeSection === item.id
                  ? 'text-indigo-300 font-semibold border-b-2 border-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]'
                  : 'hover:text-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
