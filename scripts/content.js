const avatar = document.querySelector('img.avatar.avatar-user');
if (avatar) {
  chrome.storage.sync.get(
    {borderRadius: '0.375rem'},
    (items) => {
      avatar.style.setProperty('border-radius', items.borderRadius, 'important');
    }
  );

}
