// src/components/Footer.jsx
export function Footer() {
  return (
    <footer className="bg-[#0f0f0f] py-12 border-t border-main-purple/10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 mb-6">
          &copy; 2025 Kin Tattoo Estúdio - Todos os direitos reservados.
        </p>
        <div className="flex justify-center space-x-8">
          {[
            { icon: 'fa-instagram', url: 'https://www.instagram.com/kinbenevidestattoo/' },
            { icon: 'fa-facebook-f', url: 'https://www.facebook.com/estudiokintattoo/' },
            { icon: 'fa-tiktok', url: '#' },
            { icon: 'fa-whatsapp', url: 'https://wa.me/5585997950395' }
          ].map((social, idx) => (
            <a 
              key={idx} 
              href={social.url} 
              target="_blank" 
              className="text-gray-500 hover:text-main-purple transition-all text-3xl hover:scale-125"
            >
              <i className={`fab ${social.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}