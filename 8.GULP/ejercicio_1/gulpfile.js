const {watch,series,parallel,src,dest}=require("gulp");

function inicio(cb){
    console.log("Generando proyecto CV");
    cb();
}
function final(cb){
    console.log("Proyecto CV generado");
    cb();
}
function pipeline(){
    return src("css/*.css").pipe(dest("dist/"))
}
function pipeline2(){
    return src("cv.html").pipe(dest("dist/"))
}
function watch_css(cb){
    watch("css/*.css",inicio);
    cb();
}

exports.inicio=inicio;
exports.final=final;
exports.default=series(inicio,final);
exports.default=parallel(inicio,final);
exports.pipeline=pipeline;
exports.pipeline2=pipeline2;
exports.watch_css=watch_css;