document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    
    const input = document.querySelector('#message-input');
    document.querySelector('#link-form').classList.remove('hide');

    const encrypted = btoa(input.value);
    document.querySelector('#message-form').classList.add('hide');

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
});
