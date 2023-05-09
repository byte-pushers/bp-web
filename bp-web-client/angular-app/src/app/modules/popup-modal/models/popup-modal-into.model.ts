import {PopupModalInfo} from "./popup-modal-info";
import {PopupModalInfoProperties} from "./popup-modal-info.properties";

export class PopupModalIntoModel implements PopupModalInfo {
  #type: string = null;
  #title: string =  null;
  #messages: string[] = [];

  public static DEFAULT_CONFIG: PopupModalInfo = {
    type: null,
    title: null,
    messages: []
  }

  constructor(config: PopupModalInfoProperties) {
    this.#type = config?.type;
    this.#title = config?.title;
    this.#messages = config?.messages;
  }

  public get type(): string {
    return this.#type;
  }

  public get title(): string {
    return this.#title;
  }

  public get messages(): string[] {
    return this.#messages;
  }
}
