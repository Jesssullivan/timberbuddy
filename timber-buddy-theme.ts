import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';


export const tbTheme: CustomThemeConfig = {
    name: 'timber-buddy-theme',
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
        "--theme-font-family-heading": `system-ui`,
        "--theme-font-color-base": "0 0 0",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "10px",
        "--theme-rounded-container": "8px",
        "--theme-border-base": "4px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "255 255 255",
        "--on-secondary": "255 255 255",
        "--on-tertiary": "0 0 0",
        "--on-success": "0 0 0",
        "--on-warning": "0 0 0",
        "--on-error": "0 0 0",
        "--on-surface": "255 255 255",
        // =~= Theme Colors  =~=
        // primary | #482fd8
        "--color-primary-50": "228 224 249", // #e4e0f9
        "--color-primary-100": "218 213 247", // #dad5f7
        "--color-primary-200": "209 203 245", // #d1cbf5
        "--color-primary-300": "182 172 239", // #b6acef
        "--color-primary-400": "127 109 228", // #7f6de4
        "--color-primary-500": "72 47 216", // #482fd8
        "--color-primary-600": "65 42 194", // #412ac2
        "--color-primary-700": "54 35 162", // #3623a2
        "--color-primary-800": "43 28 130", // #2b1c82
        "--color-primary-900": "35 23 106", // #23176a
        // secondary | #7c3429
        "--color-secondary-50": "235 225 223", // #ebe1df
        "--color-secondary-100": "229 214 212", // #e5d6d4
        "--color-secondary-200": "222 204 202", // #deccca
        "--color-secondary-300": "203 174 169", // #cbaea9
        "--color-secondary-400": "163 113 105", // #a37169
        "--color-secondary-500": "124 52 41", // #7c3429
        "--color-secondary-600": "112 47 37", // #702f25
        "--color-secondary-700": "93 39 31", // #5d271f
        "--color-secondary-800": "74 31 25", // #4a1f19
        "--color-secondary-900": "61 25 20", // #3d1914
        // tertiary | #6bda06
        "--color-tertiary-50": "233 249 218", // #e9f9da
        "--color-tertiary-100": "225 248 205", // #e1f8cd
        "--color-tertiary-200": "218 246 193", // #daf6c1
        "--color-tertiary-300": "196 240 155", // #c4f09b
        "--color-tertiary-400": "151 229 81", // #97e551
        "--color-tertiary-500": "107 218 6", // #6bda06
        "--color-tertiary-600": "96 196 5", // #60c405
        "--color-tertiary-700": "80 164 5", // #50a405
        "--color-tertiary-800": "64 131 4", // #408304
        "--color-tertiary-900": "52 107 3", // #346b03
        // success | #55c2e4
        "--color-success-50": "230 246 251", // #e6f6fb
        "--color-success-100": "221 243 250", // #ddf3fa
        "--color-success-200": "213 240 248", // #d5f0f8
        "--color-success-300": "187 231 244", // #bbe7f4
        "--color-success-400": "136 212 236", // #88d4ec
        "--color-success-500": "85 194 228", // #55c2e4
        "--color-success-600": "77 175 205", // #4dafcd
        "--color-success-700": "64 146 171", // #4092ab
        "--color-success-800": "51 116 137", // #337489
        "--color-success-900": "42 95 112", // #2a5f70
        // warning | #4e9b84
        "--color-warning-50": "228 240 237", // #e4f0ed
        "--color-warning-100": "220 235 230", // #dcebe6
        "--color-warning-200": "211 230 224", // #d3e6e0
        "--color-warning-300": "184 215 206", // #b8d7ce
        "--color-warning-400": "131 185 169", // #83b9a9
        "--color-warning-500": "78 155 132", // #4e9b84
        "--color-warning-600": "70 140 119", // #468c77
        "--color-warning-700": "59 116 99", // #3b7463
        "--color-warning-800": "47 93 79", // #2f5d4f
        "--color-warning-900": "38 76 65", // #264c41
        // error | #d8a450
        "--color-error-50": "249 241 229", // #f9f1e5
        "--color-error-100": "247 237 220", // #f7eddc
        "--color-error-200": "245 232 211", // #f5e8d3
        "--color-error-300": "239 219 185", // #efdbb9
        "--color-error-400": "228 191 133", // #e4bf85
        "--color-error-500": "216 164 80", // #d8a450
        "--color-error-600": "194 148 72", // #c29448
        "--color-error-700": "162 123 60", // #a27b3c
        "--color-error-800": "130 98 48", // #826230
        "--color-error-900": "106 80 39", // #6a5027
        // surface | #262626
        "--color-surface-50": "222 222 222", // #dedede
        "--color-surface-100": "212 212 212", // #d4d4d4
        "--color-surface-200": "201 201 201", // #c9c9c9
        "--color-surface-300": "168 168 168", // #a8a8a8
        "--color-surface-400": "103 103 103", // #676767
        "--color-surface-500": "38 38 38", // #262626
        "--color-surface-600": "34 34 34", // #222222
        "--color-surface-700": "29 29 29", // #1d1d1d
        "--color-surface-800": "23 23 23", // #171717
        "--color-surface-900": "19 19 19", // #131313
    }
}