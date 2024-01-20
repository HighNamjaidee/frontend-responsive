function selectItem(contentList, n) {
  for (let i = 0; i < contentList.children.length; i++) {
    let content = contentList.children[i];
    let rect = content?.getBoundingClientRect();
    if (
      contentList.scrollLeft != content.offsetLeft &&
      ((rect?.left > 0 && rect?.left < window.screen.width / 2) ||
        (rect?.left < 0 && rect?.left > (window.screen.width / 2) * -1))
    ) {
      contentList.scrollTo({
        left: content.offsetLeft,
        behavior: "smooth",
      });
      break;
    }
  }
}
function scrollToItem() {}
// function activeBullet(i) {}
window.onload = () => {
  let collection = document.getElementsByClassName("content-l");
  for (let i = 0; i < collection.length; i++) {
    // swiper click
    let swiper = document.getElementsByClassName("swiper-bullet")?.[i];
    let lis = swiper?.getElementsByTagName("li");
    for (let i2 = 0; i2 < lis.length; i2++) {
      lis[i2].addEventListener("click", (e) => {
        collection[i].scrollTo({
          left: collection[i].children[i2].offsetLeft,
          behavior: "smooth",
        });
      });
    }
    let timer = [];

    //content swipe event
    collection[i].addEventListener("scroll", (e) => {
      e.preventDefault();
      //active bullet
      let contentList = e.target;
      if (lis) {
        for (let i = 0; i < contentList.children.length; i++) {
          let content = contentList.children[i];
          let rect = content?.getBoundingClientRect();
          if (
            rect?.left > (window.screen.width / 2) * -1 &&
            rect?.left < window.screen.width / 2
          ) {
            lis[i]?.classList.add("isActive");
            lis[i - 1]?.classList.remove("isActive");
            lis[i + 1]?.classList.remove("isActive");
          }
        }
      }
      //end

      clearTimeout(timer[i]);
      timer[i] = setTimeout(() => {
        selectItem(contentList, i);
      }, 100);
    });
  }
};
