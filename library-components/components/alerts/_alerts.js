document.addEventListener('DOMContentLoaded', function () {
    // récupère l'alerte qui contient le bouton .btn-close cliqué
    const alert = document.querySelector('.alert-dismissible');
    // récupère le bouton .btn-close cliqué
    const btnClose = alert.querySelector('.btn-close');
    // écoute le clic sur le bouton .btn-close
    btnClose.addEventListener('click', function () {
        // cache l'alerte
        alert.remove();
    });
});