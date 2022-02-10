const tabToggle = (e) => {
    Array.from(document.querySelectorAll('.tab-item')).forEach(e => e.classList.remove('active'))
    e.classList.add('active')

    const tabParagraph = document.querySelectorAll(".tab-paragraph");
    Array.from(tabParagraph).forEach((e) => (e.classList.remove('active')));

    const a = document.getElementById(e.dataset.bsToggle);
    a.classList.add('active');

    // console.log(document.getElementById(e.dataset.bsToggle).style.display)
    // document.getElementById(e.dataset.bsToggle).style.display = "block";
}