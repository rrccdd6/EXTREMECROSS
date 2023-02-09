
function calculateBAC() {
  let gender = document.getElementById("gender2").value;
  let weight = parseFloat(document.getElementById("peso2").value);
  let timeSinceLastDrink = parseFloat(document.getElementById("tempo2").value);
  let consumptionData = {
      beer: parseInt(document.getElementById("beer").value),
      wine: parseInt(document.getElementById("wine").value),
      liquor: parseInt(document.getElementById("liquor").value),
      other: [parseInt(document.getElementById("otherAmount").value), parseInt(document.getElementById("otherStrength").value)],
  };

  const BAC = (gender, weight, timeSinceLastDrink, consumptionData) => {
      const strength = {
          beer: 5,
          wine: 12,
          liquor: 40,
          other: consumptionData.other[1],
      };

      // Verifica se todos os dados necessários foram informados
      if (!gender) {
          return "Gênero não informado.";
      }
      if (!weight || typeof weight !== "number") {
          return "Peso não informado.";
      }
      if (!timeSinceLastDrink || typeof timeSinceLastDrink !== "number") {
          return "Tempo desde o último drink não informado.";
      }
      if (!consumptionData || typeof consumptionData !== "object") {
          return "Dados de consumo não informados.";
      }

      // Verifica se o gênero informado é válido
      if (gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female") {
          return "O gênero precisa ser homem ou mulher.";
      }

      // Calcula o total de álcool consumido
      const totalConsumption =
          consumptionData.beer * (strength.beer / 100) +
          consumptionData.wine * (strength.wine / 100) +
          consumptionData.liquor * (strength.liquor / 100) +
          consumptionData.other[0] * (strength.other / 100);

      // Calcula e retorna a concentração de álcool no sangue (BAC)
      if (gender.toLowerCase() === "male") {
          return (totalConsumption / (weight * 1000 * 0.68)) * 100 - timeSinceLastDrink * 0.015;
      } else if (gender.toLowerCase() === "female") {
          return (totalConsumption / (weight * 1000 * 0.55)) * 100 - timeSinceLastDrink * 0.015;
      }
  };

  const result = BAC(gender, weight, timeSinceLastDrink, consumptionData);
  alert("O seu percentual de alcool no sangue é de: " + result.toFixed(2) + "%")
}

/*document.getElementById("result2").innerHTML = result.toFixed(2) + "%";*/