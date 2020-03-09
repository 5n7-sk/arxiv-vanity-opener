chrome.contextMenus.onClicked.addListener(function(info) {
  if (info.menuItemId === "open-with-arxiv-vanity") {
    const top = "https://arxiv-vanity.com"
    const paper = info.pageUrl.split("/").reverse()[0]

    chrome.tabs.create({
      url: `${top}/papers/${paper}`,
    })
  }
})

chrome.contextMenus.removeAll(function() {
  chrome.contextMenus.create({
    id: "open-with-arxiv-vanity",
    title: "Open with arXiv Vanity",
    contexts: ["page"],
    documentUrlPatterns: ["https://arxiv.org/abs/*"],
  })
})
