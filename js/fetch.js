import { get } from "https://bukulapak.github.io/api/process.js";
let urlAPI = "https://ws-yoginara2024-6b64bd121a73.herokuapp.com/presensi";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}