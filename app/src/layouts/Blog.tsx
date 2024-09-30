"use client";

import blog1 from "@/assets/blog1.png";
import blog2 from "@/assets/blog2.png";
import blog3 from "@/assets/blog3.png";
import blog4 from "@/assets/blog4.png";

import BlogCard from "@/components/BlogCard";

export default function Blog() {
  const posts = [
    {
      image: blog1,
      title: "Curio Wellness™",
      description:
        "Fuji is a Hybrid cross of Larry OG and Kurple Fantasy. Fuji's dominant terpenes are Limonene, Caryophyllene, and Myrcene which may leave the user feeling uplifted, sleepy, or tingly. Packaging may vary by state. Maryland packaging shown.",
    },
    {
      image: blog2,
      title: "Once upon a High Time",
      description:
        "Readers will discover new tales that feel old and old tales that feel new—and throughout them all, the friendly, familiar, surprising presence of cannabis",
    },
    {
      image: blog3,
      title: "The Environmental Impact of Cannabis Cultivation",
      description:
        " Investigate the ecological footprint of cannabis farming and explore sustainable cultivation practices in the industry.",
    },
    {
      image: blog4,
      title:
        "Navigating Cannabis Industry Regulations: A Guide for Entrepreneurs",
      description:
        "Offer insights into the complex regulatory landscape of the cannabis industry and how new businesses can ensure compliance.",
    },
  ];

  return (
    <section className="mb-10">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold leading-relaxed text-gray-500 md:text-5xl">
          Latest Blogs
        </h2>
        <p className=" py-5 text-base font-medium text-gray-300 md:text-lg">
          Our blog is your trusted companion in navigating the diverse and
          ever-evolving world of cannabis. We write about everything from the
          art and science of cultivation to the latest market trends and beyond.
          Whether you're a curious newcomer, a seasoned enthusiast, or an
          industry professional, our content caters to all levels of expertise
          and interest.
        </p>
      </div>
      <div className="flex flex-col py-10">
        <div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {posts.map((post, index) => (
              <BlogCard
                key={index}
                image={post.image}
                title={post.title}
                description={post.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
