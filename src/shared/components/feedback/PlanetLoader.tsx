// src/shared/components/PlanetLoader.tsx
export const PlanetLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-10 animate-fade-in">
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-indigo-900 animate-spin-slow shadow-lg"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 border border-dashed border-white/30 rounded-full animate-pulse"></div>
        </div>
      </div>
      <p className="text-white text-sm mt-2">
        Cargando planetas del sistema solar...
      </p>
    </div>
  );
};
