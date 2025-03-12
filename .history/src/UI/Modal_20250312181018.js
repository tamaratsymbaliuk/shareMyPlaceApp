export class Modal {

constructor(contentId) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTempateEl = document.getElementById('modal-template');

}
  show() {
      if ('content' in document.createElement('template')) {
          const modalElements = document.importNode(this.modalTemplateEl.content, true);
          this.modalElement = modalElements.querySelector('.modal');
          this.backdropElement = modalElements.querySelector('.backdrop');
          const contentElement = document.importNode(this.contentTemplateEl.content, true);

          this.modalElement.appendChild(contentElement);

          document.body.insertAdjacentElement('afterbegin', this.modalElement);
          document.body.insertAdjacentElement('afterbegin', this.backdropElement);




      } else {
          // fallback code
          alert(this.fallbackText);

      }
  }

  hide() {
      if (this.)
  }
}
