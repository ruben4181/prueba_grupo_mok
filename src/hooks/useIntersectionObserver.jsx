import { useEffect, useRef, useState } from "react";

//Hook generico que permite saber si un elemento está dentro
//Del viewport o por fuera, recibe como párametro las opciones
//Que se le van a asignar a la API del IntersectionObserver
//Retorna la referencia al objeto que se desea observar
//Y un boolean que indica si está interceptado o no en el ViewPort

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      });
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(targetRef.current);
      }
    };
  }, [options]);

  return { targetRef, isIntersecting };
};

export default useIntersectionObserver;
