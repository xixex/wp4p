const fetchURL = url => fetch(url).then(res => res.json());

export default fetchURL;
