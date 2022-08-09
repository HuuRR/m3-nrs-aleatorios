import "./style.css";

function Nice({ number }) {
  console.log(number);
  if (number > 85 && number < 100) {
    return <spam className="uau"> 🌈 Uau, quanta motivação! 🦄 </spam>;
  } else if (number === 100) {
    return <spam className="uau"> 🤩 Você é a sua melhor versão! 🤑 </spam>;
  } else if (number < 40 && number > 10) {
    return <spam className="uau"> 😐 Melhor nem sair da cama! 😣 </spam>;
  } else if (number <= 10 && number > 3) {
    return <spam className="uau"> ⚰️ Um bom dia para morrer! 💀 </spam>;
  } else if (number <= 85 && number >= 40) {
    return <spam className="uau"> ¯\_(ツ)_/¯ </spam>;
  } else if (number <= 3) {
    return <spam className="uau"> 🔪 Forca? Veneno? 💊 </spam>;
  } else if (number === 69) {
    return <spam className="uau"> 🥒 HUMMMM, SECSO 🍆 </spam>;
  }
}

export default Nice;
