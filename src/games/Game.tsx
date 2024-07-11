import { Fragment } from "react/jsx-runtime";
import MediaSLider, { mediaElement } from "../component/MediaSlider";
import useViewBox from "../hooks/useViewBox";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

type gameProps = {
  name: string;
  media: mediaElement[];
  headerDesc?: string;
  className?: string,
  description: string;
};

function Game({ name, media, headerDesc, description, className }: gameProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useViewBox(ref);

  return (
    <article className={twMerge("relative flex justify-center overflow-hidden items-center py-20 px-7 gap-40 lg:gap-20 xmd:flex-col bg-gradient-to-r from-[rgba(31,2,68,.4)] from-65% to-[rgba(0,240,255,.3)]", className)}>
      <div className="flex, flex-col gap-28 lg:w-full">
        <h3 className="text-[2rem] font-extrabold text-c-teal italic [text-shadow:2px_2px_3px_#00F0FF]">{name}</h3>
        <MediaSLider startIndex={0} className="w-[30rem] h-96 lg:w-full">
          {media.map((element) => {
            const type = element.type;
            if (element.src.includes("youtube")) {
              return (
                <Fragment key={element.src}>
                  {type === "image" ? (
                    <img
                      src={element.src}
                      alt={element.alt}
                      loading="lazy"
                      className="top-1/2 -translate-y-1/2 w-full h-80 object-fill rounded-tl-2xl rounded-xl shadow-[0px_5px_15px_0px]"
                    />
                  ) : (
                    <iframe
                      className="top-1/2 -translate-y-1/2 w-full h-80 object-fill rounded-tl-2xl rounded-3xl"
                      src={element.src}
                      title={element.alt}
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"      
                      allowFullScreen
                    ></iframe>                   
                  )}
                </Fragment>
              );
            }
            else {
              return (
                <Fragment key={element.src}>
                  {type === "image" ? (
                    <img
                      src={element.src}
                      alt={element.alt}
                      loading="lazy"
                      className="top-1/2 -translate-y-1/2 w-full h-80 object-fill rounded-tl-2xl rounded-xl shadow-[0px_5px_15px_0px]"
                    />
                  ) : (                   
                    <video
                      controls                    
                      className="top-1/2 -translate-y-1/2 w-full h-80 object-fill rounded-tl-2xl rounded-3xl"                    
                    >
                      <source src={element.src} title={element.alt} />
                    </video>
                  )}
                </Fragment>
              );
            }            
          })}
        </MediaSLider>
      </div>

      <div ref={ref} className={`flex flex-col gap-12 w-[40rem] text-white transition-all duration-1000 ${ inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1/2" } md:w-full`}>
        <h4 className="text-[1.25rem] font-extrabold">{headerDesc}</h4>
        <p className="text-base">{description}</p>
      </div>
    </article>
  );
}

export default Game;
