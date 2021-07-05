function tambah (){
    if(document.getElementById("c1").checked){
        document.getElementById('c1').setAttribute('value', '1');
        var angka1 =parseFloat(document.getElementById("angka1").value);
    }else{
        document.getElementById('c1').setAttribute('value', '0');
        var angka1 = 0;
    }
    
    if(document.getElementById("c2").checked){
        document.getElementById('c2').setAttribute('value', '1');
        var angka2 =parseFloat(document.getElementById("angka2").value);
    }else{
        document.getElementById('c2').setAttribute('value', '0');
        var angka2 = 0;
    } 

    if(document.getElementById("c3").checked){
        document.getElementById('c3').setAttribute('value', '1');
        var angka3 =parseFloat(document.getElementById("angka3").value);
    }else{
        document.getElementById('c3').setAttribute('value', '0');
        var angka3 = 0;
    } 

    var c1 = parseFloat(document.getElementById("c1").value);
    var c2 = parseFloat(document.getElementById("c2").value);
    var c3 = parseFloat(document.getElementById("c3").value);
    var cek = c1 + c2 + c3;

    if(parseInt(cek) >= 2){
        var hasil = angka1+angka2+angka3;
    }else{
        alert('minimal harus 2 input yang di pilih');
    }
    document.calculator.hasil.value=hasil;
}

function kurang (){
    if(document.getElementById("c1").checked){
        document.getElementById('c1').setAttribute('value', '1');
        var angka1 =parseFloat(document.getElementById("angka1").value);
    }else{
        document.getElementById('c1').setAttribute('value', '0');
        var angka1 = 0;
    }
    
    if(document.getElementById("c2").checked){
        document.getElementById('c2').setAttribute('value', '1');
        var angka2 =parseFloat(document.getElementById("angka2").value);
    }else{
        document.getElementById('c2').setAttribute('value', '0');
        var angka2 = 0;
    } 

    if(document.getElementById("c3").checked){
        document.getElementById('c3').setAttribute('value', '1');
        var angka3 =parseFloat(document.getElementById("angka3").value);
    }else{
        document.getElementById('c3').setAttribute('value', '0');
        var angka3 = 0;
    } 

    var c1 = parseFloat(document.getElementById("c1").value);
    var c2 = parseFloat(document.getElementById("c2").value);
    var c3 = parseFloat(document.getElementById("c3").value);
    var cek = c1 + c2 + c3;

    if(parseInt(cek) >= 2){
        if(angka1 == 0){
            var hasil = angka2 - angka3;
        }else if(angka2 == 0){
            var hasil = angka1 - angka3;
        }else if(angka3 == 0){
            var hasil = angka1 - angka2;
        }else{
            var hasil = angka1-angka2-angka3;
        }
    }else{
        alert('minimal harus 2 input yang di pilih');
    }
    document.calculator.hasil.value=hasil;
}

function kali (){
    if(document.getElementById("c1").checked){
        document.getElementById('c1').setAttribute('value', '1');
        var angka1 =parseFloat(document.getElementById("angka1").value);
    }else{
        document.getElementById('c1').setAttribute('value', '0');
        var angka1 = 0;
    }
    
    if(document.getElementById("c2").checked){
        document.getElementById('c2').setAttribute('value', '1');
        var angka2 =parseFloat(document.getElementById("angka2").value);
    }else{
        document.getElementById('c2').setAttribute('value', '0');
        var angka2 = 0;
    } 

    if(document.getElementById("c3").checked){
        document.getElementById('c3').setAttribute('value', '1');
        var angka3 =parseFloat(document.getElementById("angka3").value);
    }else{
        document.getElementById('c3').setAttribute('value', '0');
        var angka3 = 0;
    } 

    var c1 = parseFloat(document.getElementById("c1").value);
    var c2 = parseFloat(document.getElementById("c2").value);
    var c3 = parseFloat(document.getElementById("c3").value);
    var cek = c1 + c2 + c3;

    if(parseInt(cek) >= 2){
        if(angka1 == 0){
            var hasil = angka2 * angka3;
        }else if(angka2 == 0){
            var hasil = angka1 * angka3;
        }else if(angka3 == 0){
            var hasil = angka1 * angka2;
        }else{
            var hasil = angka1*angka2*angka3;
        }
    }else{
        alert('minimal harus 2 input yang di pilih');
    }
    document.calculator.hasil.value=hasil;
}

function bagi (){
    if(document.getElementById("c1").checked){
        document.getElementById('c1').setAttribute('value', '1');
        var angka1 =parseFloat(document.getElementById("angka1").value);
    }else{
        document.getElementById('c1').setAttribute('value', '0');
        var angka1 = 0;
    }
    
    if(document.getElementById("c2").checked){
        document.getElementById('c2').setAttribute('value', '1');
        var angka2 =parseFloat(document.getElementById("angka2").value);
    }else{
        document.getElementById('c2').setAttribute('value', '0');
        var angka2 = 0;
    } 

    if(document.getElementById("c3").checked){
        document.getElementById('c3').setAttribute('value', '1');
        var angka3 =parseFloat(document.getElementById("angka3").value);
    }else{
        document.getElementById('c3').setAttribute('value', '0');
        var angka3 = 0;
    } 

    var c1 = parseFloat(document.getElementById("c1").value);
    var c2 = parseFloat(document.getElementById("c2").value);
    var c3 = parseFloat(document.getElementById("c3").value);
    var cek = c1 + c2 + c3;

    if(parseInt(cek) >= 2){
        if(angka1 == 0){
            var hasil = angka2 / angka3;
        }else if(angka2 == 0){
            var hasil = angka1 / angka3;
        }else if(angka3 == 0){
            var hasil = angka1 / angka2;
        }else{
            var hasil = angka1/angka2/angka3;
        }
    }else{
        alert('minimal harus 2 input yang di pilih');
    }
    document.calculator.hasil.value=hasil;
}