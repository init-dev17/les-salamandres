import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <section className="min-h-screen bg-packer-green flex items-center justify-center px-4">
      <div className="text-center">
        <span className="font-heading text-[10rem] sm:text-[15rem] text-packer-gold/20 leading-none block -mb-8">
          404
        </span>
        <h1 className="font-heading text-5xl sm:text-6xl text-white tracking-wider mb-4">
          PAGE NON TROUVÉE
        </h1>
        <p className="text-white/60 font-subheading text-lg mb-8 max-w-md mx-auto">
          Oups ! Il semble que cette page se soit échappée. Comme un ballon mal lancé.
        </p>
        <Link
          to="/"
          className="btn-primary group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Retour à l'accueil
        </Link>
      </div>
    </section>
  );
}
