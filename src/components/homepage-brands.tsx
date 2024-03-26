import Balancer from "react-wrap-balancer";
import styles from "./homepage-brands.module.css";
import Image from "next/image";

const brands = [
  `/images/brands_hugo_boss.svg`,
  `/images/brands_emirates_palace.png`,
  `/images/brands_icd_brookfield_place.png`,
  '/images/brands_art_dubai.png',
  '/images/brands_dubai_future_foundation.webp',
  '/images/brands_spotify.webp',
  '/images/brands_pistachoux.png',
  '/images/brands_zenon.png',
  '/images/brands_national_pavilion.png',
  '/images/brands_cinema_akil.png',
  '/images/brands_prime_gourment.png',
  '/images/brands_fyne.png',
  '/images/brands_kim_kimmy.png',
  '/images/brands_mille.png',
  '/images/brands_letswork.webp',
  '/images/brands_ziina.png',
  '/images/brands_melange.png'
];

export function HomepageBrands() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 pb-10">
      <div className="pt-20 px-9 flex flex-col text-center items-center justify-center">
        <h3 className="font-semibold text-xl">
          <Balancer>Trusted by 200+ brands in MENA</Balancer>
        </h3>
        <p className="text-[0.875rem]">
          <Balancer>From startups to industry giants</Balancer>
        </p>
      </div>
      <div className={styles.brands_container}>
        <div className={styles.brands_content}>
          <div className={styles.brands_list}>
            <div className={styles.brands_row}>
              {[...brands, ...brands].map((brand, index) => (
                <div key={index} className={styles.brands_item}>
                  <Image
                    src={brand}
                    alt={`Brand ${index + 1}`}
                    width={240}
                    height={120}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
