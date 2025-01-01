"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const images = [
    { src: "/photo1.jpg", alt: "Foto 1", text: "La primera captura que te tome jijiji", width: 600, height: 400 },
    { src: "/photo2.jpg", alt: "Foto 2", text: "La primera rutina de skincare o mascarillas (no tengo mi foto sorry)", width: 600, height: 400 },
    { src: "/photo3.jpg", alt: "Foto 3", text: "Nuestro primer mes y &quot;cena&quot; juntos", width: 600, height: 400 },
    { src: "/photo4.jpg", alt: "Foto 4", text: "Un día en el parque junto a mi amada señorita", width: 600, height: 400 },
    { src: "/photo5.jpg", alt: "Foto 5", text: "Un dia descubriendo más sobre ti y tus gustos &quot;raritos&quot; jajajaj me encantas", width: 600, height: 400 },
    { src: "/photo6.jpg", alt: "Foto 6", text: "Segunda rutina de skincare ese dia tu te veias graciosa jajajaja", width: 600, height: 400 },
    { src: "/photo7.jpg", alt: "Foto 7", text: "Tercera rutina de skincare no te pude dar besitos por esa mascarilla para labios &gt;:v", width: 600, height: 400 },
    { src: "/photo8.jpg", alt: "Foto 8", text: "La primera vez comiendo sushi con mi princesa", width: 600, height: 400 },
    { src: "/photo9.jpg", alt: "Foto 9", text: "Probando croissants rellenos y degustando de un buen café", width: 600, height: 400 },
  ];

  const toggleImage = (index: number) => {
    setActiveImage(activeImage === index ? null : index);
  };

  // Función para generar corazones flotantes (con <Image />)
  const generateHearts = () => {
    const hearts = [];
    for (let i = 0; i < 10; i++) {
      const top = Math.random() * 100 + "%";
      const left = Math.random() * 100 + "%";
      const animationDelay = Math.random() * 5 + "s";
      hearts.push(
        <Image
          key={i}
          src="/corazon.png"
          alt="Corazón"
          width={50}
          height={50}
          className="heart"
          style={{
            position: "absolute",
            top,
            left,
            animationDelay,
          }}
        />
      );
    }
    return hearts;
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center p-6 gap-12">
      {/* Corazones flotantes */}
      {generateHearts()}

      {/* Header */}
      <header className="text-center">
        <h1 className="title text-rose-600">Nuestro Viaje Juntos</h1>
        <p className="texto1 text-rose-400">
          Recordando algunos momentos de estos meses con usted mi niña hermosa &quot;SARITA&quot;
        </p>
      </header>

      {/* Galería Interactiva */}
      <section className="w-full max-w-4xl text-center">
        <h2 className="text-2xl font-semibold mb-4 text-rose-500">Galería Interactiva</h2>
        <div className="space-y-4">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <button
                onClick={() => toggleImage(index)}
                className="w-full max-w-md p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-rose-100"
                style={{ background: "var(--foreground)", color: "var(--background)" }}
              >
                {image.text}
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  activeImage === index ? "max-h-[800px]" : "max-h-0"
                }`}
              >
                {activeImage === index && (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="rounded-lg mt-4 shadow-md"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mensaje */}
      <section>
        <div className="texto space-y-4 text-rose-400">
          <h2>
            Sé que pasamos por muchas cosas más juntos y cometimos locuras juntos,
            tomando malas decisiones. Espero este año ambos reflexionemos juntos y seamos mejores
            personas. Te amo mucho, gracias por aparecer en mi vida y quisiera que
            este año podamos estar juntos y dejar las cosas malas que hicimos el año
            pasado. Quiero hacer bien las cosas a tu lado, mi vida. TE AMOOOO MUA MUA MUA
          </h2>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-8 text-rose-600">
        <p>Creado con ❤️ por André</p>
      </footer>
    </div>
  );
}
