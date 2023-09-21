import type { IconName } from '~/ui/components/elements/Icon'

export type LocaleInfo = {
    countryCode: string
    countryName: string
    countryIcon: Extract<IconName, `flag${string}`>
    isUnitedStates: boolean
    isVisualization: boolean
    languageCode: string
    locale: string
}

export function getLocaleInfo(arg0: string | undefined, arg1?: string): LocaleInfo | undefined {
    let languageCode = arg0?.split('-')[0]
    let countryCode = arg1 ?? arg0?.split('-')[1]

    if (!languageCode || !countryCode) return undefined

    languageCode = languageCode.toLowerCase()
    countryCode = countryCode.toUpperCase()

    const countryName = new Intl.DisplayNames(languageCode, { type: 'region' }).of(countryCode) ?? countryCode
    const countryNameEn = new Intl.DisplayNames('en', { type: 'region' }).of(countryCode) ?? countryCode

    const locale = `${languageCode}-${countryCode}`.toLowerCase()

    return {
        countryCode,
        countryName,
        countryIcon: `flag${countryNameEn.replace(' ', '')}` as LocaleInfo['countryIcon'],
        isUnitedStates: countryCode === 'US',
        isVisualization: locale === 'xx-xx',
        languageCode,
        locale,
    }
}
