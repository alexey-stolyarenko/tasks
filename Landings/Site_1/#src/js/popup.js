function showModal() {
    $videoSrc = $(this).data("src");
    $('#video').attr('src', $videoSrc);

}
let $videoSrc;
const modalFirst = document.getElementById('modalFirst');
const video = document.getElementById('video');
$('.owners__video_play').click(showModal);

modalFirst.addEventListener('hide.bs.modal', function () {
    video.setAttribute('src', video.getAttribute('src'))
})







