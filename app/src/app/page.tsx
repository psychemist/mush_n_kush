import Partnership from "@/components/Partnership";
import Banner from "@/layouts/Banner";
import Blog from "@/layouts/Blog";
import Cards from "@/layouts/Carousel";
import ContactUs from "@/layouts/ContactUs";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import Newsletter from "@/layouts/Newsletter";
import Services from "@/layouts/Services";
import Product from "@/layouts/Product";
import { Cart } from "@/components/Cart";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Partnership />
      <Services />
      <Product />
      {/* <Cart isOpen={false} closeCart =()=>{} removeFromCart
  cartItems,
  removeFromCart,
  updateQuantity,
  clearCart, /> */}
      <ContactUs />
      <Blog />
      <Newsletter />
      <Footer />
    </>
  );
}
