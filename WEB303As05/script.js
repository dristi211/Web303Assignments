/*
    Dristi Khondkar
    ID:0811195
    Assignment 05
*/


class ContentItem {
    constructor(id, name, description, categoryGenre) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.categoryGenre = categoryGenre;
    }

    updateContentItem(id, name, description, categoryGenre) {
        if(this.id ===id) {
            this.name = name || this.name;
            this.description || this.categoryGenre;
        }
    }

    toString() {
     return `<div class="content-item-wrapper"  id="content-item-$(this.id)">
        <h2>${this.name}</h2>
        <p>${this.description}<p>
        <div>${this.categoryGenre}</div>
    </div>`;
    }
}

const places = [
    new ContentItem(0, "St. John's", "Newfoundland, NL", "Beautiful landmark"),
    new ContentItem(1, "Kingston", "Ontario,ON","Thousand Island"),
    new ContentItem(2,"Niagara Falls", "Ontario, ON", "Niagara Falls"),
    new ContentItem(3,"Jasper National Park", "Alberta, AB", "Jasper National Park protects a vestige of the wildlife that once blanketed the West"),
    new ContentItem(4,"Banff National Park", "Alberta,AB", "Canadian Rocky Mountain Parks UNESCO World Heritage Site")
];

$(document).ready(function () {
        places.forEach(place => {
            $('#content-item-list').append(place.toString());
        });

        $('.content-item-wrapper').css({
            'border': '1px solid black',
            'width': '80%',
            'padding': '20px',
            'margin': '20px auto'
        });
    
});

$('#successful-update').click(function(){
    places[0].updateContentItem(0, "St. John's Updated", null, null);
    $('#content-item-list').empty(); //the list was clear
    places.forEach(place => {
        $('#content-item-list').append(place.toString());
    });

    $('.content-item-wrapper').css({
        'border': '1px solid black',
        'width': '80%',
        'padding': '20px',
        'margin': '20px auto'
    });
});

$('#unsuccessful-update').click(function(){
    places[0].updateContentItem(5, "Unsuccessful Update", null, null); //we don't have 5 index value
});
