import { get } from "https://jscroot.github.io/api/croot.js";
import { setInner } from "https://jscroot.github.io/element/croot.js";

let URLPresensi = "https://golang4.herokuapp.com/presensi";

get(URLPresensi,isiTablePresensi);

function isiTablePresensi(results){
    console.log(results);
    results.forEach(isiRow);
}

function isiRow(value){
    console.log(value)
}



setInner("namadivisi","Dari croot.js");