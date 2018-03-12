var ss360Config = {
    /********* General *********/
    siteId: 'doc.sitecore.net',
    animationSpeed: 250,
    themeColor: '#329fd9',
    showErrors: false,
    /********* Search Box *********/
    searchBoxSelector: '#searchBox',
    searchBoxStyle: {
        text: {
            color: '#408080',
            size: '14px',
        },
        background: {
            color: '#ffffff',
        },
        padding: '10px',                
        icon: {
            image: undefined,
        },
        border: {
            color: '#dddddd',
            radius: '7px',
        },
        button: {
            text: ' ',
            icon: 'magnifier'
        }
    },
    placeholder: 'search',
    searchButton: '#ss360SearchButton',
    /********* Search Suggestions *********/
    showSearchSuggestions: true,
    suggestionsStyle: {
        text: {
            color: '#333333',
        },
        background: {
            color: '#ffffff'
        },
        padding: '10px',
        distanceFromTop: '11px',
        border: {
            color: '#dddddd',
            radius: '7px',
        },
    },
    showImagesSuggestions: true,
    numSuggestions: 4,
    maxQuerySuggestions: 3,
    minChars: 1,
    highlight: true,
    /********* Search Results *********/
    searchResults: undefined,
    searchResultsCaption: 'We found #COUNT# results for your query "#QUERY#"',
    numResults: 50,
    navigation: 'top',
    highlightQueryTerms: true,
    showImagesResults: true,
    showResultLink: true,
    resultLinksOpenNewTab: true,
    queryCorrectionText: 'Did you mean "#CORRECTION#"?',
    noResultsText: 'Sorry, we have not found any matches for your query.',
    otherContentGroupName: 'Other',
    ignoreOtherContentGroup: false,
    moreResultsButton: 'Show more results',
    moreResultsPagingSize: 5,
    groupResults: true,
    loader: {
        type: 'circle'
    }
}