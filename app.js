const { createAbstractBuilder } = require("typescript");

 function LoadJson() {

    const response =  fetch('vhmml_rr_fulldata.json')
    .then(res => res.json())
    .then(json => {
        const items = json

        for (var item of items) 
        {
            $('#datatable tr:last').after('<tr><td>' + item.id + '</td><td>' + item.bibliography + '</td><td>' + item.notes + '</td></tr>');

        }
    });


    
};

