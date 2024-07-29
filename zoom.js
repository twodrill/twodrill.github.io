document.addEventListener('DOMContentLoaded', (event) => {
    const viewportMetaTag = document.createElement('meta');
    viewportMetaTag.name = 'viewport';
    viewportMetaTag.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(viewportMetaTag);
});
