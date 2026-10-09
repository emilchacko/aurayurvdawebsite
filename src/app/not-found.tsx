import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container>
      <section className="flex min-h-[60vh] items-center justify-center py-20">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#496d56]">404</p>
          <h1 className="mt-4 font-serif text-4xl text-[#1a2a2a]">Page not found</h1>
          <p className="mt-4 max-w-md text-base leading-7 text-[#536260]">
            The page you are looking for may be under construction or moved. Please return to the homepage.
          </p>
          <Link href="/" className="mt-8 inline-flex rounded-full bg-[#1d4f3a] px-5 py-3 text-sm font-semibold text-white">
            Go home
          </Link>
        </div>
      </section>
    </Container>
  );
}
