(() => {
  let targetNode = document.querySelector("div#Cart-Drawer");
  if(targetNode){
    const config = {attributes: true, childList: true, subtree: true};
    let targetNode = document.querySelector("div#Cart-Drawer")
    const callback = (mutationList, observer) => {
      let listeners = document.querySelector("div#Cart-Drawer").eventListenerList

        console.log(listeners.change[0])
      if(listeners.change.length > 1) {
          for (let i = 0; i < listeners.change.length - 1; i++) {
            
              document.querySelector("div#Cart-Drawer").removeEventListener("change", listeners["change"][i])
          }
      }
  
       observer.observe(targetNode, config);
  };
  
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
  }
})()