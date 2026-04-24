export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5585997950395"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform border-2 border-main-purple"
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
}