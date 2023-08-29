function delay(milliseconds) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, milliseconds);
    });
    
  }
  delay(1000)
  console.log("Delayed task completed")