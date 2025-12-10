import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer SEU_TOKEN`,
  },
};

export const useFetch = (url) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const buscarDados = async () => {

      try {
        
        const resposta = await fetch(url, options).then((resposta) => resposta.json());
        setDados(resposta);

      } catch (error) {
        console.log("Erro ao buscar dados: ", error);
      }

    };

    buscarDados();
  }, [url]);

  return { dados };
};