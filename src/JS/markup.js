export const getMarkUpAllImages = images => {
  return images
    .map(({ description, id, images, price, title }) => {
      const getMarkUpImages = ` 

<div class="photo-card">
  <img src="" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div>
`;

      return getMarkUpImages;
    })
    .join('');
};
