export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center space-y-1 bg-gray-800">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} - Todos os direitos reservados
      </p>
    </footer>
  );
}
