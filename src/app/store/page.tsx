import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { clinic } from "@/data/clinic";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Store | Aura Ayurveda",
  description:
    "Explore Aura Ayurveda online consultations, postpartum care kits, and Ayurvedic skin and hair care products.",
  path: "/store",
});

const products = [
  {
    name: "Online Consultation",
    category: "Personalized care",
    description:
      "Speak with an Ayurvedic doctor from home and discuss your health concerns and next steps.",
    image: "/images/store/online-consultation.png",
    message: "Hello, I’m interested in booking an online consultation. Please share the details.",
  },
  {
    name: "Prasavaraksha Medicines Kit",
    category: "Women’s wellness",
    description:
      "A postpartum care kit. The doctor can confirm the contents and whether it is suitable for you.",
    image: "/images/store/prasavaraksha-kit.png",
    message: "Hello, I’m interested in the Prasavaraksha medicines kit. Please share the contents and details.",
  },
  {
    name: "Kumkumadi Cream",
    category: "Ayurvedic skin care",
    description:
      "An Ayurvedic face-care product for your daily routine. Ask us about ingredients and use.",
    image: "/images/store/kumkumadi-cream.png",
    message: "Hello, I’m interested in Kumkumadi cream. Please share the price and product details.",
  },
  {
    name: "Ayurvedic Hair Wash",
    category: "Ayurvedic hair care",
    description:
      "A herbal wash for scalp and hair care. Contact us to discuss whether it suits your needs.",
    image: "/images/store/ayurvedic-hair-wash.png",
    message: "Hello, I’m interested in the Ayurvedic hair wash for dandruff care. Please share the price and details.",
  },
];

export default function StorePage() {
  return (
    <Container>
      <section className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Aura Ayurveda Store"
          title="Care and products, chosen with guidance."
          description="Browse our consultation and wellness offerings. Message us about an item to check availability and get guidance before ordering."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => {
            const whatsappUrl = `https://wa.me/${clinic.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(product.message)}`;

            return (
              <article
                key={product.name}
                className="flex flex-col rounded-2xl border border-[#e5dccf] bg-white p-4 shadow-sm"
              >
                <Image
                  src={product.image}
                  alt={`${product.name} illustration`}
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
                <div className="flex flex-1 flex-col pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#496d56]">
                    {product.category}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl text-[#1a2a2a]">{product.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[#536260]">{product.description}</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#1d4f3a] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#163d30]"
                  >
                    Buy on WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Container>
  );
}