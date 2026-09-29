import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ImageSlot from "../components/ImageSlot";
import { PRODUCTS } from "../data/products";
import { IMAGES } from "../lib/images";

const Arrow = ({ className = "" }: { className?: string }) => (
  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className={className}>
    <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" />
  </svg>
);

function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      style={{ pointerEvents: done ? "none" : "auto" }}
      className="fixed inset-0 z-[10000] bg-ivory flex items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, letterSpacing: "0.1em" }}
        animate={{ opacity: 1, letterSpacing: "0.34em", scale: done ? 0.85 : 1 }}
        transition={{ duration: 1 }}
        className="font-display text-3xl md:text-5xl"
      >
        ISRAAYA
      </motion.h1>
    </motion.div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const [curtainDown, setCurtainDown] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setCurtainDown(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] overflow-hidden flex items-end">
      <motion.div style={{ scale }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundPosition: "50% 22%", backgroundImage: `url(${IMAGES.homeHero})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(155deg, rgba(138,47,75,.55) 0%, rgba(125,22,56,.6) 38%, rgba(87,13,38,.75) 72%, rgba(44,33,29,.85) 120%)",
          }}
        />
      </motion.div>

      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: curtainDown ? 0 : 1 }}
        transition={{ duration: 1.2, ease: [0.7, 0, 0.2, 1] }}
        style={{ transformOrigin: "top" }}
        className="absolute inset-0 bg-ivory z-10"
      />

      <div className="relative z-[2] text-ivory px-[5vw] pb-[8vw] max-w-[720px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-[11px] tracking-[0.28em] uppercase text-peach font-medium"
        >
          Chapter I
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.65, duration: 1 }}
          className="font-display text-[52px] md:text-[100px] leading-[0.95] my-2.5"
        >
          Nikhaar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="font-serif italic text-lg md:text-2xl text-peach mb-8"
        >
          An ode to quiet radiance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.95, duration: 1 }}
        >
          <Link
            to="/shop"
            className="group inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase border-b border-ivory/40 pb-1.5 hover:border-ivory hover:gap-4 transition-all hoverable"
          >
            Discover the Collection
            <Arrow className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function BrandIntro() {
  return (
    <section className="py-[min(14vw,150px)] px-[5vw] text-center max-w-[640px] mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1 }}
        className="font-display text-[30px] md:text-[44px] tracking-[0.35em] mb-6"
      >
        ISRAAYA
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, delay: 0.15 }}
        className="font-serif text-xl md:text-3xl leading-relaxed text-[#4a3a34]"
      >
        Indian wear does not have to choose
        <br />
        between heritage and ease.
      </motion.p>
      <div className="w-12 h-px bg-gold mx-auto my-6" />
      <p className="text-sm uppercase tracking-[0.08em] text-wine">Made in India. Worn Around the World.</p>
    </section>
  );
}

function RevealPanel({
  texture,
  image,
  label,
  eyebrow,
  caption,
  height = "82vh",
}: {
  texture: any;
  image?: string;
  label: string;
  eyebrow: string;
  caption: string;
  height?: string;
}) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0.4 }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
      viewport={{ once: true, amount: 0.0 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-sm mb-5 flex items-end"
      style={{ height }}
    >
      <ImageSlot texture={texture} image={image} label={label} />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent" />
      <div className="relative z-[2] text-ivory p-8 text-[11px] tracking-[0.2em] uppercase">
        {eyebrow}
        <span className="block font-serif italic text-2xl tracking-normal normal-case mt-2">{caption}</span>
      </div>
    </motion.div>
  );
}

function ChapterStorytelling() {
  return (
    <section id="chapter" className="px-[5vw]">
      <div className="flex flex-col items-center text-center pb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[0.28em] uppercase text-wine mb-4"
        >
          Chapter I
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-[64px] md:text-[150px] leading-[0.9]"
        >
          Nikhaar
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-serif italic text-xl text-wine my-5"
        >
          What gardens know.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-[11px] tracking-[0.2em] uppercase text-[#8a7a70]"
        >
          10 Pieces — From the Nikhaar Chapter
        </motion.div>
      </div>

      <RevealPanel texture="t1" image={IMAGES.reveal1} label="The Silhouette" eyebrow="01 — The Silhouette" caption="Named for what the garden holds." />

      <div className="grid md:grid-cols-2 gap-5">
        <RevealPanel texture="t2" image={IMAGES.reveal2} label="Close-Up embroidery" eyebrow="02 — Close-Up" caption="Zardozi, dori work, resham, beadwork." height="60vh" />
        <RevealPanel texture="t3" image={IMAGES.reveal3} label="Architecture" eyebrow="03 — Architecture" caption="Rooted in India, built for the world." height="60vh" />
      </div>

      <RevealPanel texture="t4" image={IMAGES.reveal4} label="In Motion" eyebrow="04 — In Motion" caption="Made to order. Made once it's called for." height="75vh" />

      <div className="flex justify-center mt-12 pb-24">
        <Link
          to="/shop"
          className="group inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase border-b border-wine/30 text-wine pb-1.5 hover:gap-4 transition-all hoverable"
        >
          Explore the Collection
          <Arrow className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

const COLLECTIONS: { name: string; texture: any; image: string; span: string; dark?: boolean; locked?: boolean }[] = [
  { name: "Nikhaar", texture: "t1", image: IMAGES.collNikhaar, span: "md:col-span-6" },
  { name: "Chapter II", texture: "t2", image: IMAGES.collChapter2, span: "md:col-span-4", locked: true },
  { name: "Chapter III", texture: "t3", image: IMAGES.collChapter3, span: "md:col-span-3", locked: true },
];

function CollectionsGrid() {
  return (
    <section id="collections" className="px-[5vw] py-[min(14vw,150px)]">
      <div className="text-center mb-16">
        <div className="text-[11px] tracking-[0.28em] uppercase text-wine mb-3">Enter the Collection</div>
        <h2 className="font-display text-[30px] md:text-[46px]">Shop by Chapter</h2>
        <p className="font-serif text-base text-[#8a7a70] mt-4 max-w-[560px] mx-auto">
          Each chapter is created once and never repeated. Nikhaar is the one open now.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-10 gap-5">
        {COLLECTIONS.map((c) =>
          c.locked ? (
            <div
              key={c.name}
              className={`group relative overflow-hidden rounded-sm aspect-[3/4] ${c.span}`}
            >
              <ImageSlot texture={c.texture} image={c.image} label={c.name}>
                <div className="absolute inset-0 bg-espresso/70" />
              </ImageSlot>
              <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center text-ivory text-center px-4">
                <div className="font-display text-xl mb-2">{c.name}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-ivory/60">Coming Soon</div>
              </div>
            </div>
          ) : (
            <Link
              key={c.name}
              to="/shop"
              className={`group relative overflow-hidden rounded-sm aspect-[3/4] hoverable ${c.span}`}
            >
              <ImageSlot texture={c.texture} image={c.image} label={c.name}>
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 to-transparent" />
              </ImageSlot>
              <div
                className={`absolute left-5 bottom-5 z-[2] font-display text-xl transition-transform group-hover:-translate-y-2 ${
                  c.dark ? "text-espresso" : "text-ivory"
                }`}
              >
                {c.name}
              </div>
              <div
                className={`absolute right-5 bottom-5 z-[2] opacity-0 group-hover:opacity-100 transition-opacity ${
                  c.dark ? "text-espresso" : "text-ivory"
                }`}
              >
                →
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  );
}

const CRAFT_TAGS: { tag: string; texture: any; image: string }[] = [
  { tag: "Zardozi", texture: "t5", image: IMAGES.craftZardozi },
  { tag: "Dori Work", texture: "t6", image: IMAGES.craftDori },
  { tag: "Resham", texture: "t7", image: IMAGES.craftResham },
  { tag: "Beadwork", texture: "t8", image: IMAGES.craftBead },
  { tag: "Crafted in India", texture: "t4", image: IMAGES.craftIndia },
];

function CraftSection() {
  return (
    <section className="bg-espresso text-ivory px-[5vw] py-[min(14vw,150px)]">
      <div className="text-[11px] tracking-[0.28em] uppercase text-gold mb-4">Our Craft</div>
      <h2 className="font-display text-[40px] md:text-[84px] mb-6">Made Slowly.</h2>
      <p className="font-serif text-base md:text-lg text-ivory/75 max-w-[560px] mb-14">
        Nothing is mass produced. Every piece is made to order and hand embroidered only once it is called
        for.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {CRAFT_TAGS.map((c, i) => (
          <motion.div
            key={c.tag}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: i * 0.08 }}
            className="relative aspect-square overflow-hidden rounded-sm"
          >
            <ImageSlot texture={c.texture} image={c.image} label={c.tag} />
            <span className="absolute bottom-4 left-4 text-[10px] tracking-[0.18em] uppercase px-3 py-1.5 rounded-full border border-ivory/40 bg-espresso/35 backdrop-blur-sm">
              {c.tag}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeaturedEdit() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  return (
    <section className="px-[5vw] py-[min(14vw,150px)]">
      <div className="flex justify-between items-end flex-wrap gap-4 mb-11">
        <h2 className="font-display text-[30px] md:text-[46px]">The Nikhaar Edit</h2>
        <div className="text-[11px] tracking-[0.28em] uppercase text-wine">Drag to browse</div>
      </div>
      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto pb-5 cursor-grab active:cursor-grabbing [scrollbar-width:thin]"
        onMouseDown={(e) => {
          isDown.current = true;
          startX.current = e.pageX;
          scrollLeft.current = scrollerRef.current?.scrollLeft ?? 0;
        }}
        onMouseUp={() => (isDown.current = false)}
        onMouseLeave={() => (isDown.current = false)}
        onMouseMove={(e) => {
          if (!isDown.current || !scrollerRef.current) return;
          e.preventDefault();
          scrollerRef.current.scrollLeft = scrollLeft.current - (e.pageX - startX.current) * 1.4;
        }}
      >
        {PRODUCTS.slice(0, 4).map((p) => (
          <Link key={p.slug} to={`/product/${p.slug}`} className="flex-none w-[min(72vw,300px)] group hoverable">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden mb-4">
              <ImageSlot texture={p.texture} image={p.image} label={p.name} className="opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
              <ImageSlot texture={p.altTexture} image={p.altImage} label={`${p.name} — alt`} className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="font-serif text-lg">{p.name}</div>
            <div className="text-[11px] uppercase tracking-[0.08em] text-[#8a7a70] my-1.5">{p.setType}</div>
            <div className="text-sm text-wine">{p.color}</div>
            <span className="inline-block mt-2 text-[10px] tracking-[0.18em] uppercase border-b border-espresso">
              Explore →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Preloader />
      <Nav transparentOnTop />
      <Hero />
      <BrandIntro />
      <ChapterStorytelling />
      <CollectionsGrid />
      <CraftSection />
      <FeaturedEdit />
      <Footer />
    </div>
  );
}
