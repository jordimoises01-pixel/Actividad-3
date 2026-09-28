class NotiToast {
    constructor() {
        this.container = null;
    }

    _initContainer() {
        if (!this.container || !document.body.contains(this.container)) {
            this.container = document.createElement('div');
            this.container.className = 'notitoast-container';
            document.body.appendChild(this.container);
        }
    }

    show({ title = '', message = '', type = 'info', duration = 3000 }) {
        this._initContainer();

        const icons = {
            success: '✓',
            error: '✕',
            warning: '⚠',
            info: 'ℹ'
        };

        const toast = document.createElement('div');
        toast.className = `notitoast-card ${type}`;

        toast.innerHTML = `
            <div class="notitoast-icon">${icons[type] || 'ℹ'}</div>
            <div class="notitoast-body">
                ${title ? `<h4 class="notitoast-title">${title}</h4>` : ''}
                <p class="notitoast-message">${message}</p>
            </div>
            <button class="notitoast-close">&times;</button>
        `;

        this.container.appendChild(toast);

        const closeBtn = toast.querySelector('.notitoast-close');
        closeBtn.addEventListener('click', () => toast.remove());

        if (duration > 0) {
            setTimeout(() => {
                if (toast.parentNode) toast.remove();
            }, duration);
        }
    }
}

window.Toast = new NotiToast();