function addAfterLoad(func) {  
    var oldonload = window.onload;  
    if (typeof window.onload != 'function') {  
        window.onload = func;  
    } else {  
        window.onload = function() {  
            if (oldonload) {  
                oldonload(); 
            }  
            func();  
        }  
    }  
}

function setupMetaDadoForm(domObj, setupData) { 
    addAfterLoad(replaceMetaDado(domObj, setupData))
}

function replaceMetaDado(domObj, setupData) {
    alert('SetupMetadados !!!!')
}