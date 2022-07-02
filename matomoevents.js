/*
The belove code example tracks the following event data:
Event Category: Contact
Event Action: Email Link Click
Event Name: name@example.com
*/

_paq.push(['trackEvent', 'Contact', 'Email Link Click', 'name@example.com']);

/*
The belove code example tracks when an item is added to a wishlist, with the value set to the item’s cost:

Event Category: Ecommerce
Event Action: Add to Wishlist
Event Name: Smartphone
Event Value: 1000
*/

_paq.push(['trackEvent', 'eCommerce', 'Add to Wishlist', 'Smartphone', 1000]);


// logs a conversion for goal 1
_paq.push(['trackGoal', 1]);


// accurately measure the time spent in the visit
_paq.push(['enableHeartBeatTimer']);


// Change how long a tab needs to be active to be counted as viewed in seconds/
// Requires a page to be actively viewed for 30 seconds for any heart beat request to be sent.
_paq.push(['enableHeartBeatTimer', 30]);

_paq.push(['trackSiteSearch',
    // Search keyword searched for
    "Banana",
    // Search category selected in your search engine. If you do not need this, set to false
    "Organic Food",
    // Number of results on the Search results page. Zero indicates a 'No Result Search Keyword'. Set to false if you don't know
    0
]);

// We recommend not to call trackPageView() on the Site Search Result page
// _paq.push(['trackPageView']);

_paq.push(['setCustomVariable',
    // Index, the number from 1 to 5 where this custom variable name is stored
    1,
    // Name, the name of the variable, for example: Gender, VisitorType
    "Gender",
    // Value, for example: "Male", "Female" or "new", "engaged", "customer"
    "Male",
    // Scope of the custom variable, "visit" means the custom variable applies to the current visit
    "visit"
]);

_paq.push(['trackPageView']);

//https://developer.matomo.org/guides/tracking-javascript-guide#manually-trigger-events
