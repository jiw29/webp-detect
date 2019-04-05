const webpTests = {
  webp: {
    uri: 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
    name: 'webp',
  },
  'webp.alpha': {
    uri: 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==',
    name: 'webp.alpha',
  },
  'webp.animation': {
    uri: 'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
    name: 'webp.animation',
  },
  'webp.lossless': {
    uri: 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=',
    name: 'webp.lossless',
  },
};

// eslint-disable-next-line import/prefer-default-export
export const detechWebp = (prop = 'webp') => new Promise((reslove, reject) => {
  const { uri } = webpTests[prop];
  // eslint-disable-next-line no-undef
  const image = new Image();
  image.onerror = () => {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject(false);
  };
  image.onload = (event) => {
    if (event && event.type === 'load' && image.width === 1) {
      return reslove(true);
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return reject(false);
  };
  image.src = uri;
});
