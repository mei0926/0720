(function() {
  let pass = prompt("パスワードを入力してください");
  if(pass !== "meimei"){
    alert("アクセス権限なし");
    window.location.href = "about:blank";
  }
})();