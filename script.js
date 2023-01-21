
function openVideo() {
  var modal = document.getElementById("modal-video");
  modal.classList.add("open");
}

function closeVideo(modalId) {    
    var modal = document.getElementById(modalId);
    modal.classList.remove("open");
}
