import { Smartphone, Search, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const features = [
  {
    icon: Smartphone,
    title: "Mobile-responsive designs",
    description: "Your templates look stunning on any device, ensuring a perfect experience for all users.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Built with best practices to help your landing pages rank higher in search results.",
  },
  {
    icon: BookOpen,
    title: "Updated Library",
    description: "Access our growing collection of premium templates, with new additions every month.",
  },
];

const FeaturesHighlight = () => {
  return (
    <section className="relative bg-background py-24">
      {/* Wave divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform">
        <svg
          className="relative block w-full"
          height="50"
          viewBox="0 0 1200 50"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 C300,20 800,0 1200,50 L1200,0 L0,0 Z"
            className="fill-primary"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-16">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-foreground text-center mb-20"
        >
          Features Highlight
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative p-8 rounded-2xl border border-secondary/10 bg-primary/50 hover:border-accent/30 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-secondary">
                {feature.description}
              </p>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center"
        >
          <Button
            variant="default"
            size="lg"
            className="bg-accent hover:bg-accent/90 text-foreground"
          >
            See All Features
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesHighlight;