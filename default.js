var key = "";
var keyPool = new Array(0);
var tocipher = "";
var todecipher = ""

$("#js-key").on("input", function() {
  key = vm_key.$data.key_input;
  key = key.replace(/\s+/g, "").toUpperCase().split("");
});

$("#js-submit-key").click(function() {
  if(key != "") {
    keyPool.push(key);
    key = "";
  } else {
    $("#js-no-key-input").fadeIn();
    let promise = new Promise(function(resolve, reject) {
      setTimeout(resolve, 2000);
    });
    promise.then(() => {
      $("#js-no-key-input").fadeOut();
    })
  }
  vm_key.$data.key_input = "";
})

$("#js-tocipher").on("input", function() {
  docipher();
});

$("#js-todecipher").on("input", function() {
  dodecipher();
});

$("#js-decipher-again").on("click", function() {
  dodecipher();
})

function docipher() {
  tocipher = vm_cipher.$data.tocipher;
  vm_cipher.$data.ciphered = encycrpt(tocipher);
  tocipher = "";
}

function dodecipher() {
  todecipher = vm_decipher.$data.todecipher;
  vm_decipher.$data.deciphered = decycrpt(todecipher);
  todecipher = ""
}
