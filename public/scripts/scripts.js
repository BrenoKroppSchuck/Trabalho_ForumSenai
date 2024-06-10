document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('post-modal');
    const btn = document.getElementById('new-post');
    const span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    document.getElementById('post-form').onsubmit = function(event) {
        event.preventDefault();
        // Lógica para enviar o formulário de novo post
    };

    document.querySelectorAll('.like-button').forEach(button => {
        button.onclick = function() {
            // Lógica para curtir o post
        };
    });
});
