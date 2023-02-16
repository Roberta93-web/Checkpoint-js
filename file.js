const inputCerca = document.getElementById("inputcerca");
const button = document.getElementById("btn");
const divContenitore = document.getElementById("contenitore");

async function cercaPokemon(){
    try {
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${inputCerca.value}`);
        const dati = await res.json();
        return dati;
    } catch (error){
        console.log("Error: Pokemon non trovato!")
        divContenitore.innerHTML = `Errore: Pokemon non trovato`
    }
}

const infoPrincipali = async () => {
    const dati = await cercaPokemon();

    const nome = document.createElement("P")
    nome.innerHTML = `Il nome del Pokemon è: ${dati.name}`
    divContenitore.appendChild(nome);

    const img = document.createElement("img");
    img.src = dati.sprites.front_default;
    divContenitore.appendChild(img);

    const experience = document.createElement("p");
    experience.innerHTML = `Le esperienze di base sono: ${dati.base_experience}`
    divContenitore.appendChild(experience);

    const abilita = document.createElement("p");
    dati.abilities.forEach((item) => {
        abilita.innerText += item.ability.name + ` `})
    divContenitore.appendChild(abilita)

}


button.addEventListener("click", infoPrincipali)