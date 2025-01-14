import { BookOpen, Settings, PiggyBank } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "High-quality templates",
    description: "Premium templates designed for every niche, ensuring maximum impact and conversions.",
    icon: BookOpen,
  },
  {
    title: "Easy customization",
    description: "Intuitive editing tools that make customization simple for both beginners and experts.",
    icon: Settings,
  },
  {
    title: "Affordable plans",
    description: "Flexible membership options with exclusive perks and regular template updates.",
    icon: PiggyBank,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-primary py-24">
      {/* Divider */}
      <div className="w-full h-px bg-secondary/20 mb-16" />
      
      <div className="container mx-auto px-4">
        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-foreground text-center mb-16"
        >
          Why Choose PyxCommerce?
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 rounded-full bg-accent/10">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-secondary italic"
        >
          Trusted by thousands of creators worldwide.
        </motion.p>
      </div>
    </section>
  );
};

export default WhyChooseUs;