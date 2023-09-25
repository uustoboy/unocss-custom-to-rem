import { definePreset } from '@unocss/core'

const remRE = /(-?[\.\d]+)rem/g

export interface RemToPxOptions {
  /**
   * 1rem = 1*rule px
   * @default 1
   */
  rule?: number
}

export const customToRem = definePreset((options: RemToPxOptions = {}) => {
  const {
    rule = 1,
  } = options

  return {
    name: 'unocss-custom-to-rem',
    postprocess: (util) => {
      util.entries.forEach((i) => {
        const value = i[1]
        if (typeof value === 'string' && remRE.test(value))
          i[1] = value.replace(remRE, (_, p1) => `${p1*4*(rule)}rem`)
      })
    },
  }
})

export default customToRem