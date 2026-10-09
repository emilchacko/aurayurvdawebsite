import Image from "next/image";
import { Container } from "@/components/ui/container";
import { clinic } from "@/data/clinic";
import { buildMetadata } from "@/lib/seo";
import { getWhatsAppUrl, withBasePath } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Ayurvedic Products & Online Consultation | Aura Ayurveda Thiruvalla",
  description:
    "Enquire about Ayurvedic skin and hair care products, a postpartum care kit, or an online consultation from Aura Ayurveda in Manjadi near Thiruvalla, Kerala.",
  path: "/store",
});

const products = [
  {
    name: "Online Consultation",
    category: "Personalized care",
    description:
      "Speak with an Ayurvedic doctor from home and discuss your health concerns and next steps.",
    image: "/images/store/online-consultation.png",
    action: "Ask about a consultation",
    message: "Hello, I would like to enquire about an online consultation with Aura Ayurveda. Please share availability and details.",
  },
  {
    name: "Prasavaraksha Medicines Kit",
    category: "Women’s wellness",
    description:
      "A postpartum care kit. The doctor can confirm the contents and whether it is suitable for you.",
    image: "/images/store/prasavaraksha-kit.png",
    action: "Ask about this kit",
    message: "Hello, I would like to enquire about the Prasavaraksha medicines kit. Could you share the contents, price, availability and suitability details?",
  },
  {
    name: "Kumkumadi Cream",
    category: "Ayurvedic skin care",
    description:
      "An Ayurvedic face-care product for your daily routine. Ask us about ingredients and use.",
    image: "/images/store/kumkumadi-cream.png",
    action: "Ask about this product",
    message: "Hello, I would like to enquire about Kumkumadi cream. Could you share the ingredients, price, availability and usage guidance?",
  },
  {
    name: "Ayurvedic Hair Wash",
    category: "Ayurvedic hair care",
    description:
      "A herbal wash for scalp and hair care. Contact us to discuss whether it suits your needs.",
    image: "/images/store/ayurvedic-hair-wash.png",
    action: "Ask about this product",
    message: "Hello, I would like to enquire about the Ayurvedic hair wash. Could you share the ingredients, price, availability and usage guidance?",
  },
];

export default function StorePage() {
  return (
    <Container>
      <section className="py-10 sm:py-14">
        <div className="grid gap-6 border-b border-[#d8ded4] pb-8 sm:gap-8 sm:pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a05435]">Aura Ayurveda · Manjadi, near Thiruvalla</p>
            <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-[1.08] text-[#1d3026] sm:text-5xl">Wellness essentials, with a real person to ask.</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#58665c] sm:text-lg">
              Browse consultations and selected Ayurvedic products. Message us to confirm current price, availability, ingredients and whether an item is right for you.
            </p>
          </div>
          <a href={getWhatsAppUrl("Hello, I would like help choosing an Aura Ayurveda product or service.")} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#214d3a] px-5 text-sm font-semibold text-white transition hover:bg-[#183b2c]">
            Ask us on WhatsApp
          </a>
        </div>

        <div className="mt-6 grid gap-3 rounded-xl bg-[#edf0e8] p-4 sm:grid-cols-3 sm:p-5">
          <p className="text-sm leading-6 text-[#34463b]">Local clinic in Manjadi, near Thiruvalla</p>
          <p className="text-sm leading-6 text-[#34463b]">Talk to the clinic before you order</p>
          <p className="text-sm leading-6 text-[#34463b]">Product suitability confirmed case by case</p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => {
            return (
              <article
                key={product.name}
                className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#d8ded4] bg-white"
              >
                <Image
                  src={withBasePath(product.image)}
                  alt={`${product.name} from Aura Ayurveda`}
                  width={1200}
                  height={900}
                  sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a05435]">
                    {product.category}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl leading-tight text-[#1d3026]">{product.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[#58665c]">{product.description}</p>
                  <a
                    href={getWhatsAppUrl(product.message)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-[#214d3a] px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-[#183b2c]"
                  >
                    {product.action}
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <aside className="mt-8 border-l-2 border-[#a05435] bg-[#f6f3eb] px-4 py-4 sm:px-5">
          <h2 className="font-serif text-xl text-[#1d3026]">A note about product enquiries</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#58665c]">
            This catalogue does not process payments or replace a consultation. Ask us about price, ingredients, delivery or collection, and suitability before ordering. Please don’t share sensitive health information in a public message.
          </p>
        </aside>

        <div className="mt-8 flex flex-col gap-3 rounded-xl bg-[#214d3a] p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <h2 className="font-serif text-2xl">Prefer to visit the clinic?</h2>
            <p className="mt-1 text-sm leading-6 text-white/80">Aura Ayurveda · {clinic.address}</p>
          </div>
          <a href={clinic.mapUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#214d3a]">Get directions</a>
        </div>
      </section>
    </Container>
  );
}