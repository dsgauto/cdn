    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const utm_source = urlParams.get('utm_source');
    const utm_term = urlParams.get('utm_term');
    sessionStorage.setItem('utm_source', utm_source);
    sessionStorage.setItem('utm_term', utm_term);



    