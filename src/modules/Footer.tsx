type FooterProps = {
  note: string;
};

export default function Footer({ note }: FooterProps) {
  return (
    <footer className="py-8 px-6 bg-slate-950 text-slate-500 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Hiroshi Angelo Fernandez. {note}</p>
    </footer>
  );
}
