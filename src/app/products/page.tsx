import { ProductDialog } from "@/components/product-dialog";
import Balancer from "react-wrap-balancer";

export type Product = {
  id: number;
  name: string;
  shippingDays: number;
  price: number;
  currency: string;
  description: string;
  features: string[];
  image: string;
  imageDetail: string;
  color: Color | null
};

export type Color = Record<string, string>;

const products: Product[] = [
  {
    id: 1,
    name: "Plain Shipping Box",
    shippingDays: 8,
    price: 1.66,
    currency: "EUR",
    description:
      "Send your Merch Packs in an unprinted cardboard box with a sticker with your company logo. We will choose the size that is perfect for the items in your Pack.",
    features: [],
    image: "/images/product-1.jpg",
    imageDetail: "/images/product-1-detail.jpg",
    color: null
  },
  {
    id: 2,
    name: "Shipping Box with Sticker",
    shippingDays: 8,
    price: 2.35,
    currency: "EUR",
    description:
      "Send your Merch Packs in an unprinted cardboard box with a sticker with your company logo. We will choose the size that is perfect for the items in your Pack.",
    features: [],
    image: "/images/product-2.jpg",
    imageDetail: "/images/product-2-detail.jpg",
    color: {
        brown: "#A89A8A",
        white: "#FFFFFF",
    }
  },
  {
    id: 3,
    name: "Printed Shipping Box",
    shippingDays: 18,
    price: 2.71,
    currency: "EUR",
    description:
      "Introduce your brand in style with our Printed Shipping Box. Crafted with a focus on sustainability, this Merch Box is predominantly made from recycled materials and is fully recyclable. Choose from various eco-friendly options to further enhance its sustainability. Rest assured, we'll select the ideal format that perfectly accommodates the items in your Pack. ",
    features: [
      "Made from recycled materials, promoting environmental consciousness",
      "Fully recyclable, reducing waste and supporting a circular economy",
      "Customizable design options to showcase your brand effectively",
      "Tailored format selection to accommodate your specific packaging needs",
    ],
    image: "/images/product-3.jpg",
    imageDetail: "/images/product-3-detail.jpg",
    color: {
        brown: "#A89A8A",
        white: "#FFFFFF",
    }
  },
  {
    id: 4,
    name: "Full Color Sleeved Box",
    shippingDays: 18,
    price: 3.42,
    currency: "EUR",
    description:
      "Crafted from high-quality recycled materials, this box is not only environmentally friendly but also fully recyclable. With customizable options available, we will ensure that the format of the box perfectly complements the items in your Pack. Choose sustainability without compromising on style.",
    features: [
      "High-quality printing to bring your brand to life",
      "Fully recyclable, reducing waste and supporting a circular economy",
      "Made from recycled materials for a greener choice",
      "Customizable options to suit your specific needs",
    ],
    image: "/images/product-4.jpg",
    imageDetail: "/images/product-4-detail.jpg",
    color: null
  },
  {
    id: 5,
    name: "Full Color Shipping Box",
    shippingDays: 18,
    price: 7.01,
    currency: "EUR",
    description:
      "This printed Merch Box design not only showcases your brand effectively but also contributes to a sustainable future. Crafted predominantly from recycled materials, this fully recyclable box offers extra sustainable options for your eco-conscious business. Rest assured, we'll select the perfect format to accommodate all the items in your Pack.",
    features: [
      "Printed Merch Box design for maximum brand exposure",
      "Made from recycled materials, promoting sustainability",
      "Fully recyclable, reducing environmental impact",
      "Customizable formats to suit your specific packaging needs",
    ],
    image: "/images/product-5.jpg",
    imageDetail: "/images/product-5-detail.jpg",
    color: null
  },
];

export default function Page() {
  return (
    <main className="min-h-dvh bg-white">
      <div className="flex items-center flex-col gap-10 justify-center max-w-[1440px] pt-5 pb-10">
        <div className="flex flex-col gap-2 text-center font-medium">
          <h3 className="text-2xl font-bold">Products</h3>
          <p className="text-sm">
            <Balancer>
              Choose the products that you want to include in your pack.
            </Balancer>
          </p>
        </div>
        <div className="w-[80%] flex items-center justify-center">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
            {products.map((product, i) => (
              <ProductDialog product={product} key={i} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
