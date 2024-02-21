$(document).ready(function () {
    $('#btnObtenerPersonajes').click(function () {
        // Realiza la llamada Ajax a la API de Rick and Morty
        $.ajax({
            url: 'https://rickandmortyapi.com/api/character',
            method: 'GET',
            success: function (data) {
                // Manipula los datos obtenidos
                mostrarPersonajes(data.results);
            },
            error: function (xhr, status, error) {
                console.error('Error al obtener los personajes:');
                console.error('Status:', status);
                console.error('Error:', error);
            }
        });
    });

    function mostrarPersonajes(personajes) {
        // Limpia la lista de personajes
        $('#listaPersonajes').empty();

        // Agrega cada personaje a la lista con nombre e imagen
        personajes.forEach(function (personaje) {
            const listItem = $('<li>');
            listItem.append(`<strong>${personaje.name}</strong>`);
            
            // Verifica si el personaje tiene una imagen
            if (personaje.image) {
                const image = $('<img>');
                image.attr('src', personaje.image);
                image.attr('alt', personaje.name); 
                image.addClass('imagen-personaje')
                listItem.append(image);
            }

            $('#listaPersonajes').append(listItem);
        });
    }
});
