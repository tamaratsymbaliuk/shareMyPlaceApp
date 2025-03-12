class Modal {

constructor(contentId) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTempateEl = document.getElementById('modal-template');

}
  show() {
      if ('content' in document.createElement('template')) {
          const modalElements = document.importNode(this.modalTemplateEl.content, true);
          const modalElement = modalElements.querySelector('.modal')
      } else {
          // fallback code
          alert(this.fallbackText);

      }
  }

  hide() {}
}
