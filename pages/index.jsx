import GridNums from "@/components/Grid";
import { useState } from "react";

export default function MegaSena() {
  let [quantidade, setQuantidade] = useState(5);
  let [numeros, setNumeros] = useState([]);
  const [apagarNumerosAntigos, setApagarNumerosAntigos] = useState(false);
  let nums = [0, 0, 0, 0, 0];

  let gerarNumeros = () => {
    let novosNumeros = []
    if (apagarNumerosAntigos) {
      setNumeros([]);
    }

    // Crie um objeto para armazenar os números gerados.
    const numerosGerados = {};

    // Gere números aleatórios até que todos os números tenham sido gerados.
    let i = 0;
    while (i < quantidade) {
      const num = Math.floor(Math.random() * 60) + 1;

      // Verifique se o número já foi gerado.
      if (!numerosGerados[num]) {
        // Adicione o número ao objeto de números gerados.
        numerosGerados[num] = true;

        // Adicione o número à array de novos números.
        novosNumeros[i] = num;

        i++;
      }
    }

    // Defina a array de números com os novos números gerados.
    setNumeros(novosNumeros);
  };

  return (
    <main className="h-screen w-screen bg-white text-black flex flex-col items-center justify-center">
      <h1 className="text-5xl mb-8">Gere numeros para jogar na Mega Sena</h1>
      <form>
        <label className="flex items-center">
          <p className="mr-4">Quantos numeros você quer?</p>
          <input
            className="border-2 border-solid border-black box-border p-2"
            type="text"
            name="quantidade"
            value={quantidade}
            onChange={(e) => {
              setQuantidade(e.target.value);
              setApagarNumerosAntigos(false);
            }}
          />
        </label>
      </form>
      <GridNums nums={numeros} />
      <button
        className="border-2 border-solid border-gray-500 mt-4 p-2 rounded-lg bg"
        onClick={() => {
          gerarNumeros();
          setApagarNumerosAntigos(true);
        }}
      >
        Gerar numeros
      </button>
    </main>
  );
}
