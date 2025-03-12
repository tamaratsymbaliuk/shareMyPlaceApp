class Modal {

constructor(contentId) {
    this.fallback
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTempateEl = document.getElementById('modal-template');

}
  show() {
      if ('content' in document.createElement('template')) {

      } else {
          // fallback code
          alert();

      }
  }

  hide() {}
}
