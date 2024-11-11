function navigate(state) {
  const h1 = document.querySelector("h1");
  h1.textContent = state.path.toUpperCase();
}

["home", "about", "contact"].forEach((path) => {
  console.log(path);
  const button = document.querySelector("#" + path);
  button.addEventListener("click", () => {
    const state = { path }; // { path: "about" }
    history.pushState(state, "", path); // 1. 저장될 객체, 2. 새로 기록할 페이지 제목, 3.URL경로
    navigate(state);
  });
});

window.addEventListener("popstate", (e) => {
  navigate(e.state);
});
