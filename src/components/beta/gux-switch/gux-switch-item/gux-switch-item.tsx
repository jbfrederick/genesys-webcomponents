import { Component, h, Host, Listen, JSX, Prop } from '@stencil/core';

@Component({
  styleUrl: 'gux-switch-item.less',
  tag: 'gux-switch-item'
})
export class GuxSwitchitem {
  @Prop()
  value: string;

  @Prop()
  disabled: boolean = false;

  @Prop()
  icon: boolean = false;

  @Listen('click')
  onClick(e: MouseEvent): void {
    if (this.disabled) {
      e.stopPropagation();
    }
  }

  render(): JSX.Element {
    return (
      <Host>
        <button
          type="button"
          class={{
            'gux-switch-item': true,
            'gux-icon': this.icon
          }}
          disabled={this.disabled}
        >
          <slot />
        </button>
      </Host>
    );
  }
}
