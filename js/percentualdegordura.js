// ? neck and waist in cm
// ! Body fat percentage calculator (gender,height,weight,neck,waist,hip==>for females)

function percentualgordura() {

    let gender = document.getElementById("gender").value;
    let weight = parseInt(document.getElementById("peso1").value);
    let height = parseInt(document.getElementById("altura1").value);
    let neck = parseInt(document.getElementById("pescoco").value);
    let waist = parseInt(document.getElementById("cintura").value);
    let hip = parseInt(document.getElementById("quadril").value);

    const BFP = (gender, height, weight, neck, waist, hip) => {
        try {
            // ! handling missing params
            if (!gender) throw "Gênero não informado.";
            if (!height || typeof height != "number")
                throw "Altura não informada ou não é um número";
            if (!weight || typeof height != "number")
                throw "Peso não informado ou não é um número";
            if (!neck || typeof neck != "number") throw "Circunferência do pescoço não informada ou não é um número.";
            if (!waist || typeof waist != "number")
                throw "Cintura não informada ou não é um número";

            // ! handling wrong genders
            if (gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female")
                throw "O gênero deve ser 'male' ou 'female'.";
            // ! actual calculation
            if (gender.toLowerCase() === "male") {
                return (495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height))) - 450;
            } else if (gender.toLowerCase() === "female") {
                if (!hip || typeof hip != "number") throw "Quadril não informado ou não é um número";
                return (495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.221 * Math.log10(height))) - 450;
            }
        } catch (error) {
            return error;
        }
    };
    alert("O seu percentual de gordura corporal é de: " + BFP(gender, height, weight, neck, waist, hip) + "%");
}
