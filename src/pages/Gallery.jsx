// src/pages/Gallery.jsx
const tattooItems = [
  { id: 1, img: "/img/1.jpg", title: "Realismo Preto e Cinza", desc: "Sombras suaves." },
  { id: 2, img: "/img/2.jpg", title: "Tattoo Portrait", desc: "Zé Ramalho" },
  { id: 3, img: "/img/3.jpg", title: "Águia", desc: "Linhas precisas." },
  { id: 4, img: "/img/4.jpg", title: "Geométrico", desc: "Simetria perfeita." },
  // Adicione os outros 8 itens aqui seguindo o padrão
];

export function Gallery() {
  return (
    <section className="py-16 bg-black min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-main-purple mb-6 animate-pulse">
          Nossa Galeria
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          Explore nossas criações e inspire-se.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tattooItems.map((item) => (
            <div key={item.id} className="group bg-gray-900 rounded-xl overflow-hidden border border-transparent hover:border-main-purple transition-all duration-500 shadow-lg hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]">
              <div className="overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-4 bg-gray-900">
                <h3 className="text-xl font-semibold text-white group-hover:text-main-purple transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}