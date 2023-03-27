import { get } from "https://jscroot.github.io/api/croot.js";
import {setInner,addChild } from "https://jscroot.github.io/element/croot.js";
import {getRandomColor,getRandomColorName} from "https://jscroot.github.io/image/croot.js";
import {presensiTag,presensiClass,presensiContent} from "./template/table.js"


let URLPresensi = "https://testinggeo1.herokuapp.com/presensi";

get(URLPresensi,isiTablePresensi);

function isiTablePresensi(results){
    results.forEach(isiRow);
}

function isiRow(value){
    let content=presensiContent.replace("#NAMA#",value.Biodata.Nama).replace("#PHONENUMBER#",value.Phone_number).replace("#LOKASI#",value.Location).replace("#KET#",value.Checkin).replace("#MASUK#",value.Datetime).replace("#PULANG#",value.Datetime).replace("#DURASI#",value.Datetime).replace("#WARNA#",getRandomColor()).replace(/#WARNALOGO#/g,getRandomColorName());
    addChild("presensi",presensiTag,presensiClass,content);
}


setInner("namadivisi","Dari croot.js");