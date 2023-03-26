import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center space-y-1 bg-gray-800">
      <button
        className="mb-2 mt-1 flex w-full flex-col items-center text-neutral-300"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FaArrowUp />
        Voltar ao topo
      </button>
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} - Todos os direitos reservados
      </p>
    </footer>
  );
}
