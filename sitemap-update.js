const fs = require('fs');
const fetch = require('node-fetch');
const moment = require('moment');
const { parseString, Builder } = require('xml2js');

const hostBaseURL = 'https://tenerifebuggies.com';
const getExperiencesListURL = 'https://api.venntur.com/makers/1556b08a-9a6c-11ee-96b3-0a30d442b088/experiences';

const untrackedExperiencesUrlsList = [];
var page = 1;
var itemsPerPage = 100;
var allExperiences = [];
var totalItems = 0;

gettingExperiences = async () => {

    const url = getExperiencesListURL;

    const res = await fetch(url);
    const dataJSON = await res.json();

    totalItems = dataJSON['hydra:totalItems']

    dataJSON['hydra:member'].forEach(experience => {
        allExperiences.push(experience);
    });

    // Verifica si hay más resultados disponibles
    if (page * itemsPerPage < totalItems) {
        page++;
        gettingExperiences();
    } else {
        fetchExperiencesList();
    }

};

const fetchExperiencesList = async () => {
    try {
        // const res = await fetch(getExperiencesListURL);
        // const dataJSON = await res.json();

        if (Array.isArray(allExperiences)) {
            allExperiences.forEach(element => {
                const modifiedURL = element.slug;
                untrackedExperiencesUrlsList.push(`${hostBaseURL}/${modifiedURL}`);
            });
            filterUniqueURLs1();
        } else {
            console.log('La respuesta de la API no es un arreglo válido.');
        }
    } catch (error) {
        console.log(error);
    }
};

const filterUniqueURLs1 = () => {
    fs.readFile('src/experiences-sitemap.xml', (err, data) => {
        if (data) {
            const xml = data.toString();

            parseString(xml, (err, result) => {
                if (err) {
                    console.log('Error al analizar el archivo XML:', err);
                    return;
                }

                const existingURLs = [];
                result.urlset.url = [];

                untrackedExperiencesUrlsList.forEach(url => {
                    if (!existingURLs.includes(url)) {
                        result.urlset.url.push({
                            loc: [url],
                            changefreq: ['weekly'],
                            priority: ['0.7'],
                            lastmod: [moment().format('YYYY-MM-DDTHH:mm:ssZ')],
                            'xhtml:link': {
                                $: {rel: ['alternate'], hreflang: ['en'], href: "https://web-preview-b.aititubi.es"}
                            }
                        });
                    }
                });

                const builder = new Builder({ renderOpts: { pretty: true } });
                const newXml = builder.buildObject(result);

                saveNewSitemap1(newXml);
            });
        }
    });
};

const saveNewSitemap1 = xml => {
    fs.writeFile('src/experiences-sitemap.xml', xml, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('¡El sitemap de experiencias se guardó correctamente!');
        }
    });
};

gettingExperiences();