import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
} from '@angular/core';
import { ComponentRef } from '@angular/core/src/linker/component_factory';
import { Type } from '@angular/core/src/type';

/**
 * Low level component to embed and remove components directly to/from DOM.
 * Don't use it until you know what you are doing.
 */
@Injectable()
export class DomService {
  /**
   * Holds list of all already embedded components.
   */
  private embeddedComponents: ComponentRef<any>[] = [];

  /**
   * Returns list of embedded components.
   * @returns {ComponentRef<any>[]}
   */
  get components(): ComponentRef<any>[] {
    return this.embeddedComponents;
  }

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
  ) { }

  /**
   * Appends component to body.
   * Attach it to ng components tree.
   * Appends to body tag.
   * @param {Type<T>} component
   * @returns {ComponentRef<T>}
   */
  appendComponentToBody<T>(component: Type<T>): ComponentRef<T> {
    // 1. Create a component reference from the component
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory<T>(component)
      .create(this.injector);

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // 3. Get DOM element from component
    const domElem: HTMLElement = (<EmbeddedViewRef<T>> componentRef.hostView).rootNodes[0];

    // 4. Append DOM element to the body
    document.body.appendChild(domElem);

    // 5. Save component reference, to detach(remove) it later.
    this.embeddedComponents.push(componentRef);

    return componentRef;
  }

  /**
   * Removes specific component from DOM by it's reference.
   * @param {ComponentRef<any>} ref
   */
  detachComponent(ref: ComponentRef<any>) {
    this.embeddedComponents = this.embeddedComponents.filter(cmpRef => {
      if (cmpRef === ref) {
        // Remove it from the component tree and from the DOM
        this.appRef.detachView(ref.hostView);
        ref.destroy();
        return false;
      }

      return true;
    });
  }

  /**
   * Removes all embedded by this service components.
   */
  detachAll() {
    this.embeddedComponents.forEach(ref => {
      // Remove it from the component tree and from the DOM
      this.appRef.detachView(ref.hostView);
      ref.destroy();
    });

    // Clears all component references.
    this.embeddedComponents.length = 0;
  }
}
