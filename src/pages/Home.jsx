// src/pages/Home.jsx
import { ServiceCard } from '../components/ServiceCard';

export function Home() {
  return (
    <div className="animate-fade-in">
      {/* Banner / Hero Section */}
      <section id="home" className="relative h-[90vh] flex items-center justify-center text-center bg-cover bg-center" 
               style={{ backgroundImage: "url('/banner-tattoo.png')" }}>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="z-10 p-8">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
            Arte que Marca a <span className="text-main-purple">Alma</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-8">
            Transformando ideias em obras de arte duradouras na sua pele.
          </p>
          <a href="#services" className="bg-main-purple hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.5)]">
            Ver Nossos Serviços
          </a>
        </div>
      </section>

      {/* Sobre o Estúdio */}
      <section id="about" className="py-16 bg-dark-purple/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-main-purple mb-8 text-center">O Estúdio</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="md:w-1/2 flex justify-center">
              <img src="/estúdio_foto.png" alt="Estúdio" className="rounded-lg shadow-2xl border-2 border-main-purple/30 w-72 md:w-96" />
            </div>
            <div className="md:w-1/2 text-gray-300 text-lg leading-relaxed space-y-4">
              <p>No nosso estúdio, a paixão pela arte e o compromisso com a segurança se encontram.</p>
              <p>Utilizamos apenas materiais de alta qualidade e seguimos rigorosos padrões de higiene para garantir uma experiência segura.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Serviços - Aqui usamos o Componente ServiceCard */}
      <section id="services" className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-main-purple mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard icon="fa-paint-brush" title="Tatuagens Personalizadas" desc="Designs únicos e exclusivos." />
            <ServiceCard icon="fa-redo-alt" title="Cobertura e Retoque" desc="Transformamos tattoos antigas em novas artes." />
            <ServiceCard icon="fa-feather-alt" title="Piercings" desc="Segurança e profissionalismo com titânio." />
            <ServiceCard icon="fa-brush" title="Tattoos From Hell" desc="Estilo diferenciado com artes voltadas ao terror." />
            <ServiceCard icon="fa-hand-sparkles" title="Tattoos Realistas" desc="Ideal para homenagear familiares e pessoas queridas." />
            <ServiceCard icon="fa-certificate" title="Workshops Particulares" desc="Aprenda as técnicas com mentoria particular." />
          </div>
        </div>
      </section>
      
      {/* Equipe - Kin e Mayara */}
      <section id="team" className="py-16 bg-dark-purple/20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-main-purple mb-12">Nossa Equipe</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
             <div className="bg-gray-900/50 p-8 rounded-2xl border border-main-purple/20">
                <img src="/perfil.png" alt="Kin" className="rounded-full mx-auto mb-4 w-48 h-48 object-cover border-4 border-main-purple" />
                <h3 className="text-2xl font-semibold text-white">Kin Benevides</h3>
                <p className="text-main-purple mb-4">Tatuador</p>
                <p className="text-gray-400 text-sm">Especialista em From Hell, dark art e portrait com mais de 15 anos de carreira.</p>
             </div>
             <div className="bg-gray-900/50 p-8 rounded-2xl border border-main-purple/20">
                <img src="/perfil_mayara.jpg" alt="Mayara" className="rounded-full mx-auto mb-4 w-48 h-48 object-cover border-4 border-main-purple" />
                <h3 className="text-2xl font-semibold text-white">Mayara Soares</h3>
                <p className="text-main-purple mb-4">Profissional Piercer</p>
                <p className="text-gray-400 text-sm">Foco em segurança e técnica, utilizando joalheria de alta qualidade como o titânio.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}