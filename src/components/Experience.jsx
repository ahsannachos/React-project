import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { getProducts } from "../shopify"; // make sure shopify.js is in src/


export default function Experience() {
  // This hook triggers 'inView' to true when the component enters the viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will only run once
    threshold: 0.2,    // Trigger animation when 20% of the component is visible
  });
  const [products, setProducts] = useState([]);

useEffect(() => {
  getProducts().then(setProducts);
}, []);


  // Animation variants for the "WHO WE ARE" tag (slides from left)
  const tagVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animation variants for the main text block (slides from bottom)
  const textBlockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  return (
    // Add the 'ref' to the section to observe its visibility
    <section 
      ref={ref}
      className="relative mx-auto max-w-full bg-[#f7f7f7] text-[#111111] px-[24px] pt-[88px] pb-[96px] font-calSans overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* WHO WE ARE Tag - Now a motion component */}
        <motion.div
          variants={tagVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="inline-flex items-center gap-[10px] rounded-full border border-[#e5e5e5] bg-white h-[35px] px-[18px]"
        >
          <span className="block w-[7px] h-[7px] rounded-full bg-[#D4A65A]"></span>
          <span className="font-extrabold tracking-[0.05em] text-[#111111] text-[14px] leading-none uppercase opacity-90">
            WHO WE ARE
          </span>
        </motion.div>

        {/* Headings and Description Block - Now a motion component */}
        {/* Note: I've separated the <p> from the <h2> for correct HTML semantics */}
        <motion.div
          variants={textBlockVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="md:pl-10" // Adjusted padding for better layout
        >
          <h2 className="m-0 font-bold leading-[1.15] tracking-[-0.015em] text-[34px] sm:text-[42px] xlg:text-[54px]">
            <span className="cursor-target text-[#111]">Experience </span>
            <span className="cursor-target text-antragold">The Art Of Interior</span>
            <br />
            <span className="cursor-target text-[#111]">Design</span>
          </h2>

          <p className="max-w-[550px] text-[18px] leading-[1.8] text-[#555] pt-6">
            We specialize in transforming visions into reality. <br />
            Explore our portfolio of innovative architectural and interior design
            projects crafted with precision.
          </p>
        </motion.div>
      </div>

      {/* ✅ Product Row */}
<div className="mt-16">
  <h3 className="text-2xl font-bold mb-6">Featured Products</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {products.map((p) => (
      <div key={p.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
        <img
          src={p.images.edges[0]?.node.src}
          alt={p.images.edges[0]?.node.altText || p.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h4 className="font-semibold text-lg">{p.title}</h4>
        <p className="text-sm text-gray-500 line-clamp-2">{p.description}</p>
        <p className="mt-auto font-bold">
          {p.priceRange.minVariantPrice.amount}{" "}
          {p.priceRange.minVariantPrice.currencyCode}
        </p>
      </div>
    ))}
  </div>
</div>

    </section>
  );
}