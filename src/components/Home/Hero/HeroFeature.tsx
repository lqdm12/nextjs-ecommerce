import React from "react";
import Image from "next/image";

const featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Frete Grátis",
    description: "Em compras acima de R$ 200",
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "Devoluções Simples",
    description: "Cancelamento até 1 dia após compra",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "Pagamentos Seguros",
    description: "Garantia de transações seguras",
  },
  {
    img: "/images/icons/icon-04.svg",
    title: "Suporte 24/7",
    description: "Sempre à disposição",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-[1060px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-wrap items-center gap-7.5 xl:gap-12.5 mt-10">
        {featureData.map((item, key) => (
          <div className="flex items-center gap-4" key={key}>
            <Image src={item.img} alt="icons" width={40} height={41} />

            <div>
              <h3 className="font-medium text-lg text-dark">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
