import { Link } from "react-router";
import { ArrowRight, Cpu, Scissors, Wrench, Store, Globe, Layers } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "CNC Router Cutting",
    tagline: "Precision at Every Millimeter",
    color: "#1DA4E4",
    desc: "Our industrial CNC router machines deliver precise cuts on acrylic, wood, aluminum composite, and foam board materials. Complex shapes, lettering, logos, and decorative panels — all executed with sub-millimeter accuracy.",
    capabilities: [
      "Acrylic letter cutting",
      "ACP (aluminum composite) routing",
      "Foam board shaping",
      "Wooden sign boards",
      "Complex logo cutouts",
      "Large-format panels",
    ],
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&h=480&fit=crop&auto=format",
  },
  {
    icon: Scissors,
    title: "Laser Cutting & Engraving",
    tagline: "Detail That Impresses",
    color: "#DF8B23",
    desc: "Our CO₂ laser cutter handles intricate designs that CNC can't achieve. From fine filigree patterns to precise engraving on acrylic, leather, wood, and glass — the results are clean, professional, and detailed.",
    capabilities: [
      "Acrylic laser cutting",
      "Logo engraving on products",
      "Wooden plaque engraving",
      "Leather & fabric cutting",
      "Frosted glass effect",
      "Awards & trophies",
    ],
    img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=700&h=480&fit=crop&auto=format",
  },
  {
    icon: Wrench,
    title: "Sign Fabrication",
    tagline: "From Concept to Installation",
    color: "#6A6A6A",
    desc: "Complete sign fabrication including light boxes (single, double-sided, round), neon signs, shadow light acrylic signs, and flex boards. We handle electrical wiring, LED fitting, and structural framing in-house.",
    capabilities: [
      "LED light box fabrication",
      "Neon sign bending & wiring",
      "Shadow light acrylic assembly",
      "Structural steel framing",
      "LED module installation",
      "On-site installation service",
    ],
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&h=480&fit=crop&auto=format",
  },
  {
    icon: Store,
    title: "Shop Branding",
    tagline: "Make Your Storefront Unmissable",
    color: "#1DA4E4",
    desc: "Complete shop front branding packages — from design to installation. We handle facade signage, window graphics, interior branding, hanging signs, and menu boards to give your store a cohesive premium identity.",
    capabilities: [
      "Facade signage design",
      "Window vinyl graphics",
      "Interior wall branding",
      "Menu board design & print",
      "Hanging & projecting signs",
      "Brand color consistency",
    ],
    img: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=700&h=480&fit=crop&auto=format",
  },
  {
    icon: Globe,
    title: "Outdoor Advertising",
    tagline: "Dominate the Skyline",
    color: "#DF8B23",
    desc: "Large-format outdoor advertising solutions including hoardings, bill boards, pylon signs, and building-mounted signage. Engineered for durability in Pakistan's weather conditions.",
    capabilities: [
      "Hoarding & billboard fabrication",
      "Pylon sign structures",
      "Building-mounted signs",
      "Highway directional boards",
      "Weather-resistant materials",
      "Night visibility optimization",
    ],
    img: "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=700&h=480&fit=crop&auto=format",
  },
  {
    icon: Layers,
    title: "Material Supply",
    tagline: "Quality Raw Materials",
    color: "#6A6A6A",
    desc: "We supply premium acrylic (mica) sheets in 2mm and 3mm thickness, and foam boards in 5mm, 10mm, and 18mm — available at affordable market prices for businesses and fabricators.",
    capabilities: [
      "Acrylic sheets (2mm, 3mm)",
      "Foam boards (5mm, 10mm, 18mm)",
      "Various colors & finishes",
      "Bulk orders welcome",
      "Cut-to-size service",
      "Same-day pickup available",
    ],
    img: "https://images.unsplash.com/photo-1585858229735-cd08d8cb510d?w=700&h=480&fit=crop&auto=format",
  },
];

const process = [
  { step: "01", title: "Consultation", desc: "Share your requirements and we'll advise on the best solution for your brand and budget." },
  { step: "02", title: "Design", desc: "Our team creates design mockups for your approval before any fabrication begins." },
  { step: "03", title: "Fabrication", desc: "Your sign is crafted in our workshop using premium materials and precision machinery." },
  { step: "04", title: "Quality Check", desc: "Every piece is inspected before delivery to ensure it meets our standards." },
  { step: "05", title: "Installation", desc: "Our team installs your signage on-site with professional finishing." },
];

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden pt-20">
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(29,164,228,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Services</p>
          <h1
            className="text-4xl sm:text-5xl font-black text-foreground mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Full-Service Signage & Fabrication
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From CNC cutting to complete shop branding — Viatech handles every
            aspect of your signage project under one roof.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`group flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/25 transition-colors shadow-sm`}
            >
              {/* Image */}
              <div className="lg:w-[42%] shrink-0 relative overflow-hidden bg-muted min-h-[260px]">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `linear-gradient(135deg, ${svc.color}20, transparent)`,
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-7 lg:p-9 flex flex-col justify-center">
                <div
                  className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
                  style={{
                    background: `${svc.color}12`,
                    color: svc.color,
                    border: `1px solid ${svc.color}25`,
                  }}
                >
                  <svc.icon className="w-3 h-3" />
                  Service
                </div>
                <h2
                  className="text-2xl font-black text-foreground mb-1"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {svc.title}
                </h2>
                <p className="text-sm font-medium mb-4" style={{ color: svc.color }}>
                  {svc.tagline}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {svc.desc}
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {svc.capabilities.map((c) => (
                    <div key={c} className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: svc.color }}
                      />
                      <span className="text-muted-foreground text-xs">{c}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                    style={{ color: svc.color }}
                  >
                    Get a quote for this service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              How We Work
            </p>
            <h2
              className="text-3xl font-black text-foreground"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {process.map((p, i) => (
              <div key={p.step} className="relative text-center">
                {i < process.length - 1 && (
                  <div className="hidden sm:block absolute top-6 left-1/2 w-full h-px bg-primary/15" />
                )}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-card border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span
                      className="text-primary font-black text-sm"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {p.step}
                    </span>
                  </div>
                  <h4
                    className="font-bold text-foreground text-sm mb-2"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {p.title}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
