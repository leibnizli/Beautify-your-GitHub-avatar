let radiusValue = '0.375rem';
chrome.storage.sync.get({borderRadius: '0.375rem'}, (items) => {
    radiusValue = items.borderRadius;
  }
)

function main() {
  const avatar = document.querySelector('img.avatar.avatar-user.width-full');
  if (avatar) {
    avatar.style.setProperty('border-radius', radiusValue, 'important');
    avatar.style.setProperty('transition', '0.2s');
  }
}

main();

setInterval(() => {
  main();
}, 3000);
window.addEventListener('popstate', function (event) {
  main();
});
