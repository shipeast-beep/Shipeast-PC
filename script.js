document.getElementById('pcForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Zobrazí potvrzení uživateli
    alert("Děkujeme za vaši poptávku! Brzy vás budeme kontaktovat.");

    // Odešle formulář
    this.submit();
});
