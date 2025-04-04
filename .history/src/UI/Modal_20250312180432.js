class Modal {

constructor(contentId) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTempateEl = document.getElementById('modal-template');

}
  show() {
      if ('content' in document.createElement('template')) {
          const modalElements = document.importNode(this.modalTemplateEl.content, true);
          const modalElement = modalElements.querySelector('.modal');
          const backdropElement = modalElements.querySelector('.backdrop');
          const contentElement = document.importNode(this.contentTemplateEl.content, true);

          modalElement.appendChild(contentElement);

          document.body.insertAdjacentElement('afterbegin', modalElement);
          document.body.insertAdjacentElement("afterbegin", modalElement);




      } else {
          // fallback code
          alert(this.fallbackText);

      }
  }

  hide() {}
}
