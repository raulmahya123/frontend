import { addChild } from "https://jscroot.github.io/element/croot.js";
import {getRandomColor,getRandomColorName} from "https://jscroot.github.io/image/croot.js";
import {presensiTag,presensiClass,presensiContent} from "../template/table.js";

export function isiTablePresensi(results){
    results.forEach(isiRow);
}

function isiRow(value){
    let content=presensiContent.replace("#NAMA#",value.Longitude).replace("#PHONENUMBER#",value.Latitude).replace("#LOKASI#",value.Location).replace("#KET#",value.Phone_number).replace("#MASUK#",value.Datetime).replace("#PULANG#",value.Datetime).replace("#DURASI#",value.Datetime).replace("#WARNA#",getRandomColor()).replace(/#WARNALOGO#/g,getRandomColorName());
    addChild("presensi",presensiTag,presensiClass,content);
}