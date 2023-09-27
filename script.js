
document.addEventListener("DOMContentLoaded", function(){

    fetch('Nikola-Tesla.json')

        .then(response => response.json())
        .then(data => {
            
            let tesla = '';

            data.NikolaTesla.forEach(nikola => {

                tesla += ` <img src="${nikola.Image}"> `;

            });
            document.getElementById('main').innerHTML = tesla;
        })
        .catch(error = console.error('Error to load the images: ', error));
});
