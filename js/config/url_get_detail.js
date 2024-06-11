//Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const presensiId = urlParams.get('presensiId');

export let urlFetch = 'https://ws-yoginara-2024-479b633e2c8b.herokuapp.com/presensi/' + presensiId;
