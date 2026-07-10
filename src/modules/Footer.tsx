type FooterProps = {
  note: string;
};

export default function Footer({ note }: FooterProps) {
  return (
    <footer className="py-8 px-6 bg-crust text-subtext0 text-center text-sm space-y-1">
      <p>&copy; {new Date().getFullYear()} Hiroshi Angelo Fernandez. {note}</p>
      <p>
        Color scheme:{' '}
        <a
          href="https://catppuccin.com"
          target="_blank"
          rel="noreferrer"
          className="text-mauve hover:underline font-semibold"
        >
          Catppuccin
        </a>
      </p>
    </footer>
  );
}
