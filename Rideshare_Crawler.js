//Arun Gireesan 2017
//ECE 651

var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');


var START_URL = "https://www.kijiji.ca/b-travel-vacations/kitchener-waterloo/c302l1700212";
//var SEARCH_WORD = "ride share";
var MAX_PAGES_TO_VISIT = 10;
var MAX_SEARCH_WORDS = 4;


var pagesVisited = {};
var numPagesVisited = 0;
var pagesToVisit = [];
var url = new URL(START_URL);
var baseUrl = url.protocol + "//" + url.hostname;


var SEARCH_WORD = ["ride share","ride","taxi","airport"];
var word_num = 0;


pagesToVisit.push(START_URL);
console.log("RideShare KIJIJI Cawler 1.0");


crawl();


function crawl()
{
  if(numPagesVisited >= MAX_PAGES_TO_VISIT)
  {
    console.log("Visited max number of pages");
    return;
  }

  var nextPage = pagesToVisit.pop();

  if (nextPage in pagesVisited)
  {
    // Crawl again if page already visited
    crawl();
  }

  else
  {
    // Visit the new page
    visitPage(nextPage, crawl);
  }
}


f

function searchForWord($, word)

{
  var bodyText = $('html > body').text().toLowerCase();
  return(bodyText.indexOf(word.toLowerCase()) !== -1);
}

function collectInternalLinks($)

{

  var relativeLinks = $("a[href^='/']");
     console.log("Found " + relativeLinks.length + " relative links on page");

     relativeLinks.each(function()
     {
         pagesToVisit.push(baseUrl + $(this).attr('href'));
     });

     //var absoluteLinks = $("a[href^='http']");
//  absoluteLinks.each(function()
    //{
      //allAbsoluteLinks.push($(this).attr('href'));
//  });
}
