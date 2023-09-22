(async () => {
  if (!window.location.href.includes('?grs=')) {
    window.location.replace('https://google.com')
  }
})();