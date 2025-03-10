export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {currentYear} Rythm. All rights reserved.
        </p>
      </div>
    </footer>
  );
}