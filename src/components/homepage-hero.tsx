import Balancer from "react-wrap-balancer";
import styles from "./homepage-hero.module.css";
import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const products = [
  "/images/sealed-bag.jpg",
  "/images/sealed-box.jpg",
  "/images/sealed-cups.jpg",
  "/images/sealed-flatcard.jpg",
  "/images/sealed-tshirt.jpg",
];

export function HomepageHero() {
  return (
    <div className="flex max-w-[1440px] px-9 md:flex-row flex-col mx-auto">
      <div className="flex flex-col gap-5 pt-8">
        <h1 className="sm:text-[4.625rem] text-[2rem] font-bold text-pretty sm:leading-[80px]">
          <Balancer>Your custom print and packaging partner</Balancer>
        </h1>
        <p className="sm:text-2xl text-lg">
          <Balancer>
            We enable brands to order high-quality custom packaging, merch and
            apparel quickly and efficiently.
          </Balancer>
        </p>
        <div className="flex flex-col gap-3 pt-4">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4" />
            <p className="text-sm">Quote within 24 hours</p>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4" />
            <p className="text-sm">Competitive Price-Supplier Matching</p>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4" />
            <p className="text-sm">End-to-End Order Management</p>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4" />
            <p className="text-sm">Free Dedicated Consultant</p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col sm:items-center gap-3 pt-6">
          <Link href="/products">
            <Button className="sm:w-[236px] w-full h-[50px]">
              Select Products
            </Button>
          </Link>
          <a href="https://wa.me/+971503669644" target="_blank" rel="noopener">
            <Button
              variant="outline"
              className="sm:w-[236px] w-full h-[50px] border-primary"
            >
              Schedule Call
            </Button>
          </a>
        </div>
      </div>

      {/* Products list in infinite vertically scrolled animation */}
      <div
        className={cn(
          styles.container_list,
          "xl:w-[820px] w-full md:h-auto h-[500px] sm:h-[600px] sm:pt-0 pt-[100px]"
        )}
      >
        <div className={cn(styles.products_content, "h-full")}>
          <div className={styles.products_blur_effect_top} />
          <div
            className={cn(
              styles.products_list,
              "items-center justify-center md:items-end md:justify-end"
            )}
          >
            <div className={cn(styles.products_row)}>
              {products.map((item, index) => {
                return (
                  <div
                    key={`${item}-${index}`}
                    className={cn(styles.products_item, "relative w-full")}
                  >
                    <Image
                      src={item}
                      width={230}
                      height={280}
                      alt="Sealed logo header"
                      className="rounded-lg"
                    />
                  </div>
                );
              })}
              {products.map((item, index) => {
                return (
                  <div
                    key={`${item}-${index}`}
                    className={cn(styles.products_item, "relative w-full")}
                  >
                    <Image
                      src={item}
                      width={230}
                      height={280}
                      alt="Sealed logo header"
                      className="rounded-lg"
                    />
                  </div>
                );
              })}
            </div>
            <div className={cn(styles.products_row)}>
              {products.map((item, index) => {
                return (
                  <div
                    key={`${item}-${index}`}
                    className={cn(styles.products_item, "relative w-full")}
                  >
                    <Image
                      src={item}
                      width={230}
                      height={280}
                      alt="Sealed logo header"
                      className="rounded-lg"
                    />
                  </div>
                );
              })}
              {products.map((item, index) => {
                return (
                  <div
                    key={`${item}-${index}`}
                    className={cn(styles.products_item, "relative w-full")}
                  >
                    <Image
                      src={item}
                      width={230}
                      height={280}
                      alt="Sealed logo header"
                      className="rounded-lg"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.products_blur_effect_bottom} />
        </div>
      </div>
    </div>
  );
}
