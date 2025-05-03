document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkToggle");
  toggleBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  fetch('posts.json')
    .then(res => res.json())
    .then(posts => {
      const postList = document.getElementById("postList");
      posts.forEach(post => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${post.link}">${post.title}</a>`;
        postList.appendChild(li);
      });
    });
});
