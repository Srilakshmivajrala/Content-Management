document.addEventListener('DOMContentLoaded', function() {
  const addPostButton = document.getElementById('add-post');
  const postsList = document.getElementById('posts-list');

  addPostButton.addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').files[0];

    const post = document.createElement('div');
    post.classList.add('post');

    if (title) {
      const titleElement = document.createElement('h2');
      titleElement.textContent = title;
      post.appendChild(titleElement);
    }

    if (content) {
      const contentElement = document.createElement('p');
      contentElement.textContent = content;
      post.appendChild(contentElement);
    }

    if (image) {
      const imageElement = document.createElement('img');
      imageElement.src = URL.createObjectURL(image);
      post.appendChild(imageElement);
    }

    postsList.appendChild(post);
  });
});

  