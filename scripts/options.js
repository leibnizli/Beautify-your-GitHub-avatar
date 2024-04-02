// Saves options to chrome.storage
const saveOptions = () => {
  const borderRadius = document.getElementById('borderRadius').value;

  chrome.storage.sync.set(
    {borderRadius: borderRadius},
    () => {
      // Update status to let user know options were saved.
      const status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(() => {
        status.textContent = '';
      }, 750);
    }
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get(
    {borderRadius: '0.375rem'},
    (items) => {
      document.getElementById('borderRadius').value = items.borderRadius;
    }
  );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
