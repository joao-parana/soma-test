import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `soma-test`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class SomaTest extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <h3>Testando WebSocket em echo.websocket.org</h3>
      <button on-click="send">Send Message Demo</button>
      <soma-request-websocket id="websocket" path="echo.websocket.org"></soma-request-websocket> 
      <!--  pathname="" location="url"  -->  
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'soma-test',
      }
    };
  }

  ready() {
    super.ready();
    console.log('I will wait 4 seconds to call the second soma-request-websocket');
    setTimeout(() => {
        this.$.websocket.request();
    }, 4000);
  }

  send() {
    console.log('sending message');
    this.shadowRoot.querySelector('soma-request-websocket').sendMessage({
        type: "TRACK",
        id: 5203,
        dsName: "U10_ST_WI_PW003"
    })
  }
}

window.customElements.define('soma-test', SomaTest);


    
