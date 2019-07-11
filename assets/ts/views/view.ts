export interface IView {
    element: HTMLElement;
    createElement: (tagName: string, className: string, attributes: { [key: string]: string }) => HTMLElement;
}

export default class View implements IView {
    element: HTMLElement;


    public createElement(tagName: string, className?: string, attributes?: { [key: string]: string }): HTMLElement {
        const element: HTMLElement = document.createElement(tagName);
        if (className)
            element.classList.add(className);
        if (attributes)
            Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
        
        return element;
    }
}
