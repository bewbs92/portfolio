import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-8 border-t border-border">
      {/* <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center gap-2 text-muted-foreground">
          © {currentYear} Syed Tabeeb Ur Rahman. Built with <Heart className="w-4 h-4 text-destructive fill-destructive" /> using React & Tailwind.
        </p>
      </div> */}
    </footer>
  );
}
