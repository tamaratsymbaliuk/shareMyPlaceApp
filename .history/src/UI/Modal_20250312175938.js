class Modal {

constructor(contentId) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTempateEl = document.getElementById('modal-template');

}
  show() {
      if ('content' in document.createElement('template')) {
          const modalContent = document.importNode()

      } else {
          // fallback code
          alert(this.fallbackText);

      }
  }

  hide() {}
}
