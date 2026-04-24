// src/components/ServiceCard.jsx
export function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-main-purple transition-all duration-300 transform hover:-translate-y-2 group">
      <i className={`fas ${icon} text-5xl text-main-purple mb-4 group-hover:scale-110 transition-transform`}></i>
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}