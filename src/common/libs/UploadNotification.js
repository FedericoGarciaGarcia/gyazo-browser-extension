module.exports = class UploadNotification {
  constructor (tabId) {
    this.tabId = tabId
  }
  update (option, callback) {
    callback = callback || function () {}
    option.action = 'notification'
    chrome.tabs.sendMessage(this.tabId, option, callback)
  }
  finish (imagePageUrl, imageDataUrl, callback) {
    this.update({
      title: chrome.i18n.getMessage('uploadingFinishTitle'),
      message: chrome.i18n.getMessage('uploadingFinishMessage'),
      imagePageUrl: imagePageUrl,
      imageUrl: imageDataUrl,
      isFinish: true
    }, callback)
  }
}
