import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function ProductsPage() {
  const products = [
    {
      name: "Mac Book Pro",
      description: "13-inch, 8GB RAM, 256GB SSD",
      price: 1800.99,
      image_url: "https://m.media-amazon.com/images/I/81rNO0tZ+EL.jpg",
    },
    {
      name: "iPhone 16 Pro Max",
      description: "512GB, Pacific Blue",
      price: 1199.99,
      image_url:
        "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-16-pro-max/common/common-5.png",
    },
    {
      name: "AirPods Max",
      description: "Space Gray",
      price: 498.99,
      image_url:
        "https://i5.walmartimages.com/asr/b72db236-724f-4db2-aca7-91f83182d7fe.5bfc1f7fdafedcdacacc5339e7a9baaa.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    },
  ];

  return (
    <main>
      <ProductsNew />
      <ProductsIndex products={products} />
    </main>
  );
}
