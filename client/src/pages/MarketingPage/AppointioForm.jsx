import React, { useEffect } from 'react';

const AppointioForm = ({ className }) => {
  useEffect(() => {
    // Load Appointio script
    const appointioScript = document.createElement('script');
    appointioScript.src = 'https://link.appointio.co/js/form_embed.js';
    appointioScript.async = true;
    document.body.appendChild(appointioScript);

    // Clean up on component unmount
    return () => {
      if (document.body.contains(appointioScript)) {
        document.body.removeChild(appointioScript);
      }
    };
  }, []);

  return (
    <div className={className || 'appointio-container'}>
      <iframe
        src="https://link.appointio.co/widget/form/JJgfh0PMwBxRHUhuJRU8"
        style={{width:'100%', height:'676px', border:'none', borderRadius:'3px'}}
        id="inline-JJgfh0PMwBxRHUhuJRU8" 
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Landing Page form - MIS"
        data-layout-iframe-id="inline-JJgfh0PMwBxRHUhuJRU8"
        data-form-id="JJgfh0PMwBxRHUhuJRU8"
        title="Landing Page form - MIS"
      ></iframe>
    </div>
  );
};

export default AppointioForm;