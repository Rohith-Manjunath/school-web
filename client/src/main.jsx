import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../Redux/store.jsx";

// Options for Alert Provider
const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "50px",
  transition: transitions.SCALE,
};

// Clean up any standalone Appointio iframes that might be causing conflicts
document.addEventListener('DOMContentLoaded', () => {
  const cleanupAppointioIframes = () => {
    // Find any standalone Appointio iframes
    const appointioIframes = document.querySelectorAll('iframe[src*="appointio.co"]:not([data-managed="true"])');
    appointioIframes.forEach(iframe => {
      if (iframe.parentNode && iframe !== document.getElementById('managed-appointio-iframe')) {
        iframe.style.display = 'none'; // Hide them first to prevent flicker
        setTimeout(() => {
          if (iframe.parentNode) {
            iframe.parentNode.removeChild(iframe); // Remove them after a small delay
          }
        }, 100);
      }
    });
  };

  // Run cleanup immediately and then again after a short delay
  cleanupAppointioIframes();
  setTimeout(cleanupAppointioIframes, 500);
  
  // Also check again when the window has fully loaded
  window.addEventListener('load', () => {
    setTimeout(cleanupAppointioIframes, 1000);
  });
});

// This function handles any issues with Appointio iframes that appear after page navigation
const handleAppointioFrameIssues = () => {
  // This global handler makes sure appointio iframes don't cause layout issues
  let lastCleanupTime = 0;
  
  const observer = new MutationObserver(mutations => {
    const now = Date.now();
    // Don't run cleanup too frequently
    if (now - lastCleanupTime < 1000) return;
    
    for (const mutation of mutations) {
      if (mutation.type === 'childList' && mutation.addedNodes.length) {
        // Check if any iframes have been added
        const iframes = document.querySelectorAll('iframe[src*="appointio.co"]:not([data-managed="true"])');
        if (iframes.length > 0) {
          lastCleanupTime = now;
          
          // Only keep the managed iframe
          iframes.forEach(iframe => {
            if (iframe.id !== 'managed-appointio-iframe') {
              if (iframe.parentNode) {
                iframe.style.display = 'none';
                setTimeout(() => {
                  if (iframe.parentNode) {
                    iframe.parentNode.removeChild(iframe);
                  }
                }, 50);
              }
            }
          });
          break;
        }
      }
    }
  });
  
  // Start observing the document with the configured parameters
  observer.observe(document.body, { childList: true, subtree: true });
};

// Start the observer after a short delay
setTimeout(handleAppointioFrameIssues, 1000);

// Main rendering
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AlertProvider template={AlertTemplate} {...options}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </AlertProvider>
    </PersistGate>
  </Provider>
);