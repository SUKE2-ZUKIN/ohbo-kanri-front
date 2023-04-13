import { DefaultsInstance } from "vuetify/lib/framework.mjs"

export const defaults: DefaultsInstance = {
  VAppBar: {
    elevation: 0,
  },
  VBtn: {
    variant: 'flat',
    height: 38,
    rounded: 'lg',
    size: 'small',
  },
  VtextField: {
    color: 'primary',
    variant: 'outlined',
    density: 'comfortable',
  },
  VDataTable: {
    dense: true,
  }
}