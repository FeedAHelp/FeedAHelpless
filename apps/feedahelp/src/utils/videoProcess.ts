import { getFileAsset } from '@sanity/asset-utils'
import { config } from '../utils/cms/sanity'

export function videoAssetFor(source: string) {
  return getFileAsset(source, config)
}
