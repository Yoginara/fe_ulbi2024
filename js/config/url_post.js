export let urlPOST = 'https://ws-yoginara-2024-479b633e2c8b.herokuapp.com/insert';

export function AmbilResponse(result) {
  console.log(result); //menampilkan response API pada console
  alert(result.message); //menampilkan response API pada alert
  window.location.reload(); //reload halaman setelah klik ok pada alert
}
