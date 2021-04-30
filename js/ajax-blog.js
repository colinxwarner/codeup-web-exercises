"use strict";


const blogData = "data/blog.json";

function handleResponse(data) {
    let $title = $(data.title);
    let $content = $(data.content);
    let $category = $(data.$category);
    let $date = $(data.date);

    for (let i = 0; i < data.length(); i += 1) {
        let $divContainer = $("#header");
        let $divTitle = $("<div>").attr("card-title card-body").addClass("card-title card-header").text(data.title);
        let $divBody = $("<div>").addClass("card-text").text(data.content);
        let $divCategory = $("<div>").addClass("card-text").text(data.category);
        let $divDate = $("<div>").addClass("card-text").text(data.date);

        $divContainer.append([$divTitle, $divBody]);
    }

    console.log($title);
    console.log($content);
    console.log($category);
    console.log($date);
}

function handleGet() {
    $.get(blogData).done(handleResponse);
}

handleGet();

