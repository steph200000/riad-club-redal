/**
 * Handles Instagram link with mobile deep linking support
 * On mobile: tries to open Instagram app, falls back to web if app not available
 * On desktop: opens web link normally
 */
export const handleInstagramClick = (e, username = 'riadclubofficiel') => {
  // Check if device is mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  if (isMobile) {
    e.preventDefault();
    
    // Try to open Instagram app
    const appUrl = `instagram://user?username=${username}`;
    const webUrl = `https://www.instagram.com/${username}/`;
    
    // Track if page becomes hidden (app opened)
    let appOpened = false;
    const handleBlur = () => {
      appOpened = true;
    };
    
    window.addEventListener('blur', handleBlur);
    
    // Attempt to open Instagram app
    window.location.href = appUrl;
    
    // Fallback to web if app doesn't open within 500ms
    setTimeout(() => {
      window.removeEventListener('blur', handleBlur);
      if (!appOpened) {
        window.location.href = webUrl;
      }
    }, 500);
  }
  // Desktop: let the normal href behavior work
};

