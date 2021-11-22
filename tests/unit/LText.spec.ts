import { shallowMount } from '@vue/test-utils'
import LText from '@/components/LText'

describe('LText.vue', () => {
  const { location } = window
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { href: '' }
    })
  })
  afterEach(() => {
    window.location = location
  })
  it('default LText render', () => {
    const text = 'new message'
    const wrapper = shallowMount(LText, {
      props: {
        text
      }
    })
    expect(wrapper.text()).toBe(text)
    expect(wrapper.element.tagName).toBe('DIV')
    const style = wrapper.attributes().style
    expect(style.includes('color')).toBeTruthy()
    expect(style.includes('font')).toBeFalsy
  })
})