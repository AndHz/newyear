"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const images = [
    { src: "/photo1.jpg", alt: "Foto 1", text: "La primera captura que te tome jijiji hermosaaa", width: 600, height: 400 },
    { src: "/photo2.jpg", alt: "Foto 2", text: "La primera rutina de skincare o mascarillas (no tengo mi foto sorry)", width: 600, height: 400 },
    { src: "/photo3.jpg", alt: "Foto 3", text: "Nuestro primer mes y 'cena' juntos", width: 600, height: 400 },
    { src: "/photo4.jpg", alt: "Foto 4", text: "Un día en el parque junto a mi amada señorita", width: 600, height: 400 },
    { src: "/photo5.jpg", alt: "Foto 5", text: "Un dia descubriendo más sobre ti y tus gustos 'raritos' jajajaj me encantas", width: 600, height: 400 },
    { src: "/photo6.jpg", alt: "Foto 6", text: "Segunda rutina de skincare ese dia tu te veías graciosa jajajaja", width: 600, height: 400 },
    { src: "/photo7.jpg", alt: "Foto 7", text: "Tercera rutina de skincare no te pude dar besitos por esa mascarilla para labios >:v", width: 600, height: 400 },
    { src: "/photo8.jpg", alt: "Foto 8", text: "La primera vez comiendo sushi con mi princesa", width: 600, height: 400 },
    { src: "/photo9.jpg", alt: "Foto 9", text: "Probando croissants rellenos y degustando de un buen café", width: 600, height: 400 },
  ];

  const toggleImage = (index: number) => {
    setActiveImage(activeImage === index ? null : index);
  };

  // Función para generar corazones flotantes
  const generateHearts = () => {
    const hearts = [];
    for (let i = 0; i < 10; i++) {
      const top = Math.random() * 100 + "%";
      const left = Math.random() * 100 + "%";
      const animationDelay = Math.random() * 5 + "s";
      hearts.push(
        <Image src="/corazon.png" alt="Corazón" className="heart" width={50} height={50} style={{
          position: "absolute",
          top,
          left,
          animationDelay,
          width: "50px",
          height: "50px",
        }} />
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
        <h1 className="title text-rose-600">Nuestro pequeño viaje Juntos</h1>
        <p className="texto1 text-rose-400">
          Recordando algunos momentos de estos ultimos meses del año con usted mi niña hermosa &quot; SARITA &quot;
        </p>
        <p className="textop text-white">
          Reproduce el siguiente video y continua revisando esta humilde pagina
        </p>
      </header>

      {/* Reproductor de video */}
      <div className="w-full max-w-4xl mb-8">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/k8O2d7nh3s4?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="shadow-lg"
        ></iframe>
      </div>

      {/* Galería Interactiva */}
      <section className="w-full max-w-4xl text-center">
        <h2 className="text-2xl font-semibold mb-4 text-rose-500">Pequeña Galería &quot; click en los botones &quot;</h2>
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
            Sé que pasamos por muchas cosas más juntos y cometimos locuras juntos.
            Lamentablemente no guarde fotos o videos sobre las cosas que pasamos y solo 
            preferí disfrutar el momento a tu lado, pero aún tengo en mi memoria, la primera vez en el cine,
            las despedidas eternas en Parra, el primer KFC en mall plaza con alitas BBQ que no te gustaron, 
            los frappes en Valenzuela a un precio cómodo jajaja, la primera vez que fui a tu trabajo en mall plaza, el frappe de lúcuma que te gusto
            , Halloween el mejor halloween que tuve en mi vida, la primera noche que dormimos juntos aunque pudieron ser dos pipipi perdón, 
            las caminatas hacia tu instituto, el segundo aniversario y el hermoso collar que me diste muchas gracias, el helado en artika, cuando fuimos a pasear a roki pipipi, 
            probando la pizza en Caesars, entre otras muchas cosas más; se que quedaron muchas cosas pendientes como el museo o ir a una feria y las alitas BBQ de la mas alta calidad, 
            pero creo que tenemos tiempo suficiente para disfrutar de eso
             y muchos más. Espero que este nuevo año nos vaya mejor en todo y seamos mejores
            personas y una muy bonita pareja. Te amo mucho, gracias por estar en mi vida y quisiera que
            este año podamos estar mas unidos y dejar las cosas malas que hicimos el año
            pasado atrás. Quiero hacer bien las cosas a tu lado, mi vida eres una chica maravillosa
             esplendida en muchos aspectos y así como todos tambien tienes tus defectos pero eso no te hace mala al contrario 
             te hace unica y muy especial en este mundo y solo te quiero a ti, se que será muy dificil y pasaremos por muchas cosas y altibajos
              pero espero y confio a Dios a que nos de fuerza y muchas bendiciones y hacer que esta historia sea para mucho rato &quot; hasta el infinito y el más allá &quot;. ❤️❤️TE AMOOOO Y FELIZ AÑO NUEVO MI AMOOOR MUA MUA MUA❤️❤️
          </h2>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-8 text-rose-600">
        <p>Creado con ❤️ por André tu King jejeje</p>
      </footer>
    </div>
  );
}
