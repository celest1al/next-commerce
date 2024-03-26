"use client";

import Image from "next/image";
import {
  Dialog,
  DialogCloseButton,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog";
import { Clock } from "lucide-react";
import Balancer from "react-wrap-balancer";
import type { Product } from "@/app/products/page";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";

interface ProductDialogProps {
  product: Product;
}

export function ProductDialog({ product }: ProductDialogProps) {
  const [open, setOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);

      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="relative flex flex-col rounded-lg border bg-[#faf7f2] border-black min-h-[300px] min-w-[237px] pb-6">
          <div className="top-0 p-2">
            <div className="rounded border border-[#6c757d] text-[#6c757d] p-2 flex justify-center items-center gap-2 w-[80px]">
              <Clock size={16} />
              <p className="text-[0.625rem]">{product.shippingDays} Days</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={237}
              height={237}
            />
          </div>
          <div className="flex flex-col items-center gap-1 px-5">
            <h4 className="text-sm font-semibold">
              <Balancer>{product.name}</Balancer>
            </h4>
            <p className="text-sm">
              From{" "}
              <span className="text-[#4E6C62] text-[0.875rem] font-semibold">
                € {product.price}
              </span>
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[80%] p-0 min-h-[80%] max-h-[90%] overflow-auto">
        <div className="grid grid-col-1 md:grid-cols-2">
          <div className="bg-[#faf7f2] px-5 pt-[46px] pb-9 flex flex-col items-center justify-center gap-5">
            <div className="flex items-center gap-2">
              <div className="rounded-2xl border border-[#6c757d] text-[#6c757d] py-2 px-5 flex justify-center items-center gap-2">
                <Clock size={20} />
                <p className="text-sm font-medium">
                  {product.shippingDays} Days Production
                </p>
              </div>
            </div>
            {/* Product image/gallery */}
            <div className="flex items-center justify-center">
              <Image
                src={imagePreview ?? product.imageDetail}
                alt={product.name}
                width={306}
                height={383}
              />
            </div>
          </div>
          <div className="bg-white pt-10 px-5 gap-7 pb-8 relative flex flex-col justify-between">
            <DialogCloseButton />
            {/* Product description */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h4 className="text-2xl font-semibold leading-[32px]">
                  <Balancer>{product.name}</Balancer>
                </h4>
                <p className="text-[#4E6C62] text-base leading-[24px] font-medium">
                  From € {product.price}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p>{product.description}</p>
                {product.features.length > 0 ? (
                  <div>
                    <p>Product features: </p>
                    <ul className="list-disc list-inside">
                      {product.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>

            {/* Product action */}
            <div className="flex flex-col gap-3">
              {/* Pick color section */}
              {product?.color ? (
                <div className="flex flex-col gap-2 pb-2">
                  <span className="font-bold text-lg text-[#4E6C62] leading-[28px]">
                    Colors
                  </span>
                  <div className="flex items-center gap-2">
                    {Object.entries(product.color).map(([_, hex], i) => (
                      <button
                        key={i}
                        className={cn(
                          "w-10 h-10 p-1 rounded-full border-[#DEE2E6] bg-white border-[3px]",
                          selectedColor === hex && "border-[#4E6C62]"
                        )}
                        onClick={() => setSelectedColor(hex)}
                      >
                        <div
                          className="w-full h-full rounded-full border-[#DEE2E6] border"
                          style={{ backgroundColor: hex }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Upload own design section */}
              <div className="flex flex-col w-full items-center justify-center">
                <Label
                  htmlFor="own-design"
                  className="cursor-pointer text-[#4E6C62] font-semibold"
                >
                  Choose you own design
                </Label>
                <Input
                  id="own-design"
                  type="file"
                  accept="image/*,.pdf"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              <div className="flex items-center justify-center w-full">
                <Button
                  className={cn(
                    "font-medium text-lg leading-[28px] min-h-[60px] flex items-center justify-center",
                    "bg-[#4E6C62] border-2 border-black rounded-sm w-full"
                  )}
                >
                  Add To Pack
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
