// Listen for mouseup events to detect when text is highlighted
document.addEventListener("mouseup", () => {
    const selectedText = window.getSelection().toString().trim();
    
    if (selectedText) {
      const data = {
        text: selectedText,
        timestamp: new Date().toISOString(),
        url: window.location.href
      };
  
      // Retrieve existing highlights or initialize an empty array
      chrome.storage.local.get({ highlights: [] }, (result) => {
        const highlights = result.highlights;
        console.log("Highlights retrieved:", highlights.length);
        highlights.push(data);
        localStorage.setItem('highlights', JSON.stringify(highlights));
  
        // Save the updated highlights array back to local storage
        chrome.storage.local.set({ highlights }, () => {
          console.log("Text highlight saved:", data);
        });
      });
    }
  });
  