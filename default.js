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
})

$("#js-tocipher").on("input", function() {
  tocipher = vm_cipher.$data.tocipher;
  tocipher = tocipher.replace(/\s+/g, "").toUpperCase();
  vm_cipher.$data.ciphered = encycrpt(tocipher);
  tocipher = "";
});

$("#js-todecipher").on("input", function() {
  todecipher = vm_decipher.$data.todecipher;
  todecipher = todecipher.replace(/\s+/g, "").toUpperCase();
  vm_decipher.$data.deciphered = decycrpt(todecipher);
  todecipher = "";
});
