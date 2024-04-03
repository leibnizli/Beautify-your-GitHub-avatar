function main(){
  const avatar = document.querySelector('img.avatar.avatar-user.width-full');
  console.log(avatar);
  if (avatar) {
    chrome.storage.sync.get(
      {borderRadius: '0.375rem'},
      (items) => {
        avatar.style.setProperty('border-radius', items.borderRadius, 'important');
        avatar.style.setProperty('transition', '0.2s');
      }
    );
  }
}
console.log(window.location.href);
window.addEventListener('popstate', function(event) {
  main();
});
main();
