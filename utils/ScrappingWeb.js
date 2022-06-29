// Scrapper la page des codes http de wikipédia
// et ressortir un object avec les codes et leur signification
// en utilisant l'object Scrapper
const Scrapper = require("./Scrapper");

const scrap = new Scrapper(
    "https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP",
    {},
    ({ object: document }) => {
        const rows = document.querySelectorAll("table.wikitable tr:not(:first-child) th, table.wikitable tr:not(:first-child) td:first-of-type");
        let object = {};
        
        for(let index=0; index < rows.length; index += 2) object[rows[i].textContent.trim()] = rows[i + 1].textContent.trim();

        console.log(object);
    }
);

scrap.send();